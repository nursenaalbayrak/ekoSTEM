import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, KeyboardAvoidingView, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Görev tipi
interface Task {
  title: string;
  desc: string;
  start: string;
  end: string;
  reward: string;
  level: string;
  status: string;
}

// Öğrenci tipi
interface Student {
  id: string;
  name: string;
  completedTasks: number;
  totalTasks: number;
  tasks: Task[];
}

const initialStudents: Student[] = [
  { id: '1', name: 'Ahmet Yılmaz', completedTasks: 3, totalTasks: 5, tasks: [] },
  { id: '2', name: 'Zeynep Kaya', completedTasks: 5, totalTasks: 5, tasks: [] },
  { id: '3', name: 'Mehmet Demir', completedTasks: 2, totalTasks: 5, tasks: [] },
];

const zorluklar = ['Kolay', 'Orta', 'Zor'];
const oduller = ['10 Puan', 'Rozet', 'Sertifika Adayı'];

function formatDate(date: Date) {
  return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
}

export default function OgretmenPaneliScreen() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskStart, setTaskStart] = useState('');
  const [taskEnd, setTaskEnd] = useState('');
  const [taskReward, setTaskReward] = useState('');
  const [taskLevel, setTaskLevel] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key:string]: boolean}>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [rewardDropdown, setRewardDropdown] = useState(false);
  const [levelDropdown, setLevelDropdown] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [kitDropdown, setKitDropdown] = useState(false);
  const [selectedKit, setSelectedKit] = useState('');

  const handleAssignTask = (student: Student) => {
    setSelectedStudent(student);
    setTaskTitle(''); setTaskDesc(''); setTaskStart(''); setTaskEnd(''); setTaskReward(''); setTaskLevel('');
    setErrors({});
    setModalVisible(true);
  };

  const validate = () => {
    const newErrors: {[key:string]: boolean} = {};
    if (!taskTitle) newErrors.title = true;
    if (!taskDesc) newErrors.desc = true;
    if (!taskStart) newErrors.start = true;
    if (!taskEnd) newErrors.end = true;
    if (!taskReward) newErrors.reward = true;
    if (!taskLevel) newErrors.level = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveTask = () => {
    if (!validate() || !selectedStudent) return;
    setLoading(true);
    setTimeout(() => {
      const newTask: Task = {
        title: taskTitle,
        desc: taskDesc,
        start: taskStart,
        end: taskEnd,
        reward: taskReward,
        level: taskLevel,
        status: 'Beklemede',
      };
      setStudents(prev => prev.map(s =>
        s.id === selectedStudent.id
          ? { ...s, tasks: [newTask, ...s.tasks], totalTasks: s.totalTasks + 1 }
          : s
      ));
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
      setModalVisible(false);
    }, 1000);
  };

  const totalCompleted = students.reduce((sum, s) => sum + s.completedTasks, 0);
  const totalTasks = students.reduce((sum, s) => sum + s.totalTasks, 0);

  const openModal = () => {
    setSelectedStudent(null);
    setSelectedKit('');
    setTaskStart('');
    setTaskEnd('');
    setTaskReward('');
    setTaskLevel('');
    setErrors({});
    setModalVisible(true);
  };

  const handleAssign = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      const newTask: Task = {
        title: taskTitle,
        desc: taskDesc,
        start: taskStart,
        end: taskEnd,
        reward: taskReward,
        level: taskLevel,
        status: 'Beklemede',
      };
      setStudents(prev => prev.map(s =>
        s.id === selectedStudent?.id
          ? { ...s, tasks: [newTask, ...s.tasks], totalTasks: s.totalTasks + 1 }
          : s
      ));
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1200);
      setModalVisible(false);
    }, 900);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öğretmen Paneli</Text>
      <Text style={styles.subtitle}>Öğrenci Takibi ve Görev Atama</Text>
      <View style={styles.reportBox}>
        <Text style={styles.reportText}>Toplam Öğrenci: {students.length}</Text>
        <Text style={styles.reportText}>Tamamlanan Görevler: {totalCompleted} / {totalTasks}</Text>
      </View>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.name}</Text>
            <Text style={styles.taskInfo}>Görevler: {item.completedTasks} / {item.totalTasks}</Text>
            <TouchableOpacity style={styles.assignButton} onPress={() => handleAssignTask(item)}>
              <MaterialCommunityIcons name="plus-circle" size={18} color="#fff" />
              <Text style={styles.assignButtonText}>Görev Ata</Text>
            </TouchableOpacity>
            {/* Atanan görevler */}
            {item.tasks && item.tasks.length > 0 && (
              <View style={styles.taskList}>
                {item.tasks.map((t, idx) => (
                  <View key={idx} style={styles.taskCard}>
                    <Text style={styles.taskTitle}>{t.title}</Text>
                    <Text style={styles.taskDesc}>{t.desc}</Text>
                    <Text style={styles.taskMeta}>Başlangıç: {t.start}  Bitiş: {t.end}</Text>
                    <Text style={styles.taskMeta}>Ödül: {t.reward}  Zorluk: {t.level}</Text>
                    <Text style={styles.taskStatus}>Durum: {t.status}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
      <Modal visible={modalVisible} transparent animationType="fade">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Görev Ata: {selectedStudent?.name}</Text>
              {/* Başlık */}
              <View style={[styles.inputRow, errors.title && styles.inputError]}>
                <FontAwesome5 name="tasks" size={18} color="#1976D2" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Başlık"
                  placeholderTextColor="#888"
                  value={taskTitle}
                  onChangeText={setTaskTitle}
                />
              </View>
              {/* Açıklama */}
              <View style={[styles.inputRow, errors.desc && styles.inputError]}>
                <Ionicons name="document-text-outline" size={18} color="#1976D2" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Açıklama"
                  placeholderTextColor="#888"
                  value={taskDesc}
                  onChangeText={setTaskDesc}
                />
              </View>
              {/* Başlangıç Tarihi */}
              <TouchableOpacity style={[styles.inputRow, errors.start && styles.inputError]} onPress={() => setShowStartPicker(true)}>
                <MaterialCommunityIcons name="calendar-start" size={18} color="#1976D2" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Başlangıç Tarihi Seç"
                  placeholderTextColor="#888"
                  value={taskStart}
                  onChangeText={setTaskStart}
                />
              </TouchableOpacity>
              {showStartPicker && (
                <DateTimePicker
                  value={taskStart ? new Date(taskStart.split('.').reverse().join('-')) : new Date()}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={(_, date) => {
                    setShowStartPicker(false);
                    if (date) setTaskStart(formatDate(date));
                  }}
                  textColor="#000"
                  themeVariant="light"
                />
              )}
              {/* Bitiş Tarihi */}
              <TouchableOpacity style={[styles.inputRow, errors.end && styles.inputError]} onPress={() => setShowEndPicker(true)}>
                <MaterialCommunityIcons name="calendar-end" size={18} color="#1976D2" style={styles.inputIcon} />
                <Text style={[styles.input, { color: taskEnd ? '#222' : '#aaa' }]}>
                  {taskEnd || 'Bitiş Tarihi Seç'}
                </Text>
              </TouchableOpacity>
              {showEndPicker && (
                <DateTimePicker
                  value={taskEnd ? new Date(taskEnd.split('.').reverse().join('-')) : new Date()}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={(_, date) => {
                    setShowEndPicker(false);
                    if (date) setTaskEnd(formatDate(date));
                  }}
                  textColor="#000"
                  themeVariant="light"
                />
              )}
              {/* Ödül Dropdown */}
              <TouchableOpacity style={[styles.inputRow, errors.reward && styles.inputError]} onPress={() => setRewardDropdown(!rewardDropdown)} activeOpacity={0.8}>
                <FontAwesome5 name="award" size={18} color="#1976D2" style={styles.inputIcon} />
                <Text style={[styles.input, { color: taskReward ? '#222' : '#aaa', paddingTop: 10 }]}>
                  {taskReward || 'Ödül Seç'}
                </Text>
                <Ionicons name={rewardDropdown ? 'chevron-up' : 'chevron-down'} size={18} color="#1976D2" style={{ marginLeft: 'auto' }} />
              </TouchableOpacity>
              {rewardDropdown && (
                <View style={styles.dropdownList}>
                  {oduller.map((odul, i) => (
                    <TouchableOpacity key={i} style={styles.dropdownItem} onPress={() => { setTaskReward(odul); setRewardDropdown(false); }}>
                      <Text style={styles.dropdownText}>{odul}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {/* Zorluk Dropdown */}
              <TouchableOpacity style={[styles.inputRow, errors.level && styles.inputError]} onPress={() => setLevelDropdown(!levelDropdown)} activeOpacity={0.8}>
                <MaterialCommunityIcons name="chart-bubble" size={18} color="#1976D2" style={styles.inputIcon} />
                <Text style={[styles.input, { color: taskLevel ? '#222' : '#aaa', paddingTop: 10 }]}>
                  {taskLevel || 'Zorluk Seç'}
                </Text>
                <Ionicons name={levelDropdown ? 'chevron-up' : 'chevron-down'} size={18} color="#1976D2" style={{ marginLeft: 'auto' }} />
              </TouchableOpacity>
              {levelDropdown && (
                <View style={styles.dropdownList}>
                  {zorluklar.map((z, i) => (
                    <TouchableOpacity key={i} style={styles.dropdownItem} onPress={() => { setTaskLevel(z); setLevelDropdown(false); }}>
                      <Text style={styles.dropdownText}>{z}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {/* Kaydet Butonu */}
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveButtonText}>Kaydet</Text>}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setModalVisible(false); setErrors({}); }}>
                <Text style={styles.cancelText}>İptal</Text>
              </TouchableOpacity>
              {/* Hata mesajı */}
              {Object.keys(errors).length > 0 && (
                <Text style={styles.errorText}>Lütfen tüm alanları doldurun.</Text>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      {/* Başarı mesajı */}
      {showSuccess && (
        <View style={styles.successBox}>
          <Ionicons name="checkmark-circle" size={22} color="#388E3C" />
          <Text style={styles.successText}>Görev başarıyla atandı!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1976D2', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'center' },
  reportBox: { backgroundColor: '#E3F2FD', borderRadius: 10, padding: 12, marginBottom: 18 },
  reportText: { fontSize: 15, color: '#1976D2', fontWeight: 'bold' },
  studentCard: { backgroundColor: '#F5F5F5', borderRadius: 10, padding: 16, marginBottom: 14 },
  studentName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  taskInfo: { fontSize: 15, color: '#555', marginVertical: 6 },
  assignButton: { backgroundColor: '#388E3C', padding: 10, borderRadius: 8, alignItems: 'center', marginTop: 6, flexDirection: 'row', justifyContent: 'center' },
  assignButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 15, marginLeft: 8 },
  taskList: { marginTop: 10 },
  taskCard: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 8, borderWidth: 1, borderColor: '#e0e0e0' },
  taskTitle: { fontWeight: 'bold', fontSize: 16, color: '#1976D2' },
  taskDesc: { fontSize: 14, color: '#333', marginBottom: 2 },
  taskMeta: { fontSize: 12, color: '#666' },
  taskStatus: { fontSize: 12, color: '#388E3C', marginTop: 2 },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.15)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#fff', borderRadius: 20, padding: 28, width: '90%', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.18, shadowRadius: 8, elevation: 8 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#1976D2', marginBottom: 18 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F6FB', borderRadius: 10, marginBottom: 12, paddingHorizontal: 10, borderWidth: 1, borderColor: '#e0e0e0' },
  input: { flex: 1, height: 44, fontSize: 15, color: '#222', backgroundColor: 'transparent', paddingLeft: 8 },
  inputIcon: { marginRight: 6 },
  inputError: { borderColor: '#B71C1C', backgroundColor: '#FFF5F5' },
  dropdownList: { backgroundColor: '#fff', borderRadius: 10, marginTop: -8, marginBottom: 8, width: '100%', borderWidth: 1, borderColor: '#e0e0e0', zIndex: 10 },
  dropdownItem: { padding: 12 },
  dropdownText: { fontSize: 15, color: '#1976D2' },
  saveButton: { backgroundColor: '#1976D2', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center', marginTop: 8, marginBottom: 4 },
  saveButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 17 },
  cancelText: { color: '#B71C1C', fontSize: 15, marginTop: 8, marginBottom: 4 },
  errorText: { color: '#B71C1C', fontSize: 14, marginTop: 4, textAlign: 'center' },
  successBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E8F5E9', borderRadius: 10, padding: 10, position: 'absolute', top: 30, alignSelf: 'center', zIndex: 100 },
  successText: { color: '#388E3C', fontWeight: 'bold', marginLeft: 8, fontSize: 15 },
}); 