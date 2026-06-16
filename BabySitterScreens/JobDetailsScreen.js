import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import {
  Text,
  Card,
  Button,
  IconButton,
  BottomNavigation,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const JobDetailsScreen = () => {
  const navigation = useNavigation();

  // Static Data (for now)
  const job = {
    parentName: 'Sarah Khan',
    childName: 'Ali',
    age: '4 years',
    date: '12 April 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Bahria Town, Islamabad',
    instructions: 'Give lunch at 1 PM. No mobile usage. Make him sleep at 2 PM.',
  };

  return (
    <LinearGradient
      colors={['#FDEBEB', '#F8D7DA']}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Job Details</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Details Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.label}>Parent Name</Text>
            <Text style={styles.value}>{job.parentName}</Text>

            <Text style={styles.label}>Child Name</Text>
            <Text style={styles.value}>{job.childName}</Text>

            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{job.age}</Text>

            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{job.date}</Text>

            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>{job.time}</Text>

            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{job.location}</Text>

            <Text style={styles.label}>Special Instructions</Text>
            <Text style={styles.value}>{job.instructions}</Text>
          </Card.Content>
        </Card>

        {/* Child Info Card */}
        <Card style={styles.childCard}>
          <Card.Content style={styles.childContent}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }}
              style={styles.childImage}
            />
            <View>
              <Text style={styles.childName}>{job.childName}</Text>
              <Text style={styles.childAge}>{job.age}</Text>
            </View>
          </Card.Content>
        </Card>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.confirmBtn}
            labelStyle={{ color: '#fff' }}
            onPress={() => navigation.navigate('babysitterjobtimer')}
          >
            Confirm
          </Button>

          <Button
            mode="contained"
            style={styles.rejectBtn}
            labelStyle={{ color: '#fff' }}
            onPress={() => navigation.navigate('JobRequestsScreen')}
          >
            Reject
          </Button>
        </View>

      </ScrollView>

      {/* Bottom Navigation Placeholder */}
      {/* <View style={styles.bottomNav}>
        <Text style={{ textAlign: 'center', color: '#999' }}>
          Bottom Navigation
        </Text>
      </View> */}
      

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

export default JobDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  scroll: {
    padding: 15,
  },

  card: {
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  label: {
    color: '#888',
    marginTop: 8,
    fontSize: 13,
  },

  value: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },

  childCard: {
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },

  childContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  childImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },

  childName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  childAge: {
    color: '#777',
  },

  buttonContainer: {
    gap: 10,
  },

  confirmBtn: {
    backgroundColor: '#FF8C42', // orange highlight
    borderRadius: 10,
    paddingVertical: 5,
  },

  rejectBtn: {
    backgroundColor: '#E57373', // soft red
    borderRadius: 10,
    paddingVertical: 5,
  },

  bottomNav: {
    height: 60,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
});