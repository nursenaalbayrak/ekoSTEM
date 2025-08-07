import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function RozetlerimScreen() {
  const [activeTab, setActiveTab] = useState('badges'); // 'badges' veya 'certificates'

  // Rozet verileri
  const badges = [
    { id: 1, name: 'İlk Adım', description: 'İlk e-atığını geri dönüştürdün', icon: 'recycle', color: '#4CAF50', earned: true, date: '2024-01-15' },
    { id: 2, name: 'Çevre Kahramanı', description: '10 e-atık geri dönüştürdün', icon: 'leaf', color: '#8BC34A', earned: true, date: '2024-01-20' },
    { id: 3, name: 'STEM Öğrencisi', description: 'İlk STEM kitini tamamladın', icon: 'atom', color: '#2196F3', earned: true, date: '2024-01-25' },
    { id: 4, name: 'Topluluk Lideri', description: '5 arkadaşını davet ettin', icon: 'users', color: '#FF9800', earned: false, date: null },
    { id: 5, name: 'Sürdürülebilirlik Ustası', description: '50 e-atık geri dönüştürdün', icon: 'trophy', color: '#9C27B0', earned: false, date: null },
    { id: 6, name: 'Bilim İnsanı', description: 'Tüm STEM kitlerini tamamladın', icon: 'flask', color: '#E91E63', earned: false, date: null },
  ];

  // Sertifika verileri
  const certificates = [
    { id: 1, name: 'Çevre Dostu Sertifikası', description: 'Temel e-atık geri dönüşüm eğitimi', icon: 'certificate', color: '#4CAF50', progress: 75, required: 4, earned: false },
    { id: 2, name: 'STEM Uzmanı Sertifikası', description: 'İleri düzey STEM eğitimi', icon: 'graduation-cap', color: '#2196F3', progress: 30, required: 6, earned: false },
    { id: 3, name: 'Sürdürülebilirlik Lideri', description: 'Topluluk liderliği ve çevre bilinci', icon: 'crown', color: '#FF9800', progress: 20, required: 8, earned: false },
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const totalBadges = badges.length;

  const renderBadge = (badge: any) => (
    <View key={badge.id} style={[styles.badgeCard, { opacity: badge.earned ? 1 : 0.5 }]}>
      <View style={[styles.badgeIcon, { backgroundColor: badge.color }]}>
        <FontAwesome5 name={badge.icon} size={24} color="#fff" />
      </View>
      <View style={styles.badgeInfo}>
        <Text style={styles.badgeName}>{badge.name}</Text>
        <Text style={styles.badgeDescription}>{badge.description}</Text>
        {badge.earned && (
          <Text style={styles.badgeDate}>Kazanıldı: {badge.date}</Text>
        )}
      </View>
      {badge.earned && (
        <View style={styles.earnedIcon}>
          <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
        </View>
      )}
    </View>
  );

  const renderCertificate = (cert: any) => (
    <View key={cert.id} style={styles.certificateCard}>
      <View style={[styles.certificateIcon, { backgroundColor: cert.color }]}>
        <FontAwesome5 name={cert.icon} size={24} color="#fff" />
      </View>
      <View style={styles.certificateInfo}>
        <Text style={styles.certificateName}>{cert.name}</Text>
        <Text style={styles.certificateDescription}>{cert.description}</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${cert.progress}%`, backgroundColor: cert.color }]} />
          </View>
          <Text style={styles.progressText}>{cert.progress}% ({earnedBadges.length}/{cert.required} rozet)</Text>
        </View>
        {cert.progress >= 100 && (
          <View style={styles.earnedBadge}>
            <Text style={styles.earnedText}>Sertifika Kazanıldı! 🎉</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Başarılarım</Text>
      
      {/* Tab Butonları */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'badges' && styles.activeTab]} 
          onPress={() => setActiveTab('badges')}
        >
          <FontAwesome5 name="medal" size={16} color={activeTab === 'badges' ? '#7B1FA2' : '#666'} />
          <Text style={[styles.tabText, activeTab === 'badges' && styles.activeTabText]}>Rozetlerim</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'certificates' && styles.activeTab]} 
          onPress={() => setActiveTab('certificates')}
        >
          <FontAwesome5 name="certificate" size={16} color={activeTab === 'certificates' ? '#7B1FA2' : '#666'} />
          <Text style={[styles.tabText, activeTab === 'certificates' && styles.activeTabText]}>Sertifikalarım</Text>
        </TouchableOpacity>
      </View>

      {/* İstatistikler */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{earnedBadges.length}</Text>
          <Text style={styles.statLabel}>Kazanılan Rozet</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalBadges}</Text>
          <Text style={styles.statLabel}>Toplam Rozet</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{Math.round((earnedBadges.length / totalBadges) * 100)}%</Text>
          <Text style={styles.statLabel}>Tamamlanma</Text>
        </View>
      </View>

      {/* İçerik */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'badges' ? (
          <View>
            <Text style={styles.sectionTitle}>Rozetlerim ({earnedBadges.length}/{totalBadges})</Text>
            {badges.map(renderBadge)}
          </View>
        ) : (
          <View>
            <Text style={styles.sectionTitle}>Sertifikalarım</Text>
            <Text style={styles.sectionDescription}>
              Rozet topladıkça sertifikalara yaklaşırsın! Her sertifika için belirli sayıda rozet gerekir.
            </Text>
            {certificates.map(renderCertificate)}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#7B1FA2', textAlign: 'center', marginTop: 20, marginBottom: 20 },
  
  // Tab Stilleri
  tabContainer: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 20 },
  tabButton: { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 12, 
    backgroundColor: '#fff', 
    marginHorizontal: 5, 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeTab: { backgroundColor: '#E8F5E8', borderColor: '#7B1FA2', borderWidth: 2 },
  tabText: { marginLeft: 8, fontSize: 16, fontWeight: '600', color: '#666' },
  activeTabText: { color: '#7B1FA2' },

  // İstatistik Stilleri
  statsContainer: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 20 },
  statCard: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 15, 
    marginHorizontal: 5, 
    borderRadius: 12, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#7B1FA2' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 4 },

  // İçerik Stilleri
  content: { flex: 1, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  sectionDescription: { fontSize: 14, color: '#666', marginBottom: 20, lineHeight: 20 },

  // Rozet Stilleri
  badgeCard: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    padding: 15, 
    marginBottom: 12, 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badgeIcon: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginRight: 15,
  },
  badgeInfo: { flex: 1 },
  badgeName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  badgeDescription: { fontSize: 14, color: '#666', marginBottom: 4 },
  badgeDate: { fontSize: 12, color: '#4CAF50', fontStyle: 'italic' },
  earnedIcon: { justifyContent: 'center' },

  // Sertifika Stilleri
  certificateCard: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    padding: 15, 
    marginBottom: 12, 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  certificateIcon: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginRight: 15,
  },
  certificateInfo: { flex: 1 },
  certificateName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  certificateDescription: { fontSize: 14, color: '#666', marginBottom: 12 },
  progressContainer: { marginBottom: 8 },
  progressBar: { 
    height: 8, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 4, 
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 4 },
  progressText: { fontSize: 12, color: '#666' },
  earnedBadge: { 
    backgroundColor: '#E8F5E8', 
    padding: 8, 
    borderRadius: 8, 
    alignItems: 'center',
    marginTop: 8,
  },
  earnedText: { fontSize: 14, fontWeight: 'bold', color: '#4CAF50' },
}); 