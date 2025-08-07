import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Geri dönüşüm noktalarının listesi
const recyclingCenters = [
  {
    id: 1,
    title: "Manisa E-Atık Kutusu",
    description: "Buradan 12 kit üretildi, 30 çocuğa ulaşıldı.",
    latitude: 38.4192,
    longitude: 27.1287,
  },
  {
    id: 2,
    title: "Celal Bayar Üniversitesi",
    description: "Üniversite kampüsünde e-atık kutusu. Buradan 8 kit üretildi, 20 çocuğa ulaşıldı.",
    latitude: 38.5522,
    longitude: 27.2350,
  },
  {
    id: 3,
    title: "Magnesia AVM E-Atık Kutusu",
    description: "AVM girişinde e-atık toplama kutusu. 5 kit üretildi, 10 çocuğa ulaşıldı.",
    latitude: 38.4441,
    longitude: 27.1605,
  },
  {
    id: 4,
    title: "İzmir Konak E-Atık Kutusu",
    description: "Konak Meydanı'nda e-atık toplama kutusu. 15 kit üretildi, 40 çocuğa ulaşıldı.",
    latitude: 38.4192,
    longitude: 27.1287,
  },
  {
    id: 5,
    title: "İzmir Bornova E-Atık Kutusu",
    description: "Bornova Metro çıkışında e-atık kutusu. 7 kit üretildi, 18 çocuğa ulaşıldı.",
    latitude: 38.4622,
    longitude: 27.2220,
  },
  {
    id: 6,
    title: "İzmir Alsancak E-Atık Kutusu",
    description: "Alsancak Kordon'da e-atık toplama kutusu. 10 kit üretildi, 25 çocuğa ulaşıldı.",
    latitude: 38.4322,
    longitude: 27.1428,
  },
  {
    id: 7,
    title: "Ege Üniversitesi E-Atık Kutusu",
    description: "Ege Üniversitesi kampüsünde e-atık kutusu. 9 kit üretildi, 22 çocuğa ulaşıldı.",
    latitude: 38.4550,
    longitude: 27.2225,
  },
];

export default function MapScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geri Dönüşüm Noktaları</Text>
      <Text style={styles.desc}>
        En yakın e-atık kutusunu haritada bul, topladığın atıklarla kendi STEM kitini oluştur!
        {"\n"}Marker'lara tıklayarak o noktadan kaç kit üretildiğini ve kaç çocuğa ulaşıldığını görebilirsin.
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.4192,
          longitude: 27.1287,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        showsUserLocation={true}
      >
        {recyclingCenters.map(center => (
          <Marker
            key={center.id}
            coordinate={{ latitude: center.latitude, longitude: center.longitude }}
            title={center.title}
            description={center.description}
            onPress={() => navigation.navigate('KonumDetay', {
              konum: {
                adres: 'Şişli Belediyesi, Mahmut Şevket Paşa Mahallesi, Site 6 Sk. No:4, İstanbul',
                foto: require('../assets/images/atik_kutusu.png'),
                // Diğer bilgiler...
              }
            })}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginTop: 16,
  },
  desc: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 120,
    alignSelf: 'center',
  },
});
