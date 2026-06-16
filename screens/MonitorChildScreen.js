import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Text,
  Card,
  IconButton,
} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const MonitorChildScreen = () => {
  const navigation = useNavigation();

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  return (
    <LinearGradient
      colors={['#FDE4EC', '#E3F2FD']}
      style={styles.container}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={26}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Little Care</Text>
        <IconButton icon="cog-outline" size={24} />
      </View>

      {/* LIVE STATUS */}
      <View style={styles.liveContainer}>
        <View style={styles.liveBadge}>
          <View style={styles.redDot} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>

        <Text style={styles.liveInfo}>Nursery - HD 1080p</Text>
      </View>

      {/* VIDEO SECTION */}
      <Card style={styles.videoCard}>
        <View style={styles.videoPlaceholder}>
          <Text style={styles.placeholderText}>Camera Feed</Text>

          {/* Overlay Info */}
          <View style={styles.overlayTop}>
            <Text style={styles.overlayText}>🌡 22°C</Text>
            <Text style={styles.overlayText}>🔊 45%</Text>
          </View>

          {/* Bottom Info */}
          <View style={styles.overlayBottom}>
            <Text style={styles.liveView}>Live View</Text>
            <Text style={styles.secureText}>Secure Connection</Text>
          </View>
        </View>
      </Card>

      {/* CONTROLS */}
      <View style={styles.controlsContainer}>
        <IconButton
          icon={cameraOn ? 'video' : 'video-off'}
          size={30}
          style={styles.controlBtn}
          onPress={() => setCameraOn(!cameraOn)}
        />

        <IconButton
          icon={micOn ? 'microphone' : 'microphone-off'}
          size={30}
          style={styles.controlBtn}
          onPress={() => setMicOn(!micOn)}
        />

        <IconButton
          icon="phone-hangup"
          size={30}
          style={styles.endCallBtn}
          iconColor="#fff"
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('parentmain')}>
          <IconButton icon="home" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <IconButton icon="video" iconColor="#E91E63" />
          <Text style={[styles.navText, { color: '#E91E63' }]}>
            Monitor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ParentProfileScreen')}>
          <IconButton icon="account-outline" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <IconButton icon="dots-horizontal" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default MonitorChildScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  liveContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  redDot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    marginRight: 6,
  },

  liveText: {
    color: 'red',
    fontWeight: 'bold',
  },

  liveInfo: {
    marginTop: 5,
    color: '#555',
  },

  videoCard: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
  },

  videoPlaceholder: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },

  placeholderText: {
    color: '#777',
  },

  overlayTop: {
    position: 'absolute',
    top: 10,
    left: 10,
  },

  overlayText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },

  overlayBottom: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },

  liveView: {
    color: '#fff',
    fontWeight: 'bold',
  },

  secureText: {
    color: '#eee',
    fontSize: 12,
  },

  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  controlBtn: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
  },

  endCallBtn: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 50,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },

  navText: {
    fontSize: 10,
    textAlign: 'center',
  },
});