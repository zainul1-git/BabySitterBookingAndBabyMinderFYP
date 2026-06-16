import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Appbar, Card, Text, Button, Avatar } from 'react-native-paper';
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const TABS = ['Active', 'Upcoming', 'History'];

const dummyData = {
  Active: [
    {
      id: '1',
      parent: 'Ali Khan',
      child: 'Ahmed',
      location: 'Bahria Town',
      time: '5:00 PM - 9:00 PM'
    }
  ],
  Upcoming: [
    {
      id: '2',
      parent: 'Sara Malik',
      child: 'Ayesha',
      date: '10 April',
      time: '6:00 PM - 10:00 PM'
    }
  ],
  History: [
    {
      id: '3',
      parent: 'Usman Ali',
      child: 'Zain',
      date: '2 April',
      earnings: '2000'
    }
  ]
};

 function MyJobsScreenBabySitter() {
  const [activeTab, setActiveTab] = useState('Active');
  const navigation = useNavigation();

  // const handleViewDetails = () => {
  //   if (activeTab === 'Active') {
  //     navigation.navigate('babysitterjobtimer'); // ✅ Active → Timer Screen
  //   } else {
  //     navigation.navigate('JobDetails'); // ✅ Others → Details Screen
  //   }
  // };


  // const handleViewDetails=()=>{
  //   if(activeTab==='Active')
  //   {
  //     navigation.navigate('babysitterjobtimer');
  //   }
  //   else if(activeTab==='Upcoming')
  //   {
  //     navigation.navigate('upcomingjobs')
  //   }
  //   else if(activeTab==='History')
  //   {
  //     navigation.navigate('jobhistory')

  //   }
  // }
  const handleViewDetails = () => {
    if (activeTab === 'Active') {
      navigation.navigate('babysitterjobtimer'); // ✅ Active → Timer Screen
    } else if (activeTab === 'Upcoming') {
      navigation.navigate('upcomingjobs'); // ✅ Upcoming → Upcoming Job Screen
    } else if (activeTab === 'History') {
      navigation.navigate('jobhistory'); // ✅ History → History Job Screen
    }
  };

  const renderCard = ({ item }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>{item.parent}</Text>
          <Text>Child: {item.child}</Text>

          {activeTab === 'Active' && (
            <>
              <Text>Location: {item.location}</Text>
              <Text>Time: {item.time}</Text>
              <Text style={styles.badgeActive}>Active</Text>
            </>
          )}

          {activeTab === 'Upcoming' && (
            <>
              <Text>Date: {item.date}</Text>
              <Text>Time: {item.time}</Text>
              <Text style={styles.badgeUpcoming}>Upcoming</Text>
            </>
          )}

          {activeTab === 'History' && (
            <>
              <Text>Date: {item.date}</Text>
              <Text>Earnings: PKR {item.earnings}</Text>
              <Text style={styles.badgeCompleted}>Completed</Text>
            </>
          )}

          <Button
            mode="contained"
            style={styles.button}
            onPress={handleViewDetails}
          >
            View Details
          </Button>
        </Card.Content>
      </Card>
    );
  };

  return (
    <LinearGradient
      colors={['#fbc2eb', '#a6c1ee']}
      style={styles.container}
    >
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="My Jobs" subtitle="Manage your jobs" />
        <Avatar.Icon size={40} icon="account" />
      </Appbar.Header>

      <View style={styles.tabsContainer}>
        {TABS.map((tab) => (
          <Button
            key={tab}
            mode={activeTab === tab ? 'contained' : 'outlined'}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </View>

      <FlatList
        data={dummyData[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* ✅ Bottom Navigation (Working) */}
      <View style={styles.bottomNav}>
        <Text onPress={() => navigation.navigate('BabySitterDashBoard')}>Home</Text>
        <Text style={styles.activeNav}>My Jobs</Text>
        <Text onPress={() => navigation.navigate('Messages')}>Messages</Text>
        <Text onPress={() => navigation.navigate('BabysitterProfileScreen')}>Profile</Text>
      </View>
    </LinearGradient>
  );
}
export default MyJobsScreenBabySitter;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  tab: {
    borderRadius: 20
  },
  activeTab: {
    backgroundColor: '#ff9a9e'
  },
  card: {
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 10,
    borderRadius: 10
  },
  badgeActive: {
    color: 'green',
    marginTop: 5
  },
  badgeUpcoming: {
    color: 'orange',
    marginTop: 5
  },
  badgeCompleted: {
    color: 'blue',
    marginTop: 5
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  activeNav: {
    color: '#ff6f91',
    fontWeight: 'bold'
  }
});
