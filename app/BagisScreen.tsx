import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BagisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bağışlanan Eşya</Text>
      <Text style={styles.value}>54</Text>
      <Text style={styles.desc}>Toplanan e-atıklar sayesinde 54 eşya bağışlandı!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0288D1', marginBottom: 16 },
  value: { fontSize: 40, fontWeight: 'bold', color: '#0288D1', marginBottom: 8 },
  desc: { fontSize: 18, color: '#333', textAlign: 'center' },
}); 