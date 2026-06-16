// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Text, Button, Card, Avatar, TextInput } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';



// const RatingScreen = () => {
//   const [rating, setRating] = useState(0);

//   return (
//     <LinearGradient colors={["#FDE4EC", "#FCE4EC"]} style={styles.container}>
//       <View style={styles.center}>

//         <Card style={styles.ratingCard}>
//           <Card.Content style={{ alignItems: 'center' }}>

//             <Text style={styles.complete}>✔ Job Completed</Text>

//             <Text style={styles.duration}>4h 15m</Text>

//             <Text style={styles.label}>Babysitter: Zainab Abbas</Text>
//             <Text style={styles.label}>Child: Hamza (4 Years)</Text>

//             <Text style={styles.rateText}>Rate Your Experience</Text>

//             <View style={styles.stars}>
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Text
//                   key={star}
//                   style={[
//                     styles.star,
//                     { color: star <= rating ? '#FFA726' : '#ccc' },
//                   ]}
//                   onPress={() => setRating(star)}
//                 >
//                   ★
//                 </Text>
//               ))}
//             </View>

//             <TextInput
//               placeholder="Write your feedback..."
//               mode="outlined"
//               style={styles.input}
//               multiline
//             />

//             <Button mode="contained" style={styles.submitBtn}>
//               Submit Review
//             </Button>

//           </Card.Content>
//         </Card>

//       </View>
//     </LinearGradient>
//   );
  
// };
// export default RatingScreen;
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




import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const RatingScreen = () => {
  const [rating, setRating] = useState(0);
   const navigation = useNavigation();

  return (
    <LinearGradient colors={["#FDE4EC", "#FCE4EC"]} style={styles.container}>
      <View style={styles.center}>

        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>

            <Text style={styles.title}>Job Completed</Text>
            <Text style={styles.duration}>4h 15m</Text>

            <Text style={styles.label}>Babysitter: Zainab Abbas</Text>
            <Text style={styles.label}>Child: Hamza (4 Years)</Text>

            <Text style={styles.rate}>Rate Your Experience</Text>

            <View style={styles.stars}>
              {[1,2,3,4,5].map(star => (
                <Text
                  key={star}
                  style={[
                    styles.star,
                    { color: star <= rating ? '#FFA726' : '#ccc' }
                  ]}
                  onPress={() => setRating(star)}
                >
                  ★
                </Text>
              ))}
            </View>

            <TextInput
              placeholder="Write your feedback..."
              mode="outlined"
              style={styles.input}
              multiline
            />

            {/* <Button mode="contained" style={styles.submitBtn}>
              Submit Review
            </Button> */}
                 <Button
              mode="contained"
              style={styles.submitBtn}
              onPress={() => navigation.navigate('parentmain')}
            >
              Submit Review
            </Button>

          </Card.Content>
        </Card>

      </View>
    </LinearGradient>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  label: {
    fontSize: 13,
    color: '#555',
  },
  rate: {
    marginTop: 10,
    fontWeight: '600',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  star: {
    fontSize: 28,
    marginHorizontal: 5,
  },
  input: {
    width: '100%',
    marginVertical: 10,
  },
  submitBtn: {
    backgroundColor: '#FF7043',
    borderRadius: 25,
    width: '100%',
  },
});