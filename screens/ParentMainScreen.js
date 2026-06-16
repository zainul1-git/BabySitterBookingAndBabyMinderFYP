// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
// import {
//   Text,
//   Card,
//   Avatar,
//   IconButton
// } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';

// const ParentMainScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = React.useState('home');

//   const dashboardItems = [
//     {
//       title: 'View Child',
//       icon: 'baby-face-outline',
//       screen: 'ViewChildScreen'
//     },
//     {
//       title: 'My Jobs',
//       icon: 'briefcase-outline',
//       screen: 'MyJobsScreen'
//     },
//     {
//       title: 'Babysitter Profile',
//       icon: 'account-heart-outline',
//       screen: 'BabysitterProfileScreen'
//     },
//     {
//       title: 'Notifications',
//       icon: 'bell-outline',
//       screen: 'NotificationsScreen'
//     },
//     {
//       title: 'SetChildProfile',
//       icon: 'account-heart-outline',
//       screen: 'SetChildProfileScreen'
//     },
//     //    {
//     //   title: 'SearchBabySitters',
//     //   icon: 'account-heart-outline',
//     //   screen: 'SearchBabySitterScreen'
//     // }
//   ];

//   return (
//     <View style={styles.container}>
      
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.welcomeText}>Welcome, zain 👋</Text>
//         <Avatar.Icon size={40} icon="account" style={styles.avatar} />
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Monitor Child Button */}
//         <TouchableOpacity
//           onPress={() => navigation.navigate('MonitorChildScreen')}
//         >
//           <Card style={styles.monitorCard}>
//             <Card.Content>
//               <Text style={styles.monitorText}>Monitor Child</Text>
//             </Card.Content>
//           </Card>
//         </TouchableOpacity>

//         {/* Dashboard Section */}
//         <View style={styles.dashboardContainer}>
//           {dashboardItems.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.cardWrapper}
//               onPress={() => navigation.navigate(item.screen)}
//             >
//               <Card style={styles.card}>
//                 <Card.Content style={styles.cardContent}>
//                   <IconButton icon={item.icon} size={28} />
//                   <Text style={styles.cardText}>{item.title}</Text>
//                 </Card.Content>
//               </Card>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* View All */}
//         <TouchableOpacity
//           onPress={() => navigation.navigate('AllFeaturesScreen')}
//         >
//           <Card style={styles.viewAllCard}>
//             <Card.Content>
//               <Text style={styles.viewAllText}>View All</Text>
//             </Card.Content>
//           </Card>
//         </TouchableOpacity>

//       </ScrollView>

//       {/* Bottom Navigation */}
//       {/* <View style={styles.bottomNav}>
//         <IconButton icon="home" onPress={() => {}} />

//         <IconButton
//           icon="magnify"
//           size={32}
//           style={styles.searchBtn}
//           onPress={() => navigation.navigate('SearchBabysitterScreen')}
//         />

//         <IconButton
//           icon="account"
//           onPress={() => navigation.navigate('ParentProfileScreen')}
//         />

//         <IconButton
//           icon="dots-horizontal"
//           onPress={() => navigation.navigate('MoreScreen')}
//         />
//       </View> */}
//       <View style={styles.bottomNav}>
  
//   {/* HOME */}
//   <IconButton
//     icon="home"
//     iconColor={activeTab === 'home' ? '#fff' : '#555'}
//     style={activeTab === 'home' ? styles.activeBtn : null}
//     onPress={() => {
//       setActiveTab('home');
//       navigation.navigate('ParentMainScreen');
//     }}
//   />

//   {/* SEARCH */}
//   <IconButton
//     icon="magnify"
//     iconColor={activeTab === 'search' ? '#fff' : '#555'}
//     style={activeTab === 'search' ? styles.activeBtn : null}
//     onPress={() => {
//       setActiveTab('search');
//       navigation.navigate('SearchBabysitterScreen');
//     }}
//   />

//   {/* PROFILE */}
//   <IconButton
//     icon="account"
//     iconColor={activeTab === 'profile' ? '#fff' : '#555'}
//     style={activeTab === 'profile' ? styles.activeBtn : null}
//     onPress={() => {
//       setActiveTab('profile');
//       navigation.navigate('ParentProfileScreen');
//     }}
//   />

//   {/* MORE */}
//   <IconButton
//     icon="dots-horizontal"
//     iconColor={activeTab === 'more' ? '#fff' : '#555'}
//     style={activeTab === 'more' ? styles.activeBtn : null}
//     onPress={() => {
//       setActiveTab('more');
//       navigation.navigate('MoreScreen');
//     }}
//   />

