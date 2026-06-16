// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Text, Button, Card, Avatar, TextInput } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

//  const JobTimerScreen = () => {
//   const navigation = useNavigation();
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = () => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     return `${hrs.toString().padStart(2, '0')}:${mins
//       .toString()
//       .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <LinearGradient colors={["#FDE4EC", "#FCE4EC"]} style={styles.container}>
//       <View style={styles.center}>

//         <Avatar.Icon icon="account" size={70} style={styles.avatar} />

//         <Text style={styles.name}>Zainab Abbas</Text>

//         <Text style={styles.live}>LIVE DURATION</Text>

//         <View style={styles.timerCircle}>
//           <Text style={styles.timerText}>{formatTime()}</Text>
//           <Text style={styles.startText}>Started just now</Text>
//         </View>

//         <Card style={styles.infoCard}>
//           <Card.Content>
//             <Text>📍 Location: G11/4 Islamabad</Text>
//             <Text>💰 Rate: PKR 350/hr</Text>
//           </Card.Content>
//         </Card>

//         <Button
//           mode="contained"
//           style={styles.endBtn}
//           onPress={() => navigation.navigate('RatingScreen')}
//         >
//           End Job
//         </Button>

//       </View>
//     </LinearGradient>
//   );
// };
// export default JobTimerScreen;
// const styles = StyleSheet.create({
//   },
//   startText: {
//     fontSize: 12,
//     color: '#777',
//   },
//   infoCard: {
//     width: '100%',
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   endBtn: {
//     backgroundColor: '#FF7043',
//     borderRadius: 25,
//     width: '100%',
//   },

//   ratingCard: {
//     width: '100%',
//     borderRadius: 20,
//     padding: 10,
//   },
//   complete: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   duration: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 13,
//     color: '#555',
//     marginBottom: 4,
//   },
//   rateText: {
//     marginTop: 10,
//     fontWeight: '600',
//   },
//   stars: {
//     flexDirection: 'row',
//     marginVertical: 10,
//   },
//   star: {
//     fontSize: 28,
//     marginHorizontal: 5,
//   },
//   input: {
//     width: '100%',
//     marginVertical: 10,
//   },
//   submitBtn: {
//     backgroundColor: '#FF7043',
//     borderRadius: 25,
//     width: '100%',
//   },
// });
 

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const JobTimerScreen = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <LinearGradient colors={["#FDE4EC", "#FCE4EC"]} style={styles.container}>
      <View style={styles.center}>

        <Avatar.Icon icon="account" size={70} style={styles.avatar} />

        <Text style={styles.name}>Zainab Abbas</Text>

        <Text style={styles.live}>LIVE DURATION</Text>

        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>{formatTime()}</Text>
          <Text style={styles.startText}>Started just now</Text>
        </View>

        <Card style={styles.infoCard}>
          <Card.Content>
            <Text>📍 Location: G11/4 Islamabad</Text>
            <Text>💰 Rate: PKR 350/hr</Text>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          style={styles.endBtn}
          onPress={() => navigation.navigate('RatingScreen')}
        >
          End Job
        </Button>

        

      </View>
    </LinearGradient>
  );
};

export default JobTimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatar: {
    backgroundColor: '#F8BBD0',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  live: {
    color: '#E91E63',
    marginVertical: 10,
  },
  timerCircle: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  startText: {
    fontSize: 12,
    color: '#777',
  },
  infoCard: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
  },
  endBtn: {
    backgroundColor: '#FF7043',
    borderRadius: 25,
    width: '100%',
  },
});