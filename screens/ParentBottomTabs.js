// // ParentBottomTabs.js
// // import React from 'react';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { MaterialIcons } from '@expo/vector-icons';
// // import ParentMainScreen from './ParentMainScreen';
// // import SearchScreen from './SearchScreen';
// // import ProfileStack from './ProfileStack';

// // const Tab = createBottomTabNavigator();

// // const ParentBottomTabs = () => {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         initialRouteName="Home"
// //         screenOptions={{
// //           headerShown: false,
// //           tabBarActiveTintColor: '#4a90e2',
// //           tabBarInactiveTintColor: 'gray',
// //           tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
// //         }}
// //       >
// //         <Tab.Screen
// //           name="Home"
// //           component={ParentMainScreen}
// //           options={{
// //             tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
// //           }}
// //         />
// //         <Tab.Screen
// //           name="Search"
// //           component={SearchScreen}
// //           options={{
// //             tabBarIcon: ({ color, size }) => <MaterialIcons name="search" color={color} size={size} />,
// //           }}
// //         />
// //         <Tab.Screen
// //           name="Profile"
// //           component={ProfileStack}
// //           options={{
// //             tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
// //           }}
// //         />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default ParentBottomTabs;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialIcons } from '@expo/vector-icons';
// import ParentMainScreen from './ParentMainScreen';
// import SearchScreen from './SearchScreen';
// import ProfileStack from './ProfileStack';

// const Tab = createBottomTabNavigator();

// const ParentBottomTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#4a90e2',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={ParentMainScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="search" color={color} size={size} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileStack} // Stack navigator without NavigationContainer
//         options={{
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default ParentBottomTabs;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ParentBottomTabs = ({ activeTab }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <IconButton
        icon="home"
        iconColor={activeTab === 'home' ? '#fff' : '#555'}
        style={activeTab === 'home' ? styles.activeBtn : null}
        onPress={() => navigation.navigate('ParentMainScreen')}
      />

      <IconButton
        icon="magnify"
        iconColor={activeTab === 'search' ? '#fff' : '#555'}
        style={activeTab === 'search' ? styles.activeBtn : null}
        onPress={() => navigation.navigate('SearchScreen')}
      />

      <IconButton
        icon="account"
        iconColor={activeTab === 'profile' ? '#fff' : '#555'}
        style={activeTab === 'profile' ? styles.activeBtn : null}
        onPress={() => navigation.navigate('ParentProfileScreen')}
      />

      <IconButton
        icon="dots-horizontal"
        iconColor={activeTab === 'more' ? '#fff' : '#555'}
        style={activeTab === 'more' ? styles.activeBtn : null}
        onPress={() => navigation.navigate('MoreScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  activeBtn: {
    backgroundColor: '#A0C4FF',
    borderRadius: 50,
  },
});

export default ParentBottomTabs;