// </View>

//     </View>
//   );
// };

// export default ParentMainScreen;

// const styles = StyleSheet.create({
//   activeBtn: {
//   backgroundColor: '#A0C4FF',
//   borderRadius: 50
// },
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F8FB'
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20
//   },

//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold'
//   },

//   avatar: {
//     backgroundColor: '#A0C4FF'
//   },

//   monitorCard: {
//     marginHorizontal: 20,
//     borderRadius: 16,
//     backgroundColor: '#BDE0FE',
//     elevation: 4,
//     paddingVertical: 10
//   },

//   monitorText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },

//   dashboardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 20
//   },

//   cardWrapper: {
//     width: '48%',
//     marginBottom: 15
//   },

//   card: {
//     borderRadius: 16,
//     backgroundColor: '#FFFFFF',
//     elevation: 3
//   },

//   cardContent: {
//     alignItems: 'center'
//   },

//   cardText: {
//     marginTop: 5,
//     textAlign: 'center',
//     fontSize: 13
//   },

//   viewAllCard: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderRadius: 16,
//     backgroundColor: '#FFD6A5',
//     elevation: 3
//   },

//   viewAllText: {
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },

//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 8,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 0.5,
//     borderColor: '#ddd'
//   },

//   searchBtn: {
//     backgroundColor: '#A0C4FF',
//     borderRadius: 50
//   }
// });

















// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
// import {
//   Text,
//   Card,
//   Avatar,
//   IconButton
// } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';

// const ParentMainScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = React.useState('home');
//   // const[parentName,setParentName]=useState('');

//   const dashboardItems = [
//     {
//       title: 'Find Sitter',
//       subtitle: 'Find a new babysitter',
//       icon: 'account-search-outline',
//       screen: 'searchbabysitter'
//     },
//     {
//       title: 'My Jobs',
//       subtitle: 'Manage active listings',
//       icon: 'briefcase-outline',
//       screen: 'MyJobsScreen'
//     },
//     {
//       title: 'View Child Profile',
//       subtitle: 'Medical info & habits',
//       icon: 'baby-face-outline',
//       screen: 'ViewChildScreen'
//     },
//     {
//       title: 'Live Baby Monitoring',
//       subtitle: 'Real-time camera feed',
//       icon: 'video-outline',
//       screen: 'MonitorChildScreen'
//     },
//     {
//       title: 'Set Child Profile',
//       subtitle: 'Add or edit child details',
//       icon: 'account-edit-outline',
//       screen: 'SetChildProfileScreen'
//     },
//     {
//       title: 'Cry Alert Screen',
//       subtitle: 'Sound detection settings',
//       icon: 'bell-ring-outline',
//       screen: 'CryAlertScreen'
//     },
//     {
//       title: 'Babysitter Profile',
//       subtitle: 'View hired professionals',
//       icon: 'account-heart-outline',
//       screen: 'babysitterprofile'
//     }
//   ];

//   return (
//     <View style={styles.container}>

//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.welcomeText}>Welcome Zain</Text>
//         <Avatar.Icon size={40} icon="account" style={styles.avatar} />
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Monitor Child Button (KEEP SAME) */}
//         <TouchableOpacity
//           onPress={() => navigation.navigate('MonitorChildScreen')}
//         >
//           <Card style={styles.monitorCard}>
//             <Card.Content>
//               <Text style={styles.monitorText}>Monitor Child</Text>
//             </Card.Content>
//           </Card>
//         </TouchableOpacity>

//         {/* Dashboard List */}
//         <View style={styles.dashboardContainer}>
//           {dashboardItems.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => navigation.navigate(item.screen)}
//             >
//               <Card style={styles.listCard}>
//                 <Card.Content style={styles.listContent}>
                  
//                   <IconButton icon={item.icon} size={26} />

//                   <View style={{ flex: 1 }}>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.subtitle}>{item.subtitle}</Text>
//                   </View>

//                   <IconButton icon="chevron-right" />

//                 </Card.Content>
//               </Card>
//             </TouchableOpacity>
//           ))}
//         </View>

//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>

//         <IconButton
//           icon="home"
//           iconColor={activeTab === 'home' ? '#fff' : '#555'}
//           style={activeTab === 'home' ? styles.activeBtn : null}
//           onPress={() => {
//             setActiveTab('home');
//             navigation.navigate('parentmain');
//           }}
//         />

//         <IconButton
//           icon="magnify"
//           iconColor={activeTab === 'search' ? '#fff' : '#555'}
//           style={activeTab === 'search' ? styles.activeBtn : null}
//           onPress={() => {
//             setActiveTab('search');
//             navigation.navigate('searchbabysitter');
//           }}
//         />

