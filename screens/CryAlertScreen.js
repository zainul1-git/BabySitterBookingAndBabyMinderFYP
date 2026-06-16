import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Text,
  Card,
  Button,
  IconButton,
} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const CryAlertScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#FDE4EC', '#F8BBD0']}
      style={styles.container}
    >

      {/* HEADER */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Little Care</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>

            {/* ALERT ICON */}
            <IconButton
              icon="alert"
              size={40}
              iconColor="#FF7043"
            />

            {/* TEXT */}
            <Text style={styles.alertTitle}>
              Baby is crying loudly
            </Text>

            <Text style={styles.alertSubtext}>
              Urgent noise detected in the nursery
            </Text>

            {/* CAMERA PREVIEW */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: 'https://via.placeholder.com/300x150' }}
                style={styles.image}
              />

              {/* LIVE BADGE */}
              <View style={styles.liveBadge}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
            </View>

          </Card.Content>
        </Card>

        {/* BUTTON */}
        <Button
          mode="contained"
          icon="camera"
          style={styles.button}
          contentStyle={{ paddingVertical: 6 }}
          onPress={() => navigation.navigate('MonitorChildScreen')}
        >
          View Camera
        </Button>
      

      </View>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('parentmain')}
        >
          <IconButton icon="home-outline" size={22} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <IconButton icon="bell" size={22} iconColor="#E91E63" />
          <Text style={[styles.navText, { color: '#E91E63' }]}>
            Cry Detection
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ParentProfileScreen')}
        >
          <IconButton icon="account-outline" size={22} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <IconButton icon="dots-horizontal" size={22} />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>
  );
};

export default CryAlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  card: {
    width: '100%',
    borderRadius: 20,
    elevation: 4,
    backgroundColor: '#fff',
  },

  cardContent: {
    alignItems: 'center',
  },

  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },

  alertSubtext: {
    fontSize: 13,
    color: '#777',
    marginBottom: 15,
    textAlign: 'center',
  },

  imageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000080',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
    marginRight: 4,
  },

  liveText: {
    color: '#fff',
    fontSize: 10,
  },

  button: {
    marginTop: 20,
    width: '80%',
    borderRadius: 25,
    backgroundColor: '#E91E63',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },

  navItem: {
    alignItems: 'center',
  },

  navText: {
    fontSize: 10,
    color: '#555',
  },
});