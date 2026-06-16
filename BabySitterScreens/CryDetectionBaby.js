import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  PermissionsAndroid,
  Alert,
} from 'react-native';

//import AudioService from '../services/AudioService';
import AudioService from '../services/AudioService'


const CryDetectionBaby = () => {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState("Press Start");

  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const startListening = async () => {
    const ok = await requestPermission();

    if (!ok) {
      Alert.alert("Permission required");
      return;
    }

    setIsListening(true);
    setStatus("Listening...");

    AudioService.start((isCry) => {
      if (isCry) {
        setStatus("🔴 Baby Cry Detected!");
        Alert.alert("🚨 Alert", "Baby is crying!");
      } else {
        setStatus("🟢 Monitoring...");
      }
    });
  };

  const stopListening = () => {
    AudioService.stop();
    setIsListening(false);
    setStatus("Stopped");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👶 Cry Detection</Text>

      <Text style={styles.status}>{status}</Text>

      <Button
        title={isListening ? "Stop" : "Start"}
        onPress={isListening ? stopListening : startListening}
      />
    </View>
  );
};

export default CryDetectionBaby;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
  },
});
















// import React, { useState } from 'react';
// import { View, Text, Button, Alert } from 'react-native';
// import { startCryDetection, stopCryDetection } from '../services/CryDetectionService';

// const CryDetectionScreen = () => {
//   const [isListening, setIsListening] = useState(false);

//   const handleStart = () => {
//     setIsListening(true);

//     startCryDetection(() => {
//       Alert.alert("👶 Baby Cry Detected", "Please check the baby!");
//     });
//   };

//   const handleStop = () => {
//     setIsListening(false);
//     stopCryDetection();
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 18 }}>
//         {isListening ? "Monitoring..." : "Stopped"}
//       </Text>

//       <Button
//         title={isListening ? "Stop" : "Start Monitoring"}
//         onPress={isListening ? handleStop : handleStart}
//       />
//     </View>
//   );
// };

// export default CryDetectionScreen;