//         <IconButton
//           icon="account"
//           iconColor={activeTab === 'profile' ? '#fff' : '#555'}
//           style={activeTab === 'profile' ? styles.activeBtn : null}
//           onPress={() => {
//             setActiveTab('profile');
//             navigation.navigate('ParentProfileScreen');
//           }}
//         />

//         <IconButton
//           icon="dots-horizontal"
//           iconColor={activeTab === 'more' ? '#fff' : '#555'}
//           style={activeTab === 'more' ? styles.activeBtn : null}
//           onPress={() => {
//             setActiveTab('more');
//             navigation.navigate('MoreScreen');
//           }}
//         />

//       </View> 
      

//     </View>
//   );
// };

// export default ParentMainScreen;


// const styles = StyleSheet.create({
//   activeBtn: {
//   backgroundColor: '#A0C4FF',
//   borderRadius: 50
// },
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F8FB'
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20
//   },

//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold'
//   },

//   avatar: {
//     backgroundColor: '#A0C4FF'
//   },

//   monitorCard: {
//     marginHorizontal: 20,
//     borderRadius: 16,
//     backgroundColor: '#BDE0FE',
//     elevation: 4,
//     paddingVertical: 10
//   },

//   monitorText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },

//   dashboardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 20
//   },

//   cardWrapper: {
//     width: '48%',
//     marginBottom: 15
//   },

//   card: {
//     borderRadius: 16,
//     backgroundColor: '#FFFFFF',
//     elevation: 3
//   },

//   cardContent: {
//     alignItems: 'center'
//   },

//   cardText: {
//     marginTop: 5,
//     textAlign: 'center',
//     fontSize: 13
//   },

//   viewAllCard: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderRadius: 16,
//     backgroundColor: '#FFD6A5',
//     elevation: 3
//   },

//   viewAllText: {
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },

//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 8,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 0.5,
//     borderColor: '#ddd'
//   },

//   searchBtn: {
//     backgroundColor: '#A0C4FF',
//     borderRadius: 50
//   },
//   flexDirection:{
//     flexDirection:'row'
//   }

// //   listCard: {
// //    marginHorizontal: 15,
// //   marginBottom: 12,
// //    borderRadius: 15,
// //   backgroundColor: '#FFFFFF',
// //    elevation: 2
// //  },

// //  listContent: {
// //    flexDirection: 'row',
// //    alignItems: 'center'
// //  },

// //  title: {
// //    fontSize: 15,
// //    fontWeight: 'bold'
// //  },

// //  subtitle: {
// //    fontSize: 12,
// //    color: '#777'
// //  },
// });






import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  Text,
  Card,
  Avatar,
  IconButton
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import {userRoute} from '@react-navigation/native'

// Screen dimensions for responsive card width
const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - 60) / 2; // Subtracting horizontal padding/margins and dividing by 2

const ParentMainScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('home');
  //  const route=useRoute();
  //  const user=route.params?.user;
  // const[parentName,setParentName]=useState('Zain');

  // Updated Data Structure: Added unique background colors for each card to match pic
  const dashboardItems = [
    {
      title: 'Find Sitter',
      subtitle: 'Find a new babysitter',
      icon: 'account-search-outline',
      screen: 'searchbabysitter',
      bgColor: '#E3F2FD' // Light Blue
    },
    {
      title: 'My Jobs',
      subtitle: 'Manage active listings',
      icon: 'briefcase-outline',
      screen: 'MyJobsScreen',
      bgColor: '#E8F5E9' // Light Green
    },
    {
      title: 'View Child Profile',
      subtitle: 'Medical info & habits',
      icon: 'baby-face-outline',
      screen: 'ViewChildScreen',
      bgColor: '#FFFDE7' // Light Yellow
    },
    {
      title: 'Live Monitoring', // Shortened slightly for better fit
      subtitle: 'Real-time camera feed',
      icon: 'video-outline',
      screen: 'MonitorChildScreen',
      bgColor: '#FFF3E0' // Light Orange
    },
    {
      title: 'Set Child Profile',
      subtitle: 'Add or edit details',
      icon: 'account-edit-outline',
      screen: 'SetChildProfileScreen',
      bgColor: '#F3E5F5' // Light Purple
    },
    {
      title: 'Cry Alert', // Shortened slightly
      subtitle: 'Sound settings',
      icon: 'bell-ring-outline',
      screen: 'CryAlertScreen',
      bgColor: '#FFEBEE' // Light Red/Pink
    },
    {
      title: 'Babysitter Profiles', // Made Plural for better wording
      subtitle: 'View hired professionals',
      icon: 'account-heart-outline',
      screen: 'babysitterprofile',
      bgColor: '#E0F2F1' // Light Teal
    }
  ];

  return (
    <View style={styles.container}>

      {/* 1. Header Section */}
      <View style={styles.header}>
         <Text style={styles.welcomeText}>Welcome  👋</Text> 
          {/* <Text style={styles.welcomeText}>Welcome {user?.full_name||"User"} 👋</Text>  */}
        <Avatar.Icon size={40} icon="account" style={styles.avatar} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>

        {/* 2. Quick Actions / Monitor Card Section */}
        {/* We keep this but visually update to match new aesthetic */}
        <TouchableOpacity
          style={styles.actionCardWrapper}
          onPress={() => navigation.navigate('MonitorChildScreen')}
        >
          <Card style={styles.quickActionCard}>
            <Card.Content style={styles.quickActionContent}>
              <IconButton icon="video-outline" iconColor="#fff" size={28} style={{backgroundColor: '#64B5F6'}} />
              <View>
                <Text style={styles.quickActionTitle}>Monitor Child Live</Text>
                <Text style={styles.quickActionSubtitle}>Quick access to camera feed</Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        {/* 3. Dashboard Grid Section (THE MAIN CHANGE) */}
        <View style={styles.gridContainer}>
          {dashboardItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.gridCardWrapper}
              onPress={() => navigation.navigate(item.screen)}
            >
              {/* Dynamic background color from data */}
              <Card style={[styles.gridCard, { backgroundColor: item.bgColor }]}>
                <Card.Content style={styles.gridCardContent}>
                  <IconButton icon={item.icon} size={30} iconColor="#555" />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* 4. Bottom Navigation */}
      <View style={styles.bottomNav}>

        <IconButton
          icon="home"
          iconColor={activeTab === 'home' ? '#fff' : '#555'}
          style={activeTab === 'home' ? styles.activeNavBtn : null}
          onPress={() => {
            setActiveTab('home');
            navigation.navigate('parentmain'); // Correct screen name in your navigation stack
          }}
        />

        <IconButton
          icon="magnify"
          iconColor={activeTab === 'search' ? '#fff' : '#555'}
          style={activeTab === 'search' ? styles.activeNavBtn : null}
          onPress={() => {
            setActiveTab('search');
            navigation.navigate('searchbabysitter'); // Correct screen name
          }}
        />

        <IconButton
          icon="account"
          iconColor={activeTab === 'profile' ? '#fff' : '#555'}
          style={activeTab === 'profile' ? styles.activeNavBtn : null}
          onPress={() => {
            setActiveTab('profile');
            navigation.navigate('ParentProfileScreen'); // Correct screen name
          }}
        />

        <IconButton
          icon="dots-horizontal"
          iconColor={activeTab === 'more' ? '#fff' : '#555'}
          style={activeTab === 'more' ? styles.activeNavBtn : null}
          onPress={() => {
            setActiveTab('more');
            navigation.navigate('MoreScreen'); // Correct screen name
          }}
        />

      </View> 
      
    </View>
  );
};

export default ParentMainScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC' // Light backdrop
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', // Clean White Header
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    elevation: 2
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },
  avatar: {
    backgroundColor: '#A0C4FF' // Example color
  },

  // Monitor/Quick Action Card Styles
  actionCardWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  quickActionCard: {
    borderRadius: 12,
    backgroundColor: '#BDE0FE', // Matching pic style light blue
    elevation: 3,
  },
  quickActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  quickActionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1A237E' // Dark blue text for contrast
  },
  quickActionSubtitle: {
    fontSize: 13,
    color: '#3949AB' // Slightly darker than background
  },

  // Grid Container Styles (Key For Row/2 Items)
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to new lines
    justifyContent: 'space-between', // Puts space between items
    paddingHorizontal: 20,
    paddingTop: 10
  },

  gridCardWrapper: {
    width: CARD_WIDTH, // Calculated dynamically for 2 items per row
    marginVertical: CARD_MARGIN,
  },

  // Grid Card Aesthetics
  gridCard: {
    borderRadius: 15,
    elevation: 2, // Minimal shadow
    height: 140, // Uniform height for all grid cards
    justifyContent: 'center',
  },

  gridCardContent: {
    alignItems: 'center', // Centers content horizontally
    paddingVertical: 10
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444'
  },

  subtitle: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 2
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#eee',
    elevation: 5
  },
  activeNavBtn: {
    backgroundColor: '#64B5F6', // Brighter active blue
    borderRadius: 50
  },
});
















