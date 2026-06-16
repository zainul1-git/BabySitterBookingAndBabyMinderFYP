import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BabysitterHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Babysitter!</Text>
    </View>
  );
};
export default BabysitterHomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});