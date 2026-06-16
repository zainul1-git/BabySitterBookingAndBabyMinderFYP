import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Button, Appbar, BottomNavigation } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const JobRequestsScreen = () => {
  const navigation = useNavigation();

  // Dummy Data
  const jobRequests = [
    {
      id: '1',
      parentName: 'Sara Khan',
      location: 'Islamabad',
      age: 4,
      description: 'Looking for a caring babysitter for evening time.',
    },
    {
      id: '2',
      parentName: 'Ali Ahmed',
      location: 'Rawalpindi',
      age: 2,
      description: 'Need experienced babysitter for toddler.',
    },
    {
      id: '3',
      parentName: 'Fatima Noor',
      location: 'Bahria Town',
      age: 5,
      description: 'Part-time babysitter required for weekdays.',
    },
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.name}>{item.parentName}</Text>
        <Text style={styles.text}>📍 {item.location}</Text>
        <Text style={styles.text}>👶 {item.age} years</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.buttonRow}>
          <Button
            mode="outlined"
            style={styles.button}
            onPress={() => navigation.navigate('BabysitterViewChildScreen')}
          >
            View Child Profile
          </Button>

          <Button
            mode="contained"
            style={styles.applyButton}
            onPress={() => navigation.navigate('JobDetailsScreen')}
          >
            Apply Now
          </Button>
          
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <LinearGradient
      colors={['#ffe4ec', '#fff']}
      style={styles.container}
    >
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Job Requests" />
      </Appbar.Header>

      {/* List */}
      <FlatList
        data={jobRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      {/* Bottom Navigation */}
      <BottomNavigation
        navigationState={{
          index: 1,
          routes: [
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'jobs', title: 'Jobs', icon: 'briefcase' },
            { key: 'profile', title: 'Profile', icon: 'account' },
          ],
        }}
        onIndexChange={(index) => {
          if (index === 0) navigation.navigate('BabysitterDashboard');
          if (index === 1) return;
          if (index === 2) navigation.navigate('BabysitterProfileScreen');
        }}
        renderScene={() => null}
      />
    </LinearGradient>
  );
};

export default JobRequestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  list: {
    padding: 15,
  },
  card: {
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
  description: {
    marginTop: 8,
    marginBottom: 10,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginRight: 5,
    borderColor: '#ff8fab',
  },
  applyButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#ff8fab',
  },
});