import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSaveChanges = () => {
//     // For now, just navigate back to Profile screen
//     navigation.goBack();
//   };
// EditProfileScreen.js

const handleSaveChanges = () => {
  // Pehle navigation.goBack() tha
  // Ab bottom tab ke Profile tab ko focus karega
  navigation.navigate('ParentProfileScreen');
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TextInput
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
        mode="outlined"
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Enter your full name"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Enter your email"
      />
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        mode="outlined"
        keyboardType="phone-pad"
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Enter your phone number"
      />
      <TextInput
        label="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
        mode="outlined"
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Enter your city"
      />
      <TextInput
        label="Age"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        mode="outlined"
        keyboardType="numeric"
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Enter your age"
      />

      <Text style={styles.passwordTitle}>Change Password</Text>
      <TextInput
        label="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Enter new password"
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        outlineColor="#dcdcdc"
        activeOutlineColor={colors.primary}
        placeholder="Confirm new password"
      />

      <Button
        mode="contained"
        onPress={handleSaveChanges}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Save Changes
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fefaf6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  input: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  passwordTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#a3c9f1',
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default EditProfileScreen;





// // EditProfileScreen.js
// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { TextInput, Button, Text, useTheme } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import BottomTabs from './BottomTabs'; // Reusable bottom tabs component

// const EditProfileScreen = () => {
//   const navigation = useNavigation();
//   const { colors } = useTheme();

//   // Form state
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [city, setCity] = useState('');
//   const [age, setAge] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSaveChanges = () => {
//     // Save logic ya API call yahan add kar sakte ho
//     // Bottom tab ke Profile ko focus karega
//     navigation.navigate('ParentProfileScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Edit Profile</Text>

//         <TextInput
//           label="Full Name"
//           value={fullName}
//           onChangeText={setFullName}
//           style={styles.input}
//           mode="outlined"
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Enter your full name"
//         />
//         <TextInput
//           label="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//           mode="outlined"
//           keyboardType="email-address"
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Enter your email"
//         />
//         <TextInput
//           label="Phone Number"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           style={styles.input}
//           mode="outlined"
//           keyboardType="phone-pad"
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Enter your phone number"
//         />
//         <TextInput
//           label="City"
//           value={city}
//           onChangeText={setCity}
//           style={styles.input}
//           mode="outlined"
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Enter your city"
//         />
//         <TextInput
//           label="Age"
//           value={age}
//           onChangeText={setAge}
//           style={styles.input}
//           mode="outlined"
//           keyboardType="numeric"
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Enter your age"
//         />

//         <Text style={styles.passwordTitle}>Change Password</Text>
//         <TextInput
//           label="New Password"
//           value={newPassword}
//           onChangeText={setNewPassword}
//           style={styles.input}
//           mode="outlined"
//           secureTextEntry
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Enter new password"
//         />
//         <TextInput
//           label="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           style={styles.input}
//           mode="outlined"
//           secureTextEntry
//           outlineColor="#dcdcdc"
//           activeOutlineColor={colors.primary}
//           placeholder="Confirm new password"
//         />

//         <Button
//           mode="contained"
//           onPress={handleSaveChanges}
//           style={styles.button}
//           contentStyle={styles.buttonContent}
//         >
//           Save Changes
//         </Button>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <BottomTabs activeTab="profile" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fefaf6' },
//   scrollContainer: { padding: 20, paddingBottom: 100 }, // extra padding for bottom nav
//   title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, alignSelf: 'center', color: '#333' },
//   input: { marginBottom: 15, borderRadius: 10, backgroundColor: '#fff' },
//   passwordTitle: { fontSize: 18, fontWeight: '600', marginTop: 10, marginBottom: 10, color: '#333' },
//   button: { marginTop: 20, borderRadius: 10, backgroundColor: '#a3c9f1' },
//   buttonContent: { paddingVertical: 8 },
// });

// export default EditProfileScreen;