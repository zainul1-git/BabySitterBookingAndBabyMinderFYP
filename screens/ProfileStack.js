// ProfileStack.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ParentProfileScreen from './ParentProfileScreen';
// import EditProfileScreen from './EditProfileScreen';

// const Stack = createNativeStackNavigator();

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="ParentProfileScreen" component={ParentProfileScreen} />
//       <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// export default ProfileStack;


// const ProfileStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: { display: 'flex' }, // ensure tab bar shows
//       }}
//     >
//       <Stack.Screen name="ParentProfileScreen" component={ParentProfileScreen} />
//       <Stack.Screen
//         name="EditProfileScreen"
//         component={EditProfileScreen}
//         // options={{ tabBarStyle: { display: 'none' } }} // agar chahen ke Edit pe hide ho
//       />
//     </Stack.Navigator>
//   );
// };

// export default ProfileStack;



// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ParentProfileScreen from './ParentProfileScreen';
// import EditProfileScreen from './EditProfileScreen';

// const Stack = createNativeStackNavigator();

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="ParentProfileScreen" component={ParentProfileScreen} />
//       <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// export default ProfileStack;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import ParentMainScreen from './ParentMainScreen';
import SearchScreen from './SearchScreen';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const ParentBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4a90e2',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ParentMainScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="search" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack} // Stack navigator without NavigationContainer
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default ParentBottomTabs;