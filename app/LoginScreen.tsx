import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [role, setRole] = useState<'student' | 'teacher' | null>(null);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [ilgiliOgrenciId, setIlgiliOgrenciId] = useState('');
  const [studentsList, setStudentsList] = useState([]);

  const handleLogin = () => {
    if ((role === 'student' && name.trim()) || (role === 'teacher' && code.trim())) {
      const userData = { user: role === 'student' ? name : code, role };
      setUserInfo(userData);
      setIsLoggedIn(true);
      navigation.replace('Giris', {
        user: role === 'student' ? name : code,
        role: role,
        studentId: ilgiliOgrenciId,
        students: studentsList
      });
    } else {
      Alert.alert('Hata', 'Lütfen gerekli bilgileri doldurun.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    setRole(null);
    setName('');
    setCode('');
    navigation.replace('LoginScreen');
  };

  const handleRegister = () => {
    Alert.alert(
      'Kayıt Ol',
      'Kayıt işlemi için öğretmeninizle iletişime geçin veya okul yönetimine başvurun.',
      [{ text: 'Tamam', style: 'default' }]
    );
  };

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hoş Geldin!</Text>
        <Text style={styles.subtitle}>
          {userInfo?.role === 'student' ? 'Öğrenci' : 'Öğretmen'}: {userInfo?.user}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!role) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TouchableOpacity style={styles.button} onPress={() => setRole('student')}>
          <Text style={styles.buttonText}>Öğrenci Girişi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setRole('teacher')}>
          <Text style={styles.buttonText}>Öğretmen Girişi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleRegister}>
          <Text style={styles.secondaryButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{role === 'student' ? 'Öğrenci Girişi' : 'Öğretmen Girişi'}</Text>
      <TextInput
        style={styles.input}
        placeholder={role === 'student' ? 'Adın veya okul numaran' : 'Öğretmen kodu'}
        value={role === 'student' ? name : code}
        onChangeText={role === 'student' ? setName : setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setRole(null); setName(''); setCode(''); }}>
        <Text style={styles.linkText}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 24 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#1976D2', 
    marginBottom: 16 
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center'
  },
  input: { 
    width: '90%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 16, 
    fontSize: 16 
  },
  button: { 
    backgroundColor: '#1976D2', 
    padding: 16, 
    borderRadius: 8, 
    width: '90%', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1976D2'
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  secondaryButtonText: {
    color: '#1976D2',
    fontSize: 18,
    fontWeight: 'bold'
  },
  linkText: { 
    color: '#1976D2', 
    marginTop: 16,
    fontSize: 16
  },
});
