// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Appbar, Card, Text, Button, Avatar } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// const MyJobsScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState('active');

//   const renderTabs = () => (
//     <View style={styles.tabContainer}>
//       {['active', 'upcoming', 'history'].map((tab) => (
//         <Button
//           key={tab}
//           mode={activeTab === tab ? 'contained' : 'outlined'}
//           onPress={() => setActiveTab(tab)}
//           style={styles.tabButton}
//           labelStyle={styles.tabLabel}
//         >
//           {tab === 'active'
//             ? 'Active Jobs'
//             : tab === 'upcoming'
//             ? 'Upcoming'
//             : 'History'}
//         </Button>
//       ))}
//     </View>
//   );

//   const JobCard = ({ item, type }) => (
//     <Card style={styles.card}>
//       <Card.Content>
//         <View style={styles.rowBetween}>
//           <View>
//             <Text style={styles.title}>{item.child}</Text>
//             {type === 'active' && (
//               <Text style={styles.status}>In Progress</Text>
//             )}
//             <Text style={styles.text}>{item.date}</Text>
//             <Text style={styles.text}>{item.time}</Text>
//             <Text style={styles.text}>Babysitter: {item.sitter}</Text>
//           </View>

//           <Avatar.Icon size={40} icon="account" style={styles.avatar} />
//         </View>

//         <View style={styles.buttonRow}>
//           {type === 'active' && (
//             <>
//               <Button mode="contained" style={styles.startBtn}>
//                 Start Job
//               </Button>
//               <Button mode="contained" style={styles.endBtn}>
//                 End Job
//               </Button>
//             </>
//           )}

//           {type === 'upcoming' && (
//             <Button mode="contained" style={styles.startBtn}>
//               Start Job
//             </Button>
//           )}
//         </View>
//       </Card.Content>
//     </Card>
//   );

//   const data = [
//     {
//       child: 'Ali Ahmed',
//       date: '12 March 2026',
//       time: '10:00 AM - 2:00 PM',
//       sitter: 'Sara Khan',
//     },
//   ];

//   const renderContent = () => {
//     return data.map((item, index) => (
//       <JobCard key={index} item={item} type={activeTab} />
//     ));
//   };

//   return (
//     <LinearGradient colors={["#FDE4EC", "#FCE4EC"]} style={styles.container}>
//       {/* Header */}
//       <Appbar.Header style={styles.header}>
//         <Appbar.BackAction onPress={() => navigation.goBack()} />
//         <Appbar.Content title="My Jobs" />
//         <Appbar.Action icon="filter" onPress={() => {}} />
//       </Appbar.Header>

