import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const kits = [
  {
    id: 1,
    ad: "Akıllı Tarım Kiti",
    hedef: "Hedef 2: Açlığa Son",
    icerik: [
      "Toprak nem sensörü",
      "Röle modülü (pompa kontrolü için)",
      "Mini su pompası",
      "Arduino Uno + jumper kablolar",
      "9V batarya / USB güç kablosu",
      "LCD ekran (veri göstermek için – opsiyonel)",
      "Bağlantı için hortum + depo (basit model)"
    ]
  },
  {
    id: 2,
    ad: "Hijyen Botu",
    hedef: "Hedef 3: Sağlıklı Bireyler",
    icerik: [
      "Ultrasonik mesafe sensörü",
      "Mini su pompası veya sabun motoru",
      "Arduino Nano",
      "Mini su kabı",
      "LED veya buzzer (uyarı için)",
      "USB kablo, kablo seti, maket kutu"
    ]
  },
  {
    id: 3,
    ad: "Eğitim Destekçisi",
    hedef: "Hedef 4: Nitelikli Eğitim",
    icerik: [
      "LDR (ışık sensörü)",
      "RGB LED veya masa lambası bağlantısı",
      "Arduino Uno veya Nano",
      "Breadboard",
      "USB kablo",
      "Basit kutu tasarımı (masa lambası modellemesi)"
    ]
  },
  {
    id: 4,
    ad: "Su Kaçağı Uyarı Botu",
    hedef: "Hedef 6: Temiz Su ve Sanitasyon",
    icerik: [
      "Su/Toprak nem sensörü",
      "Buzzer (alarm için)",
      "Arduino",
      "LED",
      "Kablo, batarya kablosu",
      "Basit montaj şeması"
    ]
  },
  {
    id: 5,
    ad: "Güneş Takip Sistemi",
    hedef: "Hedef 7: Temiz Enerji",
    icerik: [
      "2x LDR sensör",
      "Servo motor x2 (panel döndürme için)",
      "Güneş paneli (mini, 5V)",
      "Arduino Uno",
      "Breadboard, jumper kablolar",
      "Sabitlenebilir yüzey + yönleyici parçalar"
    ]
  },
  {
    id: 6,
    ad: "Engel Algılayan MiniBot",
    hedef: "Hedef 9: Sanayi, Yenilikçilik ve Altyapı",
    icerik: [
      "Ultrasonik sensör (HC-SR04)",
      "DC motor x2 + tekerlek",
      "Motor sürücü (L298N)",
      "Arduino Nano + batarya yuvası",
      "Robot altlığı / kasa parçaları",
      "Mini breadboard, lehimsiz bağlantı"
    ]
  },
  {
    id: 7,
    ad: "Akıllı Trafik Işığı",
    hedef: "Hedef 11: Sürdürülebilir Şehirler",
    icerik: [
      "Ses sensörü (mikrofon modülü)",
      "LDR (karanlık/ışık algılayıcı)",
      "RGB LED x3 veya trafik LED seti",
      "Arduino",
      "Karton/maket kutu (trafik ışığı modeli)",
      "USB kablo"
    ]
  },
  {
    id: 8,
    ad: "Karbon Sayacı",
    hedef: "Hedef 13: İklim Eylemi",
    icerik: [
      "DHT11 sensör (sıcaklık + nem)",
      "MQ135 (hava kalitesi/gaz sensörü)",
      "OLED ekran (veri gösterimi için)",
      "Arduino Uno",
      "Breadboard, kablolar",
      "Güç girişi/batarya"
    ]
  }
];

export default function KitiniTakipEtScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Kitini Takip Et</Text>
        <Text style={styles.desc}>Aşağıdaki kitlerden birini seçerek detaylarını ve görevlerini görebilirsin.</Text>
        <FlatList
          data={kits}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('KitDetay', { kit: item })}
            >
              <Text style={styles.kitTitle}>{item.ad}</Text>
              <Text style={styles.kitHedef}>🎯 {item.hedef}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingTop: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#388E3C', marginBottom: 8 },
  desc: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 16 },
  list: { width: '100%', alignItems: 'center', paddingBottom: 32 },
  card: {
    width: '95%',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    alignItems: 'flex-start',
    elevation: 2,
  },
  kitTitle: { fontSize: 20, fontWeight: 'bold', color: '#1976D2' },
  kitHedef: { fontSize: 16, color: '#333', marginTop: 4 },
}); 