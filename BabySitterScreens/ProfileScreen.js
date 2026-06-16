import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Avatar, Button } from 'react-native-paper';
import { LinearGradient } from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen= ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#fde1e8', '#fce4ec', '#f8bbd0']}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={24}
          color="#333"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Top Profile Section */}
        <View style={styles.profileSection}>
          <Avatar.Image
            size={100}
            source={{ uri: 'https://via.placeholder.com/150' }}
          />
          <Text style={styles.name}>Ayesha Khan</Text>
          <Text style={styles.location}>Rawalpindi, Pakistan</Text>
        </View>

        {/* Personal Details */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Personal Details</Text>

            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.value}>Ayesha Khan</Text>

            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>24</Text>

            <Text style={styles.label}>City</Text>
            <Text style={styles.value}>Rawalpindi</Text>

            <Text style={styles.label}>CNIC</Text>
            <Text style={styles.value}>35202-1234567-8</Text>

            <Text style={styles.label}>Contact Number</Text>
            <Text style={styles.value}>0300-1234567</Text>
          </Card.Content>
        </Card>

        {/* Professional */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Professional</Text>

            <Text style={styles.label}>Experience</Text>
            <Text style={styles.value}>3 Years</Text>

            <Text style={styles.label}>Specialization</Text>
            <Text style={styles.value}>Toddlers</Text>
          </Card.Content>
        </Card>

        {/* Preferences */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Preferences</Text>

            <Text style={styles.label}>Availability</Text>
            <Text style={styles.value}>Full-Time</Text>

            <Text style={styles.label}>Hourly Rate</Text>
            <Text style={styles.value}>PKR 500/hr</Text>
          </Card.Content>
        </Card>

        {/* Rating */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Rating</Text>

            <View style={styles.ratingRow}>
              <View style={styles.stars}>
                {[1,2,3,4,5].map((i) => (
                  <Icon key={i} name="star" size={20} color="#FFD700" />
                ))}
              </View>
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </Card.Content>
        </Card>

        {/* Update Button */}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{ color: '#fff' }}
          onPress={() => navigation.navigate('editbabysitterprofile')}
        >
          Update Profile
        </Button>

        {/* Bottom Spacing */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={26} color="#777" />
        <Icon name="briefcase-outline" size={26} color="#777" />
        <Icon name="account" size={26} color="#ff6f61" />
        <Icon name="dots-horizontal" size={26} color="#777" />
      </View>

    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  location: {
    fontSize: 14,
    color: '#777',
  },

  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  label: {
    fontSize: 13,
    color: '#999',
    marginTop: 6,
  },

  value: {
    fontSize: 15,
    fontWeight: '500',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  stars: {
    flexDirection: 'row',
  },

  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#ff6f61',
    borderRadius: 25,
    paddingVertical: 6,
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