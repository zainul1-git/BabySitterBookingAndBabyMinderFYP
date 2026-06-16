import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const dashboardItems = [
  {
    id: '1',
    title: 'Job Requests',
    icon: 'briefcase-outline',
    screen: 'JobRequestsScreen',
  },
  {
    id: '2',
    title: 'Active Jobs',
    icon: 'timer-outline',
    screen: 'MyJobsScreenBabySitter', // or MyJobs
  },
  {
    id: '3',
    title: 'Set Availability',
    icon: 'calendar-outline',
    screen: 'setavailabilityscreen',
  },
  {
    id: '4',
    title: 'My Profile',
    icon: 'account-outline',
    screen: 'BabysitterProfileScreen',
  },
  {
  id: '5',
  title: 'Monitor Baby 👶',
  icon: 'microphone-outline',
  screen: 'CryDetectionScreen',
}
];

const BabysitterDashboardScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Icon
            icon={item.icon}
            size={50}
            style={styles.icon}
          />
          <Text style={styles.cardText}>{item.title}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#fde1ec', '#fce4ec', '#fff']}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Babysitter Dashboard</Text>
        <Avatar.Image
          size={40}
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
        />
      </View>

      {/* Grid */}
      <FlatList
        data={dashboardItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.activeTab}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('JobRequestsScreen')}
        >
          <Text style={styles.tab}>Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('BabysitterProfileScreen')}
        >
          <Text style={styles.tab}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.tab}>More</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default BabysitterDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  grid: {
    paddingBottom: 80,
  },

  cardContainer: {
    flex: 1,
    margin: 8,
  },

  card: {
    borderRadius: 20,
    elevation: 4,
    backgroundColor: '#fff',
  },

  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },

  icon: {
    backgroundColor: '#f8bbd0',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },

  tab: {
    color: '#888',
    fontSize: 13,
  },

  activeTab: {
    color: '#e91e63',
    fontWeight: 'bold',
    fontSize: 13,
  },
});