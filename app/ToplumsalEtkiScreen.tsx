import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ToplumsalEtkiScreen() {
  // Örnek veriler, ileride dinamik yapılabilir
  const toplamKit = 12;
  const toplamAtik = 85; // kg
  const toplamCocuk = 230;
  const toplamRozet = 7;
  const toplamSertifika = 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toplumsal Etki</Text>
      <View style={styles.card}>
        <FontAwesome5 name="box-open" size={32} color="#1976D2" />
        <Text style={styles.value}>{toplamKit}</Text>
        <Text style={styles.label}>Oluşturulan STEM Kiti</Text>
      </View>
      <View style={styles.card}>
        <MaterialCommunityIcons name="recycle" size={32} color="#388E3C" />
        <Text style={styles.value}>{toplamAtik} kg</Text>
        <Text style={styles.label}>Toplanan E-Atık</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="child" size={32} color="#FBC02D" />
        <Text style={styles.value}>{toplamCocuk}</Text>
        <Text style={styles.label}>Ulaşılan Çocuk</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="medal" size={32} color="#7B1FA2" />
        <Text style={styles.value}>{toplamRozet}</Text>
        <Text style={styles.label}>Kazanılan Rozet</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="certificate" size={32} color="#E64A19" />
        <Text style={styles.value}>{toplamSertifika}</Text>
        <Text style={styles.label}>Kazanılan Sertifika</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1976D2', marginBottom: 24 },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    alignItems: 'center',
    padding: 20,
    marginBottom: 16,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  value: { fontSize: 24, fontWeight: 'bold', marginTop: 8, marginBottom: 4 },
  label: { fontSize: 16, color: '#555' },
});
