import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function OdevlerimScreen({ route }: any) {
  // Giriş yapan öğrencinin adı/id'si ve öğrenciler listesi route.params ile gelmeli
  const { studentId, students } = route.params;
  const student = students.find((s: any) => s.id === studentId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atanan Görevlerim</Text>
      <FlatList
        data={student?.tasks || []}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text>{item.desc}</Text>
            <Text>Başlangıç: {item.start}  Bitiş: {item.end}</Text>
            <Text>Ödül: {item.reward}  Zorluk: {item.level}</Text>
            <Text>Durum: {item.status}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Henüz ödevin yok.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1976D2', marginBottom: 16 },
  taskCard: { backgroundColor: '#F3F6FB', borderRadius: 10, padding: 12, marginBottom: 10 },
  taskTitle: { fontWeight: 'bold', fontSize: 16, color: '#1976D2' },
});
