import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const tasks = [
  { id: '1', title: 'Nem sensörünü bağla' },
  { id: '2', title: 'Arduino kodunu yükle' },
  { id: '3', title: 'Sistemi test et' },
  { id: '4', title: 'Fotoğrafını çek ve yükle' },
];

export default function TaskScreen({ navigation }: any) {
  const [completed, setCompleted] = useState<string[]>([]);

  const toggleTask = (id: string) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eğitim Kiti Görevleri</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.taskItem,
              completed.includes(item.id) && styles.completedTask,
            ]}
            onPress={() => toggleTask(item.id)}
          >
            <Text
              style={[
                styles.taskText,
                completed.includes(item.id) && styles.completedText,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
      {completed.length === tasks.length && (
        <Text style={styles.congrats}>🎉 Tüm görevleri tamamladın!</Text>
      )}
      <Button
        title="Giriş Ekranına Dön"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Giris' }],
        })}
        color="#007AFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007AFF',
  },
  taskItem: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 12,
  },
  completedTask: {
    backgroundColor: '#d1ffd6',
  },
  taskText: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#4CAF50',
  },
  congrats: {
    marginTop: 24,
    fontSize: 20,
    color: '#4CAF50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
