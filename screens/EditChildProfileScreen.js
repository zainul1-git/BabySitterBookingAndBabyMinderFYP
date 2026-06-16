import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Text, TextInput, Button, Avatar, IconButton, BottomNavigation } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

const EditChildProfileScreen = () => {
  const navigation = useNavigation();

// const { childName, age, gender, dob, guardianName ,specialNotes,relation,contact} = route.params;
  
//   const [childNameState, setChildNameState] = useState(childName);
//   const [ageState, setAgeState] = useState(age);
//   const [genderState, setGenderState] = useState(gender);
//   const [dobState, setDobState] = useState(dob);
//   const [guardianNameState, setGuardianNameState] = useState(guardianName);

  // Pre-filled dummy data
  const [childName, setChildName] = useState('Ayesha Khan');
  const [childAge, setChildAge] = useState('4');
  const [gender, setGender] = useState('Female');
  const [dob, setDob] = useState('2019-03-25');
  const [specialNotes, setSpecialNotes] = useState('Allergies: Peanuts, Loves drawing');
  const [guardianName, setGuardianName] = useState('Sara Khan');
  const [relation, setRelation] = useState('Mother');
  const [contact, setContact] = useState('+92 300 1234567');
   const [avatarUri, setAvatarUri] = useState('https://via.placeholder.com/150');

  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'viewChild', title: 'View Child', icon: 'baby' },
    { key: 'profile', title: 'Profile', icon: 'account' },
    { key: 'more', title: 'More', icon: 'dots-horizontal' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => navigation.navigate('ParentMainScreen'),
    viewChild: () => navigation.navigate('ViewChildProfileScreen'),
    profile: () => navigation.navigate('ParentProfileScreen'),
    more: () => null,
  });

 const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', maxWidth: 500, maxHeight: 500 },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          return;
        }
        if (response.assets && response.assets.length > 0) {
          setAvatarUri(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <LinearGradient colors={['#ffe6f0', '#fff0f5']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={28} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Update Child Information</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Image */}
           <Avatar.Image size={120} source={{ uri: avatarUri }} style={styles.avatar} />
      <Button mode="outlined" onPress={pickImage} style={styles.uploadBtn}>
          Upload / Change Photo
        </Button>

        <Card style={styles.card}>
          {/* Child Info */}
          <TextInput label="Child Name" value={childName} onChangeText={setChildName} style={styles.input} />
          <TextInput label="Age" value={childAge} onChangeText={setChildAge} style={styles.input} keyboardType="numeric" />
          <TextInput label="Gender" value={gender} onChangeText={setGender} style={styles.input} />
          <TextInput label="Date of Birth" value={dob} onChangeText={setDob} style={styles.input} />

          {/* Special Notes */}
          <TextInput
            label="Special Notes"
            value={specialNotes}
            onChangeText={setSpecialNotes}
            style={styles.input}
            multiline
          />

          {/* Guardian Details */}
          <TextInput label="Guardian Name" value={guardianName} onChangeText={setGuardianName} style={styles.input} />
          <TextInput label="Relation" value={relation} onChangeText={setRelation} style={styles.input} />
          <TextInput label="Contact Number" value={contact} onChangeText={setContact} style={styles.input} keyboardType="phone-pad" />
          <TouchableOpacity><Text style={styles.addMore}>+ Add More</Text></TouchableOpacity>

          {/* Update Button */}
          <Button
            mode="contained"
            onPress={() => navigation.navigate('ViewChildProfileScreen')}
            style={styles.updateBtn}
          >
            Update Profile
          </Button>
        </Card>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#ff66b2"
        inactiveColor="#999"
        barStyle={{ backgroundColor: '#fff0f5' }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { alignItems: 'center', padding: 20, paddingBottom: 80 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center', flex: 1 },
  avatar: { marginVertical: 15 },
  uploadBtn: { marginBottom: 20, alignSelf: 'center' },
  card: { width: '100%', padding: 15, borderRadius: 15, elevation: 3, backgroundColor: '#fff' },
  input: { marginBottom: 15, backgroundColor: '#fff' },
  addMore: { color: '#ff66b2', marginBottom: 20, fontWeight: 'bold' },
  updateBtn: { backgroundColor: '#ff9933', borderRadius: 25, paddingVertical: 8, marginTop: 10 },
});

export default EditChildProfileScreen;


// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Card, Text, TextInput, Button, Avatar, IconButton, BottomNavigation } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'react-native-image-picker'; // npm install react-native-image-picker

// const EditChildProfileScreen = () => {
//   const navigation = useNavigation();

//   const [avatarUri, setAvatarUri] = useState('https://via.placeholder.com/150'); // default image

//   const [childName, setChildName] = useState('Ayesha Khan');
//   const [childAge, setChildAge] = useState('4');
//   const [gender, setGender] = useState('Female');
//   const [dob, setDob] = useState('2019-03-25');
//   const [specialNotes, setSpecialNotes] = useState('Allergies: Peanuts, Loves drawing');
//   const [guardianName, setGuardianName] = useState('Sara Khan');
//     const [contact, setContact] = useState('+92 300 1234567');
//   const [relation, setRelation] = useState('Mother');


//   const [index, setIndex] = useState(1);
//   const [routes] = useState([
//     { key: 'home', title: 'Home', icon: 'home' },
//     { key: 'viewChild', title: 'View Child', icon: 'baby' },
//     { key: 'profile', title: 'Profile', icon: 'account' },
//     { key: 'more', title: 'More', icon: 'dots-horizontal' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: () => navigation.navigate('parentmain'),
//     viewChild: () => navigation.navigate('ViewChildScreen'),
//     profile: () => navigation.navigate('ParentProfileScreen'),
//     more: () => null,
//   });

//   // Function to pick image
//   const pickImage = () => {
//     ImagePicker.launchImageLibrary(
//       { mediaType: 'photo', maxWidth: 500, maxHeight: 500 },
//       (response) => {
//         if (response.didCancel) return;
//         if (response.errorCode) {
//           console.log('ImagePicker Error: ', response.errorMessage);
//           return;
//         }
//         if (response.assets && response.assets.length > 0) {
//           setAvatarUri(response.assets[0].uri);
//         }
//       }
//     );
//   };

//   return (
//     <LinearGradient colors={['#ffe6f0', '#fff0f5']} style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <IconButton icon="arrow-left" size={28} onPress={() => navigation.goBack()} />
//         <Text style={styles.headerTitle}>Update Child Information</Text>
//         <View style={{ width: 40 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Profile Image */}
//         <Avatar.Image size={120} source={{ uri: avatarUri }} style={styles.avatar} />
//         <Button mode="outlined" onPress={pickImage} style={styles.uploadBtn}>
//           Upload / Change Photo
//         </Button>

//         <Card style={styles.card}>
//           {/* Child Info */}
//           <TextInput label="Child Name" value={childName} onChangeText={setChildName} style={styles.input} />
//           <TextInput label="Age" value={childAge} onChangeText={setChildAge} style={styles.input} keyboardType="numeric" />
//           <TextInput label="Gender" value={gender} onChangeText={setGender} style={styles.input} />
//           <TextInput label="Date of Birth" value={dob} onChangeText={setDob} style={styles.input} />

//           {/* Special Notes */}
//           <TextInput
//             label="Special Notes"
//             value={specialNotes}
//             onChangeText={setSpecialNotes}
//             style={styles.input}
//             multiline
//           />

//           {/* Guardian Details */}
//           <TextInput label="Guardian Name" value={guardianName} onChangeText={setGuardianName} style={styles.input} />
//           <TextInput label="Relation" value={relation} onChangeText={setRelation} style={styles.input} />
//           <TextInput label="Contact Number" value={contact} onChangeText={setContact} style={styles.input} keyboardType="phone-pad" />
//           <TouchableOpacity><Text style={styles.addMore}>+ Add More</Text></TouchableOpacity>

//           {/* Update Button */}
//           <Button
//             mode="contained"
//             onPress={() => navigation.navigate('ViewChildScreen')}
//             style={styles.updateBtn}
//           >
//             Update Profile
//           </Button>
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
//   headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center', flex: 1 },
//   avatar: { marginVertical: 15 },
//   uploadBtn: { marginBottom: 20, alignSelf: 'center' },
//   card: { width: '100%', padding: 15, borderRadius: 15, elevation: 3, backgroundColor: '#fff' },
//   input: { marginBottom: 15, backgroundColor: '#fff' },
//   addMore: { color: '#ff66b2', marginBottom: 20, fontWeight: 'bold' },
//   updateBtn: { backgroundColor: '#ff9933', borderRadius: 25, paddingVertical: 8, marginTop: 10 },
// });

// export default EditChildProfileScreen;