//       {/* Tabs */}
//       {renderTabs()}

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.scroll}>
//         {renderContent()}
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <Button onPress={() => navigation.navigate('parentmain')}>
//           Home
//         </Button>
//         <Button onPress={() => navigation.navigate('searchbabysitter')}>
//           Search
//         </Button>
//         <Button mode="contained">My Jobs</Button>
//         <Button onPress={() => navigation.navigate('ParentProfileScreen')}>
//           Profile
//         </Button>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     backgroundColor: 'transparent',
//     elevation: 0,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 10,
//   },
//   tabButton: {
//     borderRadius: 20,
//   },
//   tabLabel: {
//     fontSize: 12,
//   },
//   scroll: {
//     padding: 10,
//   },
//   card: {
//     borderRadius: 15,
//     marginBottom: 12,
//     elevation: 3,
//   },
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   status: {
//     color: '#E91E63',
//     marginBottom: 4,
//   },
//   text: {
//     fontSize: 13,
//     color: '#555',
//   },
//   avatar: {
//     backgroundColor: '#F8BBD0',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     marginTop: 10,
//     justifyContent: 'space-between',
//   },
//   startBtn: {
//     backgroundColor: '#C8E6C9',
//     borderRadius: 20,
//   },
//   endBtn: {
//     backgroundColor: '#FFCDD2',
//     borderRadius: 20,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 8,
//     backgroundColor: '#fff',
//   },
// });

// export default MyJobsScreen;


import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text, Button, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const MyJobsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('active');

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      {['active', 'upcoming', 'history'].map((tab) => (
        <Button
          key={tab}
          mode={activeTab === tab ? 'contained' : 'outlined'}
          onPress={() => setActiveTab(tab)}
          style={[styles.tabButton, activeTab === tab && styles.activeTab]}
          labelStyle={styles.tabLabel}
        >
          {tab === 'active'
            ? 'Active Jobs'
            : tab === 'upcoming'
            ? 'Upcoming'
            : 'History'}
        </Button>
      ))}
    </View>
  );

  const handleStartJob = () => {
    navigation.navigate('JobTimerScreen'); // Timer screen
  };

  const handleEndJob = () => {
    navigation.navigate('JobTimerScreen'); // First timer, then rating inside flow
  };

  const JobCard = ({ item, type }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.title}>{item.child}</Text>

            {type === 'active' && (
              <Text style={styles.status}>In Progress</Text>
            )}

            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.time}</Text>
            <Text style={styles.text}>Babysitter: {item.sitter}</Text>
          </View>

          <Avatar.Icon size={42} icon="account" style={styles.avatar} />
        </View>

        <View style={styles.buttonRow}>
          {/* ACTIVE TAB */}
          {type === 'active' && (
            <>
              <Button
                mode="contained"
                disabled={true}
                style={[styles.startBtn, styles.disabledBtn]}
              >
                Start Job
              </Button>

              <Button
                mode="contained"
                onPress={handleEndJob}
                style={styles.endBtn}
              >
                End Job
              </Button>
            </>
          )}

          {/* UPCOMING TAB */}
          {type === 'upcoming' && (
            <>
              <Button
                mode="contained"
                onPress={handleStartJob}
                style={styles.startBtn}
              >
                Start Job
              </Button>

              <Button
                mode="contained"
                disabled={true}
                style={[styles.endBtn, styles.disabledBtn]}
              >
                End Job
              </Button>
            </>
          )}

          {/* HISTORY TAB */}
          {type === 'history' && null}
        </View>
      </Card.Content>
    </Card>
  );

  const data = [
    {
      child: 'Ali Ahmed',
      date: '12 March 2026',
      time: '10:00 AM - 2:00 PM',
      sitter: 'Sara Khan',
    },
  ];

  const renderContent = () => {
    return data.map((item, index) => (
      <JobCard key={index} item={item} type={activeTab} />
    ));
  };

  return (
    <LinearGradient colors={["#FDE4EC", "#FCE4EC"]} style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Jobs" />
        <Appbar.Action icon="tune" onPress={() => {}} />
      </Appbar.Header>

      {/* Tabs */}
      {renderTabs()}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {renderContent()}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Button onPress={() => navigation.navigate('parentmain')}>
          Home
        </Button>
        <Button onPress={() => navigation.navigate('searchbabysitter')}>
          Search
        </Button>
        <Button mode="contained">My Jobs</Button>
        <Button onPress={() => navigation.navigate('ParentProfileScreen')}>
          Profile
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  tabButton: {
    borderRadius: 25,
    paddingHorizontal: 6,
  },
  activeTab: {
    backgroundColor: '#F8BBD0',
  },
  tabLabel: {
    fontSize: 12,
  },

  scroll: {
    padding: 12,
  },

  card: {
    borderRadius: 18,
    marginBottom: 14,
    elevation: 4,
    backgroundColor: '#fff',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  status: {
    color: '#E91E63',
    marginBottom: 4,
    fontWeight: '600',
  },

  text: {
    fontSize: 13,
    color: '#555',
  },

  avatar: {
    backgroundColor: '#F8BBD0',
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },

  startBtn: {
    backgroundColor: '#C8E6C9',
    borderRadius: 25,
    flex: 0.48,
  },

  endBtn: {
    backgroundColor: '#FFCDD2',
    borderRadius: 25,
    flex: 0.48,
  },

  disabledBtn: {
    opacity: 0.5,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});

export default MyJobsScreen;

