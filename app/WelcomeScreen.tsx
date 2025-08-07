import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({ navigation, route }: any) {
  // Kullanıcı rolünü navigation parametrelerinden al
  const role = route?.params?.role || null;

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 16 }}
      />
      <Text style={styles.title}>Atıktan Eğitime</Text>
      <Text style={styles.vision}>
        Vizyonumuz: E-atıkların geri dönüşümünü teşvik ederek, çocuklara ve gençlere sürdürülebilir bir gelecek için STEM eğitimi sunmak.
      </Text>
      <ScrollView contentContainerStyle={styles.menu}>
        {role === 'teacher' ? (
          <>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#455A64' }]} onPress={() => navigation.navigate('OgretmenPaneli')}>
              <Ionicons name="school-outline" size={24} color="#fff" />
              <Text style={styles.buttonText}>Öğretmen Paneli</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#B71C1C' }]} onPress={() => navigation.replace('Login')}>
              <Ionicons name="exit-outline" size={24} color="#fff" />
              <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#1976D2' }]} onPress={() => navigation.navigate('Harita')}>
              <Ionicons name="map" size={24} color="#fff" />
              <Text style={styles.buttonText}>Harita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#388E3C' }]} onPress={() => navigation.navigate('CO2')}>
              <MaterialCommunityIcons name="molecule-co2" size={24} color="#fff" />
              <Text style={styles.buttonText}>Kaydedilen CO₂</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#FBC02D' }]} onPress={() => navigation.navigate('Cocuklar')}>
              <FontAwesome5 name="child" size={24} color="#fff" />
              <Text style={styles.buttonText}>Ulaşılan Çocuklar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#0288D1' }]} onPress={() => navigation.navigate('Bagis')}>
              <FontAwesome5 name="gift" size={24} color="#fff" />
              <Text style={styles.buttonText}>Bağışlanan Eşya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#388E3C' }]} onPress={() => navigation.navigate('KitiniTakipEt')}>
              <MaterialCommunityIcons name="atom" size={24} color="#fff" />
              <Text style={styles.buttonText}>Kitini Takip Et</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#E64A19' }]} onPress={() => navigation.navigate('STEM')}>
              <FontAwesome5 name="book" size={24} color="#fff" />
              <Text style={styles.buttonText}>STEM Öğren</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#7B1FA2' }]} onPress={() => navigation.navigate('Rozetlerim')}>
              <FontAwesome5 name="medal" size={24} color="#fff" />
              <Text style={styles.buttonText}>Başarılarım</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#512DA8' }]} onPress={() => navigation.navigate('Odevlerim', { studentId: route?.params?.studentId, students: route?.params?.students })}>
              <FontAwesome5 name="tasks" size={24} color="#fff" />
              <Text style={styles.buttonText}>Ödevlerim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#1976D2' }]} onPress={() => navigation.navigate('ToplumsalEtki')}>
              <FontAwesome5 name="globe" size={24} color="#fff" />
              <Text style={styles.buttonText}>Toplumsal Etki</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#B71C1C' }]} onPress={() => navigation.replace('Login')}>
              <Ionicons name="exit-outline" size={24} color="#fff" />
              <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
           
          </>
        )}
      </ScrollView>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1976D2', textAlign: 'center', marginBottom: 8 },
  vision: { fontSize: 15, color: '#333', textAlign: 'center', marginBottom: 18, marginHorizontal: 16 },
  menu: { alignItems: 'center', paddingBottom: 20 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    justifyContent: 'flex-start',
  },
  buttonText: { color: '#fff', fontSize: 18, marginLeft: 16, fontWeight: 'bold' },
  progressBarContainer: {
    width: '90%',
    height: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  progressBar: {
    width: '60%', // ilerleme oranı
    height: '100%',
    backgroundColor: '#388E3C',
    borderRadius: 8,
  },
});
