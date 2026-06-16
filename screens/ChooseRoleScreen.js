// ChooseRoleScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // for icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChooseRoleScreen = () => {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { label: 'Parent', icon: 'account', value: 'parent' },
    { label: 'Babysitter', icon: 'baby-face-outline', value: 'babysitter' },
  ];

  const handleContinue = () => {
    if (selectedRole) {
     navigation.navigate('Login', { role: selectedRole });
    } else {
      alert('Please select a role to continue.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <View style={styles.cardsContainer}>
        {roles.map((role) => (
          <Card
            key={role.value}
            style={[
              styles.card,
              selectedRole === role.value && styles.cardSelected,
            ]}
            onPress={() => setSelectedRole(role.value)}
          >
            <MaterialCommunityIcons
              name={role.icon}
              size={48}
              color={selectedRole === role.value ? '#ffffff' : '#555555'}
              style={styles.icon}
            />
            <Text
              style={[
                styles.cardText,
                selectedRole === role.value && styles.cardTextSelected,
              ]}
            >
              {role.label}
            </Text>
          </Card>
        ))}
      </View>
      <Button
        mode="contained"
        onPress={handleContinue}
        style={styles.continueButton}
        contentStyle={styles.continueButtonContent}
      >
        Continue
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FDF6F0', // soft pastel background
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333333',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#FFF4F0',
    elevation: 3,
  },
  cardSelected: {
    backgroundColor: '#FFBFA3',
  },
  icon: {
    marginBottom: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555555',
  },
  cardTextSelected: {
    color: '#ffffff',
    fontWeight: '600',
  },
  continueButton: {
    borderRadius: 20,
    width: '60%',
  },
  continueButtonContent: {
    paddingVertical: 8,
  },
});

export default ChooseRoleScreen;