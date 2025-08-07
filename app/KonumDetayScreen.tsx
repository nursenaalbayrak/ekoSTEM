import { FontAwesome5 } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  route: RouteProp<any, any>;
};

export default function KonumDetayScreen({ route }: Props) {
  const { konum } = route.params;

  // Kabul edilen atıklar örnek veri
  const kabulEdilenAtiklar = [
    { ad: 'Elektronik Atıklar', icon: 'check-circle', color: '#4CAF50' },
    { ad: 'Kağıt Atıklar', icon: 'check-circle', color: '#4CAF50' },
    { ad: 'Plastik Atıklar', icon: 'check-circle', color: '#4CAF50' },
    { ad: 'Cam Atıklar', icon: 'check-circle', color: '#4CAF50' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Atık Toplama Kutusu <FontAwesome5 name="recycle" size={20} color="#1976D2" /></Text>
      <Image
        source={konum.foto} // ör: require('../assets/images/atik_kutusu.png')
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.address}>{konum.adres}</Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Kabul Edilen Atıklar</Text>
      {kabulEdilenAtiklar.map((atik, idx) => (
        <View key={idx} style={styles.atikRow}>
          <FontAwesome5 name={atik.icon} size={18} color={atik.color} style={{ marginRight: 8 }} />
          <Text style={styles.atikText}>{atik.ad}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Yol Tarifi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', alignItems: 'center', padding: 20, flexGrow: 1 },
  header: { fontSize: 20, fontWeight: 'bold', color: '#1976D2', marginBottom: 12 },
  image: { width: '100%', height: 160, borderRadius: 14, marginBottom: 16 },
  address: { fontSize: 16, color: '#222', textAlign: 'center', marginBottom: 12 },
  divider: { width: '100%', height: 1, backgroundColor: '#eee', marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 8, alignSelf: 'flex-start' },
  atikRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, alignSelf: 'flex-start' },
  atikText: { fontSize: 15, color: '#333' },
  button: {
    backgroundColor: '#0D2950',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 24,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
});
