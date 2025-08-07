import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CocuklarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ulaşılan Çocuklar</Text>
      <Text style={styles.value}>120</Text>
      <Text style={styles.desc}>
        Bu projeyle 120 çocuğa STEM eğitimi ve sürdürülebilirlik bilinci kazandırıldı.{"\n\n"}
        Her bağışlanan kit, bir çocuğun hayatına dokunuyor!{"\n"}
        Sen de katkı sağla, daha fazla çocuğa ulaşalım.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FBC02D', marginBottom: 16 },
  value: { fontSize: 40, fontWeight: 'bold', color: '#FBC02D', marginBottom: 8 },
  desc: { fontSize: 18, color: '#333', textAlign: 'center' },
});
