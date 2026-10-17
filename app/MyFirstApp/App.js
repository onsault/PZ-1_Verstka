import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const SKILLS = ['UI/UX', 'Figma', 'JavaScript', 'React Native', 'Adobe Illustrator', 'Adobe After Effects', 'Roblox'];

export default function App() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={require('./assets/avatar.jpg')}
            resizeMode="cover"
          />

          <View style={styles.textContainer}>
            <Text style={styles.name}>Левадный Алексей</Text>
            <Text style={styles.title}>UI/UX-дизайнер и мобильный разработчик</Text>
            <Text style={styles.bio}>
              Проектирую интерфейсы и верстаю их в{' '}
              <Text style={styles.bioAccent}>React Native</Text>. Люблю минимализм,
              чистый код и{' '}
              <Text style={styles.bioAccent}>доту</Text>. Учусь в ИПТИП на
              кафедре компьютерного дизайна.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Навыки</Text>
          <View style={styles.skillsContainer}>
            {SKILLS.map((skill) => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>

          <TouchableOpacity
            style={[styles.button, subscribed && styles.buttonActive]}
            activeOpacity={0.7}
            onPress={() => setSubscribed(!subscribed)}
          >
            <Text style={[styles.buttonText, subscribed && styles.buttonTextActive]}>
              {subscribed ? 'Вы подписаны' : 'Подписаться'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  card: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#636363',
    marginBottom: 8,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
  },
  bioAccent: {
    color: '#007AFF',
    fontWeight: '600',
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  skill: {
    backgroundColor: '#e8f1ff',
    color: '#0057c2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 13,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonActive: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#007AFF',
  },
});