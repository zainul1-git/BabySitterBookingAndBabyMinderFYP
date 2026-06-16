import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Card, IconButton, BottomNavigation, Icon } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const BabysitterViewChildProfileScreen = () => {
  const navigation = useNavigation();

  // Static Data
  const childData = {
    name: 'Ali Ahmed',
    age: '4 years',
    gender: 'Male',
    parentName: 'Mrs. Ahmed',
    contact: '+92 300 1234567',
    notes: 'Allergic to peanuts. Sleeps at 2 PM daily. يحب cartoons and prefers milk before sleep.'
  };

  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'jobs', title: 'Jobs', icon: 'briefcase' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: () => {
      navigation.navigate('BabySitterDashBoard');
      return null;
    },
    jobs: () => {
      navigation.navigate('JobRequestsScreen');
      return null;
    },
    profile: () => {
      navigation.navigate('babysitterprofilescreen');
      return null;
    },
  });

  return (
    <LinearGradient colors={['#fde2e4', '#fad2e1']} style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Child Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Top Section */}
        <View style={styles.topSection}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png' }}
            style={styles.childImage}
          />
          <Text style={styles.childName}>{childData.name}</Text>
          <Text style={styles.childAge}>{childData.age}</Text>
        </View>

        {/* Parent Info */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Parent Info</Text>
            <Text style={styles.label}>Parent Name:</Text>
            <Text style={styles.value}>{childData.parentName}</Text>

            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{childData.contact}</Text>
          </Card.Content>
        </Card>

        {/* Child Info */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Child Info</Text>

            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{childData.age}</Text>

            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{childData.gender}</Text>
          </Card.Content>
        </Card>

        {/* Special Notes */}
        <Card style={styles.notesCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Special Notes</Text>
            <Text style={styles.notesText}>{childData.notes}</Text>
          </Card.Content>
        </Card>

      </ScrollView>

      {/* Bottom Navigation */}
      {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#fff0f3' }}
        activeColor="#ff8fab"
        inactiveColor="#999"
      /> */}


      {/* Bottom Navigation */}
<View style={styles.bottomNav}>
  <TouchableOpacity onPress={() => navigation.navigate('BabySitterDashBoard')}>
    <Icon name="home-outline" size={26} color="#777" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('JobRequestsScreen')}>
    <Icon name="briefcase-outline" size={26} color="#777" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('BabysitterProfileScreen')}>
    <Icon name="account" size={26} color="#ff6f61" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => console.log('More pressed')}>
    <Icon name="dots-horizontal" size={26} color="#777" />
  </TouchableOpacity>
</View>

    </LinearGradient>
  );
};

export default BabysitterViewChildProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  topSection: {
    alignItems: 'center',
    marginVertical: 20,
  },

  childImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  childName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
  },

  childAge: {
    fontSize: 16,
    color: '#777',
  },

  card: {
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 3,
  },

  notesCard: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#ffe5ec',
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff8fab',
  },

  label: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },

  value: {
    fontSize: 15,
    color: '#333',
  },

  notesText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  bottomNav: {
     position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
},
});