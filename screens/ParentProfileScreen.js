import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Avatar, Button, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ParentProfileScreen = () => {
  const navigation = useNavigation();

  // Sample user data (replace with API / context)
  const user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+92 300 1234567',
    city: 'Rawalpindi',
    age: 35,
    avatarUrl: '', // Leave empty to use default avatar
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        {user.avatarUrl ? (
          <Avatar.Image size={100} source={{ uri: user.avatarUrl }} />
        ) : (
          <Avatar.Icon size={100} icon="account" style={{ backgroundColor: '#A0E7E5' }} />
        )}
        <Title style={styles.title}>My Profile</Title>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.label}>Full Name</Paragraph>
          <Text style={styles.value}>{user.fullName}</Text>

          <Paragraph style={styles.label}>Email</Paragraph>
          <Text style={styles.value}>{user.email}</Text>

          <Paragraph style={styles.label}>Phone Number</Paragraph>
          <Text style={styles.value}>{user.phone}</Text>

          <Paragraph style={styles.label}>City</Paragraph>
          <Text style={styles.value}>{user.city}</Text>

          {user.age && (
            <>
              <Paragraph style={styles.label}>Age</Paragraph>
              <Text style={styles.value}>{user.age}</Text>
            </>
          )}
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('EditProfileScreen')}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Edit Profile
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEFF9', // Soft pastel background
    padding: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  card: {
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    backgroundColor: '#FFF',
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  button: {
    borderRadius: 12,
    marginHorizontal: 32,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default ParentProfileScreen;






// // ParentProfileScreen.js
// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Card, Text, Avatar, Button, Title, Paragraph } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';

// const ParentProfileScreen = () => {
//   const navigation = useNavigation();

//   const user = {
//     fullName: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+92 300 1234567',
//     city: 'Rawalpindi',
//     age: 35,
//     avatarUrl: '',
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.avatarContainer}>
//         {user.avatarUrl ? (
//           <Avatar.Image size={100} source={{ uri: user.avatarUrl }} />
//         ) : (
//           <Avatar.Icon size={100} icon="account" style={{ backgroundColor: '#A0E7E5' }} />
//         )}
//         <Title style={styles.title}>My Profile</Title>
//       </View>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Paragraph style={styles.label}>Full Name</Paragraph>
//           <Text style={styles.value}>{user.fullName}</Text>

//           <Paragraph style={styles.label}>Email</Paragraph>
//           <Text style={styles.value}>{user.email}</Text>

//           <Paragraph style={styles.label}>Phone Number</Paragraph>
//           <Text style={styles.value}>{user.phone}</Text>

//           <Paragraph style={styles.label}>City</Paragraph>
//           <Text style={styles.value}>{user.city}</Text>

//           {user.age && (
//             <>
//               <Paragraph style={styles.label}>Age</Paragraph>
//               <Text style={styles.value}>{user.age}</Text>
//             </>
//           )}
//         </Card.Content>
//       </Card>

//       <Button
//         mode="contained"
//         onPress={() => navigation.navigate('EditProfileScreen')}
//         style={styles.button}
//         contentStyle={styles.buttonContent}
//       >
//         Edit Profile
//       </Button>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FDEFF9', padding: 16 },
//   avatarContainer: { alignItems: 'center', marginBottom: 24 },
//   title: { marginTop: 12, fontSize: 24, fontWeight: '600', color: '#333' },
//   card: {
//     borderRadius: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     marginBottom: 24,
//     backgroundColor: '#FFF',
//     elevation: 4,
//   },
//   label: { fontSize: 14, color: '#888', marginTop: 8 },
//   value: { fontSize: 16, fontWeight: '500', color: '#333', marginBottom: 4 },
//   button: { borderRadius: 12, marginHorizontal: 32 },
//   buttonContent: { paddingVertical: 8 },
// });

// export default ParentProfileScreen;






// ParentProfileScreen.js
// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Card, Text, Avatar, Button, Title, Paragraph } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import BottomTabs from './BottomTabs'; // Reusable bottom tabs component

// const ParentProfileScreen = () => {
//   const navigation = useNavigation();

//   const user = {
//     fullName: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+92 300 1234567',
//     city: 'Rawalpindi',
//     age: 35,
//     avatarUrl: '',
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Avatar & Title */}
//         <View style={styles.avatarContainer}>
//           {user.avatarUrl ? (
//             <Avatar.Image size={100} source={{ uri: user.avatarUrl }} />
//           ) : (
//             <Avatar.Icon size={100} icon="account" style={{ backgroundColor: '#A0E7E5' }} />
//           )}
//           <Title style={styles.title}>My Profile</Title>
//         </View>

//         {/* User Info Card */}
//         <Card style={styles.card}>
//           <Card.Content>
//             <Paragraph style={styles.label}>Full Name</Paragraph>
//             <Text style={styles.value}>{user.fullName}</Text>

//             <Paragraph style={styles.label}>Email</Paragraph>
//             <Text style={styles.value}>{user.email}</Text>

//             <Paragraph style={styles.label}>Phone Number</Paragraph>
//             <Text style={styles.value}>{user.phone}</Text>

//             <Paragraph style={styles.label}>City</Paragraph>
//             <Text style={styles.value}>{user.city}</Text>

//             {user.age && (
//               <>
//                 <Paragraph style={styles.label}>Age</Paragraph>
//                 <Text style={styles.value}>{user.age}</Text>
//               </>
//             )}
//           </Card.Content>
//         </Card>

//         {/* Edit Profile Button */}
//         <Button
//           mode="contained"
//           onPress={() => navigation.navigate('EditProfileScreen')}
//           style={styles.button}
//           contentStyle={styles.buttonContent}
//         >
//           Edit Profile
//         </Button>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <BottomTabs activeTab="profile" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FDEFF9' },
//   scrollContainer: { padding: 16, paddingBottom: 80 }, // Extra padding for bottom tabs
//   avatarContainer: { alignItems: 'center', marginBottom: 24 },
//   title: { marginTop: 12, fontSize: 24, fontWeight: '600', color: '#333' },
//   card: {
//     borderRadius: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     marginBottom: 24,
//     backgroundColor: '#FFF',
//     elevation: 4,
//   },
//   label: { fontSize: 14, color: '#888', marginTop: 8 },
//   value: { fontSize: 16, fontWeight: '500', color: '#333', marginBottom: 4 },
//   button: { borderRadius: 12, marginHorizontal: 32 },
//   buttonContent: { paddingVertical: 8 },
// });

// export default ParentProfileScreen;