// import React from 'react';
// import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Card, Text, Avatar, IconButton, BottomNavigation } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const ViewChildProfileScreen = () => {
//   const navigation = useNavigation();

//   const [index, setIndex] = React.useState(1); // View Child tab selected
//   const [routes] = React.useState([
//     { key: 'home', title: 'Home', icon: 'home' },
//     { key: 'viewChild', title: 'View Child', icon: 'baby' },
//     { key: 'profile', title: 'Profile', icon: 'account' },
//     { key: 'more', title: 'More', icon: 'dots-horizontal' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: () => navigation.navigate('ParentMainScreen'),
//     viewChild: () => null, // current screen
//     profile: () => navigation.navigate('ParentProfileScreen'),
//     more: () => null, // optional
//   });

//   return (
//     <LinearGradient
//       colors={['#ffe6f0', '#fff0f5']}
//       style={styles.container}
//     >
//       {/* Header */}
//       <View style={styles.header}>
//         <IconButton
//           icon="arrow-left"
//           size={28}
//           onPress={() => navigation.goBack()}
//         />
//         <Text style={styles.headerTitle}>Little Care</Text>
//         <View style={{ width: 40 }} /> {/* placeholder for spacing */}
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Top Section */}
//         <Avatar.Image
//           size={120}
//           source={{ uri: 'https://via.placeholder.com/150' }}
//           style={styles.avatar}
//         />
//         <Text style={styles.childName}>Ayesha Khan</Text>
//         <Text style={styles.childAge}>4 Years Old</Text>

//         {/* Details Card */}
//         <Card style={styles.card}>
//           <IconButton
//             icon="pencil"
//             size={20}
//             style={styles.editIcon}
//             onPress={() => navigation.navigate('EditChildProfileScreen')}
//           />

//           {/* Parent Info */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Parent Info</Text>
//             <Text style={styles.sectionText}>Parent Name: Sara Khan</Text>
//             <Text style={styles.sectionText}>Date of Birth: 1985-07-20</Text>
//           </View>

//           {/* Child Info */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Child Info</Text>
//             <Text style={styles.sectionText}>Age: 4</Text>
//             <Text style={styles.sectionText}>Gender: Female</Text>
//           </View>

//           {/* Guardian Contact */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Guardian Contact</Text>
//             <Text style={styles.sectionText}>Phone: +92 300 1234567</Text>
//           </View>

