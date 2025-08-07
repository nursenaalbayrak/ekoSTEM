import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function KitDetayScreen({ route }: any) {
  const { kit } = route.params;

  // Örnek: 8 görevden 5'i tamamlandı
  const totalTasks = kit.icerik.length;
  const completedTasks = 3; // Bunu dinamik yapabilirsin!
  const progress = completedTasks / totalTasks;

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <FontAwesome5 name="box-open" size={32} color="#1976D2" style={{ marginRight: 12 }} />
        <View>
          <Text style={styles.title}>{kit.ad}</Text>
          <Text style={styles.hedef}>🌍 {kit.hedef}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.progressText}>
        {completedTasks} / {totalTasks} görev tamamlandı
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>İçerik:</Text>
        <FlatList
          data={kit.icerik}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={20} color="#388E3C" />
              <Text style={styles.listText}>{item}</Text>
            </View>
          )}
        />
      </View>
      {/* İsteğe bağlı: Kazanım veya görev açıklaması */}
      {kit.kazanim && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kazanım:</Text>
          <Text style={styles.kazanim}>{kit.kazanim}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    elevation: 2,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1976D2' },
  hedef: { fontSize: 16, color: '#388E3C', marginTop: 4 },
  section: { marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1976D2', marginBottom: 8 },
  listItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  listText: { fontSize: 16, color: '#333', marginLeft: 8 },
  kazanim: { fontSize: 16, color: '#4CAF50', marginTop: 4 },
  progressBarContainer: {
    width: '100%',
    height: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#388E3C',
    borderRadius: 8,
  },
  progressText: { fontSize: 15, color: '#388E3C', marginBottom: 8 },
});
