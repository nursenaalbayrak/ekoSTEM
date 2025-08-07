import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CO2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kaydedilen CO₂</Text>
      <Text style={styles.value}>87 kg</Text>
      <Text style={styles.desc}>
        Toplanan e-atıklar sayesinde toplamda 87 kg CO₂ salınımı engellendi.{"\n"}
        Her 1 kg e-atık, 10 kg CO₂ tasarrufu sağlar.{"\n\n"}
        Senin katkınla çevre daha yaşanabilir!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#388E3C', marginBottom: 16 },
  value: { fontSize: 40, fontWeight: 'bold', color: '#388E3C', marginBottom: 8 },
  desc: { fontSize: 18, color: '#333', textAlign: 'center' },
}); 