//           {/* Special Notes */}
//           <View style={[styles.section, styles.notesSection]}>
//             <Text style={styles.sectionTitle}>Special Notes</Text>
//             <Text style={styles.sectionText}>
//               Allergies: Peanuts, Loves drawing and painting.
//             </Text>
//           </View>
//         </Card>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <BottomNavigation
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//         activeColor="#ff66b2"
//         inactiveColor="#999"
//         barStyle={{ backgroundColor: '#fff0f5' }}
//       />
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContainer: {
//     alignItems: 'center',
//     padding: 20,
//     paddingBottom: 80, // leave space for bottom nav
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   avatar: {
//     marginVertical: 15,
//   },
//   childName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   childAge: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//   },
//   card: {
//     width: '100%',
//     padding: 15,
//     borderRadius: 15,
//     elevation: 3,
//     backgroundColor: '#fff',
//     position: 'relative',
//   },
//   editIcon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   section: {
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#ff66b2',
//   },
//   sectionText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   notesSection: {
//     backgroundColor: '#ffe6cc',
//     padding: 10,
//     borderRadius: 10,
//   },
// });

// export default ViewChildProfileScreen;


















// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Card, Text, Avatar, IconButton, BottomNavigation } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const ViewChildProfileScreen = () => {
//   const navigation = useNavigation();

//   const [index, setIndex] = React.useState(1);
//   const [routes] = React.useState([
//     { key: 'home', title: 'Home', icon: 'home' },
//     { key: 'viewChild', title: 'View Child', icon: 'baby' },
//     { key: 'profile', title: 'Profile', icon: 'account' },
//     { key: 'more', title: 'More', icon: 'dots-horizontal' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: () => navigation.navigate('parentmain'),
//     viewChild: () => null,
//     profile: () => navigation.navigate('ParentProfileScreen'),
//     more: () => null,
//   });

//   return (
//     <LinearGradient colors={['#ffe6f0', '#fff0f5']} style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <IconButton icon="arrow-left" size={28} onPress={() => navigation.goBack()} />
//         <Text style={styles.headerTitle}>Little Care</Text>
//         <View style={{ width: 40 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Top Section */}
//         <Avatar.Image
//           size={120}
//           source={{ uri: 'https://via.placeholder.com/150' }}
//           style={styles.avatar}
//         />
//         <Text style={styles.childName}>Ayesha Khan</Text>
//         <Text style={styles.childAge}>4 Years Old</Text>

//         {/* Details Card */}
//         <Card style={styles.card}>
//           {/* Edit Button */}
//           <IconButton
//             icon="pencil"
//             size={20}
//             style={styles.editIcon}
//             onPress={() => navigation.navigate('editchildprofile')}
//           />

//           {/* Parent Info */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Parent Info</Text>
//             <Text style={styles.sectionText}>Parent Name: Sara Khan</Text>
//             <Text style={styles.sectionText}>Date of Birth: 1985-07-20</Text>
//           </View>

//           {/* Child Info */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Child Info</Text>
//             <Text style={styles.sectionText}>Age: 4</Text>
//             <Text style={styles.sectionText}>Gender: Female</Text>
//           </View>

//           {/* Guardian Contact */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Guardian Contact</Text>
//             <Text style={styles.sectionText}>Phone: +92 300 1234567</Text>
//           </View>

//           {/* Special Notes */}
//           <View style={[styles.section, styles.notesSection]}>
//             <Text style={styles.sectionTitle}>Special Notes</Text>
//             <Text style={styles.sectionText}>
//               Allergies: Peanuts, Loves drawing and painting.
//             </Text>
//           </View>
//         </Card>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <BottomNavigation
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//         activeColor="#ff66b2"
//         inactiveColor="#999"
//         barStyle={{ backgroundColor: '#fff0f5' }}
//       />
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   scrollContainer: { alignItems: 'center', padding: 20, paddingBottom: 80 },
//   header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
//   avatar: { marginVertical: 15 },
//   childName: { fontSize: 22, fontWeight: 'bold', color: '#333' },
//   childAge: { fontSize: 16, color: '#555', marginBottom: 20 },
//   card: { width: '100%', padding: 15, borderRadius: 15, elevation: 3, backgroundColor: '#fff', position: 'relative' },
//   editIcon: { position: 'absolute', top: 10, right: 10 },
//   section: { marginBottom: 15 },
//   sectionTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 5, color: '#ff66b2' },
//   sectionText: { fontSize: 14, color: '#333' },
//   notesSection: { backgroundColor: '#ffe6cc', padding: 10, borderRadius: 10 },
// });

// export default ViewChildProfileScreen;



















import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const ViewChildProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // 👉 DATA RECEIVE
  // const child = route.params?.child;

  const child = route.params?.child || {};
  
  // const [index, setIndex] = React.useState(1);
  // const [routes] = React.useState([
  //   { key: 'home', title: 'Home', icon: 'home' },
  //   { key: 'viewChild', title: 'View Child', icon: 'baby' },
  //   { key: 'profile', title: 'Profile', icon: 'account' },
  //   { key: 'more', title: 'More', icon: 'dots-horizontal' },
  // ]);

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'home':
      navigation.navigate('parentmain');
      return null;

    case 'viewChild':
      return null;

    case 'profile':
      navigation.navigate('ParentProfileScreen');
      return null;

    case 'more':
      return null;

    default:
      return null;
  }
};

  return (
    <LinearGradient colors={['#ffe6f0', '#fff0f5']} style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={28} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Child Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Avatar */}
        <Avatar.Image
          size={120}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
          }}
          style={styles.avatar}
        />

        {/* Dynamic Data */}
        <Text style={styles.childName}>{child?.name || 'No Name'}</Text>
        <Text style={styles.childAge}>{child?.age || 0} Years Old</Text>

        {/* Card */}
        <Card style={styles.card}>

          <IconButton
            icon="pencil"
            size={20}
            style={styles.editIcon}
            onPress={() => navigation.navigate('editchildprofile')}
          />

          {/* Parent / Guardian */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Guardian Info</Text>
            <Text style={styles.sectionText}>
              Name: {child?.guardian_details || '-'}
            </Text>
            <Text style={styles.sectionText}>
              Relation: {child?.relation || '-'}
            </Text>
          </View>

          {/* Child Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Child Info</Text>
            <Text style={styles.sectionText}>
              Age: {child?.age || '-'}
            </Text>
            <Text style={styles.sectionText}>
              Gender: {child?.gender || '-'}
            </Text>
            <Text style={styles.sectionText}>
              DOB: {child?.date_of_birth
                ? new Date(child.date_of_birth).toDateString()
                : '-'}
            </Text>
          </View>

          {/* Contact */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Guardian Contact</Text>
            <Text style={styles.sectionText}>
              Phone: {child?.guardian_contact || '-'}
            </Text>
          </View>

        </Card>
      </ScrollView>

      {/* Bottom Nav */}
      {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#ff66b2"
        inactiveColor="#999"
        barStyle={{ backgroundColor: '#fff0f5' }}
      /> */}
    </LinearGradient>
  );
};
export default ViewChildProfileScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },

  scrollContainer: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80
  },

  avatar: {
    marginVertical: 15
  },

  childName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },

  childAge: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20
  },

  card: {
    width: '100%',
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#fff',
    position: 'relative'
  },

  editIcon: {
    position: 'absolute',
    top: 10,
    right: 10
  },

  section: {
    marginBottom: 15
  },

  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#ff66b2'
  },

  sectionText: {
    fontSize: 14,
    color: '#333'
  }
});