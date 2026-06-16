// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChooseRole');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/120' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Baby Sitter Booking & Baby Minder</Text>
      <Text style={styles.tagline}>Safe Care for Your Little Ones</Text>
      <ActivityIndicator size="large" color="#6C9BCF" style={styles.loader} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  tagline: { fontSize: 14, color: '#666', marginTop: 8, marginBottom: 30, textAlign: 'center' },
  loader: { marginTop: 10 },
});