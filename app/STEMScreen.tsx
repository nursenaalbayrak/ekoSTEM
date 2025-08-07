import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function STEMScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STEM Öğren</Text>
      <Text style={styles.desc}>STEM projeleri, eğitim videoları ve adım adım görevler burada seni bekliyor!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#E64A19', marginBottom: 16 },
  desc: { fontSize: 18, color: '#333', textAlign: 'center' },
}); 