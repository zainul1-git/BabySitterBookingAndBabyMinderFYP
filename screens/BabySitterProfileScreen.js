// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import {
//   Text,
//   Card,
//   Avatar,
//   Button,
//   IconButton
// } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const BabySitterProfileScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <LinearGradient
//       colors={['#FDE4EC', '#FCE8E6']}
//       style={styles.container}
//     >
//       {/* Header */}
//       <View style={styles.header}>
//         <IconButton
//           icon="arrow-left"
//           size={24}
//           onPress={() => navigation.goBack()}
//         />
//         <Text style={styles.headerTitle}>Babysitter Profile</Text>
//         <Avatar.Image
//           size={36}
//           source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
//         />
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Profile Section */}
//         <View style={styles.profileSection}>
//           <Avatar.Image
//             size={90}
//             source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
//           />
//           <Text style={styles.name}>Ayesha Khan</Text>
//           <Text style={styles.location}>Islamabad, Pakistan</Text>
//           <Text style={styles.rating}>⭐ 4.9 (120 reviews)</Text>
//         </View>

//         {/* Details Card */}
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.detail}>Age: 25 | Female</Text>
//             <Text style={styles.detail}>CNIC: *****-*******-*</Text>
//             <Text style={styles.detail}>Phone: +92 300 1234567</Text>
//             <Text style={styles.detail}>Email: ayesha@gmail.com</Text>
//             <Text style={styles.detail}>Preferred Child Age: 1-5 years</Text>

//             <Text style={styles.price}>Rs. 800/hr</Text>
//           </Card.Content>
//         </Card>

//         {/* Experience & Bio */}
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.sectionTitle}>Experience & Bio</Text>
//             <Text style={styles.bio}>
//               I am an experienced babysitter with over 4 years of experience
//               taking care of children. I ensure safety, fun activities, and a
//               caring environment for kids.
//             </Text>
//           </Card.Content>
//         </Card>

//         {/* Additional Info */}
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.sectionTitle}>Additional Info</Text>

//             <Text style={styles.detail}>Languages: English, Urdu</Text>
//             <Text style={styles.detail}>Notice Period: 1 Day</Text>
//             <Text style={styles.detail}>Preferred Locations: Islamabad</Text>
//             <Text style={styles.detail}>
//               Address: G-11, Islamabad
//             </Text>
//           </Card.Content>
//         </Card>

//         {/* Buttons */}
//         <View style={styles.buttonContainer}>
//           <Button
//             mode="outlined"
//             style={styles.cancelBtn}
//             onPress={() => navigation.goBack()}
//           >
//             Cancel
//           </Button>

//           <Button
//             mode="contained"
//             style={styles.hireBtn}
//             onPress={() => navigation.navigate('MyJobsScreen')}
//           >
//             Confirm Hire
//           </Button>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <IconButton
//           icon="home"
//           onPress={() => navigation.navigate('ParentMainScreen')}
//         />
//         <IconButton
//           icon="magnify"
//           onPress={() => navigation.navigate('SearchBabysitterScreen')}
//         />
//         <IconButton
//           icon="account"
//           color="#E91E63"
//           onPress={() => navigation.navigate('ParentProfileScreen')}
//         />
//         <IconButton icon="dots-horizontal" />
//       </View>
//     </LinearGradient>
//   );
// };

// export default BabySitterProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 40,
//     paddingHorizontal: 10,
//   },

//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   profileSection: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },

//   location: {
//     color: 'gray',
//     marginTop: 4,
//   },

//   rating: {
//     marginTop: 4,
//     fontWeight: '600',
//   },

//   card: {
//     marginHorizontal: 15,
//     marginVertical: 8,
//     borderRadius: 15,
//     elevation: 3,
//   },

//   detail: {
//     marginVertical: 3,
//     fontSize: 14,
//   },

//   price: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FF7043',
//   },

//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },

//   bio: {
//     fontSize: 14,
//     color: '#555',
//   },

//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 15,
//   },

//   cancelBtn: {
//     flex: 1,
//     marginRight: 10,
//     borderRadius: 10,
//   },

//   hireBtn: {
//     flex: 1,
//     backgroundColor: '#E91E63',
//     borderRadius: 10,
//   },

//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#fff',
//     paddingVertical: 5,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 10,
//   },
// });






import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {
  Text,
  Card,
  Avatar,
  Button,
  IconButton
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const BabySitterProfileScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  // 👇 GET DATA FROM SEARCH SCREEN
  const sitter = route.params?.sitter;

  // 👇 SAFETY CHECK (avoid crash)
  if (!sitter) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>No babysitter data found</Text>
      </View>
    );
  }

  // 👇 HIRE FUNCTION
  const handleHire = () => {
    Alert.alert(
      "Confirm Hire",
      `Do you want to hire ${sitter.full_name}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            Alert.alert("Success", "Hire request sent!");

            // 👉 send data to babysitter job screen
            navigation.navigate('JobRequestsScreen', {
              newJob: {
                parentName: "Parent User", // later dynamic kar lena
                location: sitter.city,
                age: "N/A",
                description: `Job request for ${sitter.full_name}`,
              }
            });
          }
        }
      ]
    );
  };

  return (
    <LinearGradient
      colors={['#FDE4EC', '#FCE8E6']}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Babysitter Profile</Text>
        <Avatar.Icon size={36} icon="account" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Avatar.Icon size={90} icon="account" />

          <Text style={styles.name}>
            {sitter.full_name}
          </Text>

          <Text style={styles.location}>
            {sitter.city || 'Location not provided'}
          </Text>

          <Text style={styles.rating}>
            ⭐ {sitter.rating || 'N/A'}
          </Text>
        </View>

        {/* Details Card */}
        <Card style={styles.card}>
          <Card.Content>

            <Text style={styles.detail}>
              Experience: {sitter.experience || 'N/A'}
            </Text>

            <Text style={styles.detail}>
              Phone: {sitter.phone || 'N/A'}
            </Text>

            <Text style={styles.detail}>
              Email: {sitter.email || 'N/A'}
            </Text>

            <Text style={styles.price}>
              Rs. {sitter.charges}/hr
            </Text>

          </Card.Content>
        </Card>

        {/* Bio */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Bio</Text>

            <Text style={styles.bio}>
              {sitter.bio || 'No bio available'}
            </Text>

          </Card.Content>
        </Card>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            Cancel
          </Button>

          <Button
            mode="contained"
            style={styles.hireBtn}
            onPress={handleHire}
          >
            Confirm Hire
          </Button>
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

export default BabySitterProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
  },

  headerTitle: {
    fontSize: 18,
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
    color: 'gray',
    marginTop: 4,
  },

  rating: {
    marginTop: 4,
    fontWeight: '600',
  },

  card: {
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 15,
    elevation: 3,
  },

  detail: {
    marginVertical: 3,
    fontSize: 14,
  },

  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7043',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  bio: {
    fontSize: 14,
    color: '#555',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },

  cancelBtn: {
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
  },

  hireBtn: {
    flex: 1,
    backgroundColor: '#E91E63',
    borderRadius: 10,
  },
});