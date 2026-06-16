// // src/screens/FindBabysitterScreen.js

// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   FlatList,
// } from 'react-native';

// import {
//   Text,
//   Chip,
//   Button,
//   Card,
//   Avatar,
//   BottomNavigation,
// } from 'react-native-paper';

// import { useNavigation } from '@react-navigation/native';

// const SearchBabySitterScreen = () => {
//   const navigation = useNavigation();

//   // ------------------ STATE ------------------
//   const [selectedAge, setSelectedAge] = useState(null);
//   const [selectedExp, setSelectedExp] = useState(null);
//   const [selectedSlots, setSelectedSlots] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   // Dummy Data
//   const babysitters = [
//     {
//       id: '1',
//       name: 'Ayesha Khan',
//       experience: '2 Years',
//       rate: 'Rs. 500/hr',
//     },
//     {
//       id: '2',
//       name: 'Sara Ali',
//       experience: '3+ Years',
//       rate: 'Rs. 700/hr',
//     },
//   ];

//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
//   const times = ['Morning', 'Afternoon', 'Evening'];

//   // ------------------ HANDLERS ------------------
//   const toggleSlot = (day, time) => {
//     const key = `${day}-${time}`;
//     setSelectedSlots((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const handleApplyFilters = () => {
//     setShowResults(true);
//   };

//   // ------------------ UI ------------------
//   return (
//     <ScrollView style={styles.container}>

//       {/* HEADER */}
//       <Text style={styles.title}>Find a Babysitter</Text>

//       {/* AGE FILTER */}
//       <Text style={styles.sectionTitle}>Age Range</Text>
//       <View style={styles.row}>
//         {['18-25', '26-35', '36+'].map((age) => (
//           <Chip
//             key={age}
//             selected={selectedAge === age}
//             onPress={() => setSelectedAge(age)}
//             style={styles.chip}
//           >
//             {age}
//           </Chip>
//         ))}
//       </View>

//       {/* EXPERIENCE FILTER */}
//       <Text style={styles.sectionTitle}>Experience</Text>
//       <View style={styles.row}>
//         {['1 Year', '2 Years', '3+ Years'].map((exp) => (
//           <Chip
//             key={exp}
//             selected={selectedExp === exp}
//             onPress={() => setSelectedExp(exp)}
//             style={styles.chip}
//           >
//             {exp}
//           </Chip>
//         ))}
//       </View>

//       {/* AVAILABILITY GRID */}
//       <Text style={styles.sectionTitle}>Weekly Availability</Text>

//       {days.map((day) => (
//         <View key={day} style={styles.gridRow}>
//           <Text style={styles.dayText}>{day}</Text>

//           {times.map((time) => {
//             const key = `${day}-${time}`;
//             const selected = selectedSlots[key];

//             return (
//               <Chip
//                 key={time}
//                 selected={selected}
//                 onPress={() => toggleSlot(day, time)}
//                 style={[
//                   styles.gridChip,
//                   selected && styles.selectedGrid,
//                 ]}
//               >
//                 {time}
//               </Chip>
//             );
//           })}
//         </View>
//       ))}

//       {/* APPLY BUTTON */}
//       <Button
//         mode="contained"
//         onPress={handleApplyFilters}
//         style={styles.applyButton}
//       >
//         Apply Filters
//       </Button>

//       {/* RESULTS */}
//       {showResults && (
//         <>
//           <Text style={styles.sectionTitle}>Available Babysitters</Text>

//           {babysitters.map((item) => (
//             <Card key={item.id} style={styles.card}>
//               <Card.Content style={styles.cardContent}>
//                 <Avatar.Icon size={50} icon="account" />

//                 <View style={styles.info}>
//                   <Text style={styles.name}>{item.name}</Text>
//                   <Text>{item.experience}</Text>
//                   <Text>{item.rate}</Text>
//                 </View>
//               </Card.Content>

//               <Card.Actions>
//                 <Button
//                   onPress={() =>
//                     navigation.navigate('BabysitterProfileScreen')
//                   }
//                 >
//                   View Profile
//                 </Button>
//               </Card.Actions>
//             </Card>
//           ))}
//         </>
//       )}

//       {/* SPACE */}
//       <View style={{ height: 80 }} />
//     </ScrollView>
//   );
// };

// export default SearchBabySitterScreen;


// // ------------------ STYLES ------------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#F7F9FC',
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },

//   sectionTitle: {
//     marginTop: 15,
//     marginBottom: 8,
//     fontWeight: '600',
//   },

//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   chip: {
//     marginRight: 8,
//     marginBottom: 8,
//     backgroundColor: '#E3F2FD',
//   },

//   gridRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },

//   dayText: {
//     width: 50,
//     fontWeight: 'bold',
//   },

//   gridChip: {
//     marginRight: 5,
//     backgroundColor: '#E8F5E9',
//   },

//   selectedGrid: {
//     backgroundColor: '#A5D6A7',
//   },

//   applyButton: {
//     marginTop: 20,
//     borderRadius: 10,
//     backgroundColor: '#81D4FA',
//   },

//   card: {
//     marginTop: 10,
//     borderRadius: 12,
//   },

//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   info: {
//     marginLeft: 10,
//   },

//   name: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });














// src/screens/SearchBabySitterScreen.js

// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView
// } from 'react-native';

// import {
//   Text,
//   Chip,
//   Button,
//   Card,
//   Avatar,
//   TextInput,
// } from 'react-native-paper';

// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

//  <LinearGradient
//   colors={['#FDE4EC', '#FCE4EC', '#FFF1F3']}
//   style={styles.container} // flex:1 aur padding styles yahan define karo
// >
//   <ScrollView showsVerticalScrollIndicator={false}>
//     {/* Rest of your UI */}
//   </ScrollView>
// </LinearGradient> 

// const SearchBabySitterScreen = () => {
//    const navigation = useNavigation();

//   // ---------------- STATE ----------------
//   const [selectedAge, setSelectedAge] = useState(null);
//   const [selectedExp, setSelectedExp] = useState(null);
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [city, setCity] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const [grid, setGrid] = useState({});

//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const times = ['8-10', '10-12', '12-2', '2-4', '4-6'];

//   // ---------------- FUNCTIONS ----------------
//   const toggleCell = (day, time) => {
//     const key = `${day}-${time}`;
//     setGrid((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const resetFilters = () => {
//     setSelectedAge(null);
//     setSelectedExp(null);
//     setSelectedRating(0);
//     setCity('');
//     setGrid({});
//     setShowResults(false);
//   };

//   const applyFilters = () => {
//     setShowResults(true);
//   };

//   const babysitters = [
//     {
//       id: 1,
//       name: 'Ayesha Khan',
//       exp: '2 years',
//       price: 'Rs. 500/hr',
//     },
//     {
//       id: 2,
//       name: 'Sara Ali',
//       exp: '3+ years',
//       price: 'Rs. 700/hr',
//     },
//   ];

//   // ---------------- UI ----------------
//   return (
//     <LinearGradient
//       colors={['#FDE4EC', '#FCE4EC', '#FFF1F3']}
//       style={styles.container}
//     >
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View>
//           <Text>Gradient Example</Text>
//         </View>

//         {/* HEADER */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Find a Babysitter</Text>
//           <Avatar.Icon size={36} icon="account" style={styles.avatar} />
//         </View>

//         {/* AGE FILTER */}
//         <Text style={styles.section}>Age</Text>
//         <View style={styles.row}>
//           {['18-25 years', '26-35 years', '36+ years'].map((age) => (
//             <Chip
//               key={age}
//               selected={selectedAge === age}
//               onPress={() => setSelectedAge(age)}
//               style={[
//                 styles.chip,
//                 selectedAge === age && styles.selectedChip,
//               ]}
//             >
//               {age}
//             </Chip>
//           ))}
//         </View>

//         {/* EXPERIENCE FILTER */}
//         <Text style={styles.section}>Experience</Text>
//         <View style={styles.row}>
//           {['1 year', '2 years', '3+ years'].map((exp) => (
//             <Chip
//               key={exp}
//               selected={selectedExp === exp}
//               onPress={() => setSelectedExp(exp)}
//               style={[
//                 styles.chip,
//                 selectedExp === exp && styles.selectedChip,
//               ]}
//             >
//               {exp}
//             </Chip>
//           ))}
//         </View>

//         {/* GRID */}
//         <Text style={styles.section}>Availability</Text>

//         <View style={styles.gridContainer}>
//           {/* HEADER ROW */}
//           <View style={styles.gridRow}>
//             <View style={styles.timeCell} />
//             {days.map((day) => (
//               <Text key={day} style={styles.dayHeader}>
//                 {day}
//               </Text>
//             ))}
//           </View>

//           {/* GRID BODY */}
//           {times.map((time) => (
//             <View key={time} style={styles.gridRow}>
//               <Text style={styles.timeLabel}>{time}</Text>

//               {days.map((day) => {
//                 const key = `${day}-${time}`;
//                 const selected = grid[key];

//                 return (
//                   <View
//                     key={key}
//                     style={[
//                       styles.cell,
//                       selected && styles.selectedCell,
//                     ]}
//                     onTouchEnd={() => toggleCell(day, time)}
//                   />
//                 );
//               })}
//             </View>
//           ))}
//         </View>

//         {/* CITY */}
//         <TextInput
//           label="City"
//           value={city}
//           onChangeText={setCity}
//           mode="outlined"
//           style={styles.input}
//         />

//         {/* RATING */}
//         <Text style={styles.section}>Rating</Text>
//         <View style={styles.row}>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <Chip
//               key={star}
//               selected={selectedRating === star}
//               onPress={() => setSelectedRating(star)}
//               style={[
//                 styles.chip,
//                 selectedRating === star && styles.selectedChip,
//               ]}
//             >
//               ⭐ {star}
//             </Chip>
//           ))}
//         </View>

//         {/* BUTTONS */}
//         <View style={styles.buttonRow}>
//           <Button
//             mode="outlined"
//             onPress={resetFilters}
//             style={styles.resetBtn}
//           >
//             Reset
//           </Button>

//           <Button
//             mode="contained"
//             onPress={applyFilters}
//             style={styles.applyBtn}
//           >
//             Apply Filters
//           </Button>
//         </View>

//         {/* RESULTS */}
//         {showResults && (
//           <>
//             <Text style={styles.section}>Babysitters</Text>

//             {babysitters.map((item) => (
//               <Card key={item.id} style={styles.card}>
//                 <Card.Content style={styles.cardContent}>
//                   <Avatar.Icon size={50} icon="account" />
//                   <View style={{ marginLeft: 10 }}>
//                     <Text style={styles.name}>{item.name}</Text>
//                     <Text>{item.exp}</Text>
//                     <Text>{item.price}</Text>
//                   </View>
//                 </Card.Content>

//                 <Card.Actions>
//                   <Button
//                     onPress={() =>
//                       navigation.navigate('BabysitterProfileScreen')
//                     }
//                   >
//                     View Profile
//                   </Button>
//                 </Card.Actions>
//               </Card>
//             ))}
//           </>
//         )}

//         <View style={{ height: 80 }} />
//       </ScrollView>
//      </LinearGradient> 
    
//   );
// };

// export default SearchBabySitterScreen;


// // ---------------- STYLES ----------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },

//   avatar: {
//     backgroundColor: '#F8BBD0',
//   },

//   section: {
//     marginTop: 15,
//     marginBottom: 8,
//     fontWeight: '600',
//   },

//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   chip: {
//     margin: 4,
//     backgroundColor: '#FCE4EC',
//   },

//   selectedChip: {
//     backgroundColor: '#F8BBD0',
//   },

//   gridContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },

//   gridRow: {
//     flexDirection: 'row',
//   },

//   dayHeader: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     fontSize: 12,
//   },

//   timeCell: {
//     width: 50,
//   },

//   timeLabel: {
//     width: 50,
//     fontSize: 12,
//     textAlign: 'center',
//   },

//   cell: {
//     flex: 1,
//     height: 30,
//     borderWidth: 0.5,
//     borderColor: '#ddd',
//   },

//   selectedCell: {
//     backgroundColor: '#F48FB1',
//   },

//   input: {
//     marginTop: 10,
//     backgroundColor: 'white',
//   },

//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },

//   resetBtn: {
//     flex: 1,
//     marginRight: 5,
//   },

//   applyBtn: {
//     flex: 1,
//     marginLeft: 5,
//     backgroundColor: '#F48FB1',
//   },

//   card: {
//     marginTop: 10,
//     borderRadius: 12,
//   },

//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   name: {
//     fontWeight: 'bold',
//   },
// });
















// ye sab se PEHLE WALA HAIIIIIIIIIiiiiiiiiiiiiiiiiiiiiiiiiiii


// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView, Text } from 'react-native';
// import { Chip, Button, Card, Avatar, TextInput,  IconButton } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';

// import LinearGradient from 'react-native-linear-gradient'


// const SearchBabySitterScreen = () => {
//   const navigation = useNavigation();

//   // ---------------- STATE ----------------
//   const [selectedAge, setSelectedAge] = useState(null);
//   const [selectedExp, setSelectedExp] = useState(null);
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [city, setCity] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const [grid, setGrid] = useState({});

//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const times = ['8-10', '10-12', '12-2', '2-4', '4-6'];
//     const [activeTab, setActiveTab] = React.useState('home');
  

//   // ---------------- FUNCTIONS ----------------
//   const toggleCell = (day, time) => {
//     const key = `${day}-${time}`;
//     setGrid((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const resetFilters = () => {
//     setSelectedAge(null);
//     setSelectedExp(null);
//     setSelectedRating(0);
//     setCity('');
//     setGrid({});
//     setShowResults(false);
//   };

//   const applyFilters = () => {
//     setShowResults(true);
//   };

//   const babysitters = [
//     {
//       id: 1,
//       name: 'Ayesha Khan',
//       exp: '2 years',
//       price: 'Rs. 500/hr',
//     },
//     {
//       id: 2,
//       name: 'Sara Ali',
//       exp: '3+ years',
//       price: 'Rs. 700/hr',
//     },
//   ];

//   // ---------------- UI ----------------
//   return (
//     <LinearGradient
//       colors={['#FDE4EC', '#FCE4EC', '#FFF1F3']}
//       style={styles.container}
//     >
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* HEADER */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Find a Babysitter</Text>
//           <Avatar.Icon size={36} icon="account" style={styles.avatar} />
//         </View>

//         {/* AGE FILTER */}
//         <Text style={styles.section}>Age</Text>
//         <View style={styles.row}>
//           {['18-25 years', '26-35 years', '36+ years'].map((age) => (
//             <Chip
//               key={age}
//               selected={selectedAge === age}
//               onPress={() => setSelectedAge(age)}
//               style={[styles.chip, selectedAge === age && styles.selectedChip]}
//             >
//               {age}
//             </Chip>
//           ))}
//         </View>

//         {/* EXPERIENCE FILTER */}
//         <Text style={styles.section}>Experience</Text>
//         <View style={styles.row}>
//           {['1 year', '2 years', '3+ years'].map((exp) => (
//             <Chip
//               key={exp}
//               selected={selectedExp === exp}
//               onPress={() => setSelectedExp(exp)}
//               style={[styles.chip, selectedExp === exp && styles.selectedChip]}
//             >
//               {exp}
//             </Chip>
//           ))}
//         </View>

//         {/* GRID */}
//         <Text style={styles.section}>Availability</Text>
//         <View style={styles.gridContainer}>
//           {/* HEADER ROW */}
//           <View style={styles.gridRow}>
//             <View style={styles.timeCell} />
//             {days.map((day) => (
//               <Text key={day} style={styles.dayHeader}>
//                 {day}
//               </Text>
//             ))}
//           </View>

//           {/* GRID BODY */}
//           {times.map((time) => (
//             <View key={time} style={styles.gridRow}>
//               <Text style={styles.timeLabel}>{time}</Text>

//               {days.map((day) => {
//                 const key = `${day}-${time}`;
//                 const selected = grid[key];

//                 return (
//                   <View
//                     key={key}
//                     style={[styles.cell, selected && styles.selectedCell]}
//                     onTouchEnd={() => toggleCell(day, time)}
//                   />
//                 );
//               })}
//             </View>
//           ))}
//         </View>

//         {/* CITY */}
//         <TextInput
//           label="City"
//           value={city}
//           onChangeText={setCity}
//           mode="outlined"
//           style={styles.input}
//         />

//         {/* RATING */}
//         <Text style={styles.section}>Rating</Text>
//         <View style={styles.row}>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <Chip
//               key={star}
//               selected={selectedRating === star}
//               onPress={() => setSelectedRating(star)}
//               style={[styles.chip, selectedRating === star && styles.selectedChip]}
//             >
//               ⭐ {star}
//             </Chip>
//           ))}
//         </View>

//         {/* BUTTONS */}
//         <View style={styles.buttonRow}>
//           <Button mode="outlined" onPress={resetFilters} style={styles.resetBtn}>
//             Reset
//           </Button>

//           <Button mode="contained" onPress={applyFilters} style={styles.applyBtn}>
//             Apply Filters
//           </Button>
//         </View>

//         {/* RESULTS */}
//         {showResults && (
//           <>
//             <Text style={styles.section}>Babysitters</Text>

//             {babysitters.map((item) => (
//               <Card key={item.id} style={styles.card}>
//                 <Card.Content style={styles.cardContent}>
//                   <Avatar.Icon size={50} icon="account" />
//                   <View style={{ marginLeft: 10 }}>
//                     <Text style={styles.name}>{item.name}</Text>
//                     <Text>{item.exp}</Text>
//                     <Text>{item.price}</Text>
//                   </View>
//                 </Card.Content>

//                 <Card.Actions>
//                   <Button
//                     onPress={() =>
//                       navigation.navigate('babysitterprofile')
//                     }
//                   >
//                     View Profile
//                   </Button>
//                 </Card.Actions>
//               </Card>
//             ))}
//           </>
//         )}

//         <View style={{ height: 80 }} />
//       </ScrollView>
//       <View style={styles.bottomNav}>
      
//               <IconButton
//                 icon="home"
//                 iconColor={activeTab === 'home' ? '#fff' : '#555'}
//                 style={activeTab === 'home' ? styles.activeBtn : null}
//                 onPress={() => {
//                   setActiveTab('home');
//                   navigation.navigate('parentmain');
//                 }}
//               />
      
//               <IconButton
//                 icon="magnify"
//                 iconColor={activeTab === 'search' ? '#fff' : '#555'}
//                 style={activeTab === 'search' ? styles.activeBtn : null}
//                 onPress={() => {
//                   setActiveTab('search');
//                   navigation.navigate('searchbabysitter');
//                 }}
//               />
      
//               <IconButton
//                 icon="account"
//                 iconColor={activeTab === 'profile' ? '#fff' : '#555'}
//                 style={activeTab === 'profile' ? styles.activeBtn : null}
//                 onPress={() => {
//                   setActiveTab('profile');
//                   navigation.navigate('ParentProfileScreen');
//                 }}
//               />
      
//               <IconButton
//                 icon="dots-horizontal"
//                 iconColor={activeTab === 'more' ? '#fff' : '#555'}
//                 style={activeTab === 'more' ? styles.activeBtn : null}
//                 onPress={() => {
//                   setActiveTab('more');
//                   navigation.navigate('MoreScreen');
//                 }}
//               />
      
//             </View>
//     </LinearGradient>
//   );
// };

// export default SearchBabySitterScreen;

// // ---------------- STYLES ----------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },

//   avatar: {
//     backgroundColor: '#F8BBD0',
//   },

//   section: {
//     marginTop: 15,
//     marginBottom: 8,
//     fontWeight: '600',
//   },

//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   chip: {
//     margin: 4,
//     backgroundColor: '#FCE4EC',
//   },

//   selectedChip: {
//     backgroundColor: '#F8BBD0',
//   },

//   gridContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },

//   gridRow: {
//     flexDirection: 'row',
//   },

//   dayHeader: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     fontSize: 12,
//   },

//   timeCell: {
//     width: 50,
//   },

//   timeLabel: {
//     width: 50,
//     fontSize: 12,
//     textAlign: 'center',
//   },

//   cell: {
//     flex: 1,
//     height: 30,
//     borderWidth: 0.5,
//     borderColor: '#ddd',
//   },

//   selectedCell: {
//     backgroundColor: '#F48FB1',
//   },

//   input: {
//     marginTop: 10,
//     backgroundColor: 'white',
//   },

//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },

//   resetBtn: {
//     flex: 1,
//     marginRight: 5,
//   },

//   applyBtn: {
//     flex: 1,
//     marginLeft: 5,
//     backgroundColor: '#F48FB1',
//   },

//   card: {
//     marginTop: 10,
//     borderRadius: 12,
//   },

//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   name: {
//     fontWeight: 'bold',
//   },
// });




























// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
// import {
//   Text,
//   TextInput,
//   Button,
//   RadioButton,
//   Chip
// } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const SearchBabySitterScreen = () => {

//   const [city, setCity] = useState('');

//   // Availability Type
//   const [availabilityType, setAvailabilityType] = useState('oneDay');

//   // Dates
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const [showStartPicker, setShowStartPicker] = useState(false);
//   const [showEndPicker, setShowEndPicker] = useState(false);

//   // Days for Repeat
//   const [selectedDays, setSelectedDays] = useState([]);

//   const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

//   // Rating
//   const [rating, setRating] = useState(0);

//   // ---------------- FUNCTIONS ----------------

//   const toggleDay = (day) => {
//     if (selectedDays.includes(day)) {
//       setSelectedDays(selectedDays.filter(d => d !== day));
//     } else {
//       setSelectedDays([...selectedDays, day]);
//     }
//   };

//   const handleStartDate = (event, date) => {
//     setShowStartPicker(false);
//     if (date) {
//       setStartDate(date);

//       // 🔥 ONE DAY LOGIC
//       if (availabilityType === 'oneDay') {
//         setEndDate(date);
//       }
//     }
//   };

//   const handleEndDate = (event, date) => {
//     setShowEndPicker(false);
//     if (date) setEndDate(date);
//   };

//   const applyFilters = () => {
//     console.log({
//       city,
//       availabilityType,
//       startDate,
//       endDate,
//       selectedDays,
//       rating
//     });

//     // 🔥 API call yahan hogi
//   };

//   // ---------------- UI ----------------

//   return (
//     <ScrollView style={styles.container}>

//       <Text style={styles.title}>Find a Babysitter</Text>

//       {/* CITY */}
//       <Text style={styles.label}>City</Text>
//       <TextInput
//         mode="outlined"
//         value={city}
//         onChangeText={setCity}
//         placeholder="Enter city"
//         style={styles.input}
//       />

//       {/* AVAILABILITY TYPE */}
//       <Text style={styles.label}>Availability Type</Text>

//       <RadioButton.Group
//         onValueChange={setAvailabilityType}
//         value={availabilityType}
//       >
//         <View style={styles.row}>
//           <RadioButton value="oneDay" />
//           <Text>One Day</Text>

//           <RadioButton value="repeat" />
//           <Text>Repeat Days</Text>
//         </View>
//       </RadioButton.Group>

//       {/* DATES */}
//       <View style={styles.row}>
//         <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateBox}>
//           <Text>{startDate ? startDate.toDateString() : 'Start Date'}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => availabilityType === 'repeat' && setShowEndPicker(true)}
//           style={styles.dateBox}
//         >
//           <Text>{endDate ? endDate.toDateString() : 'End Date'}</Text>
//         </TouchableOpacity>
//       </View>

//       {showStartPicker && (
//         <DateTimePicker
//           value={startDate || new Date()}
//           mode="date"
//           onChange={handleStartDate}
//         />
//       )}

//       {showEndPicker && (
//         <DateTimePicker
//           value={endDate || new Date()}
//           mode="date"
//           onChange={handleEndDate}
//         />
//       )}

//       {/* REPEAT DAYS */}
//       {availabilityType === 'repeat' && (
//         <>
//           <Text style={styles.label}>Select Days</Text>
//           <View style={styles.rowWrap}>
//             {days.map((day) => (
//               <Chip
//                 key={day}
//                 selected={selectedDays.includes(day)}
//                 onPress={() => toggleDay(day)}
//                 style={styles.chip}
//               >
//                 {day}
//               </Chip>
//             ))}
//           </View>
//         </>
//       )}

//       {/* RATING */}
//       <Text style={styles.label}>Minimum Rating</Text>
//       <View style={styles.rowWrap}>
//         {[1,2,3,4,5].map((star) => (
//           <Chip
//             key={star}
//             selected={rating === star}
//             onPress={() => setRating(star)}
//             style={styles.chip}
//           >
//             ⭐ {star}
//           </Chip>
//         ))}
//       </View>

//       {/* BUTTON */}
//       <Button
//         mode="contained"
//         onPress={applyFilters}
//         style={styles.button}
//       >
//         Search
//       </Button>

//     </ScrollView>
//   );
// };

// export default SearchBabySitterScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#FFF3E0'
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10
//   },
//   label: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontWeight: '600'
//   },
//   input: {
//     backgroundColor: 'white'
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   rowWrap: {
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   },
//   chip: {
//     margin: 5
//   },
//   dateBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 10,
//     width: '48%',
//     backgroundColor: '#fff'
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#FF8A65'
//   }
// });

















// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
// import {
//   Text,
//   TextInput,
//   Button,
//   RadioButton,
//   Chip,
//   Card
// } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const SearchBabySitterScreen = () => {

//   // ---------------- STATES ----------------
//   const [city, setCity] = useState('');
//   const [availabilityType, setAvailabilityType] = useState('oneDay');

//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);

//   const [showStartPicker, setShowStartPicker] = useState(false);
//   const [showEndPicker, setShowEndPicker] = useState(false);

//   const [showStartTimePicker, setShowStartTimePicker] = useState(false);
//   const [showEndTimePicker, setShowEndTimePicker] = useState(false);

//   const [selectedDays, setSelectedDays] = useState([]);
//   const [rating, setRating] = useState(0);

//   const [results, setResults] = useState([]);

//   const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

//   // ---------------- DUMMY DATA ----------------
//   const dummyBabysitters = [
//     { id: 1, name: "Ayesha Khan", city: "Lahore", rating: 4, price: "500 PKR/hr" },
//     { id: 2, name: "Sara Ali", city: "Karachi", rating: 5, price: "700 PKR/hr" },
//     { id: 3, name: "Fatima Noor", city: "Lahore", rating: 3, price: "400 PKR/hr" }
//   ];

//   // ---------------- FUNCTIONS ----------------

//   const toggleDay = (day) => {
//     if (selectedDays.includes(day)) {
//       setSelectedDays(selectedDays.filter(d => d !== day));
//     } else {
//       setSelectedDays([...selectedDays, day]);
//     }
//   };

//   const handleStartDate = (event, date) => {
//     setShowStartPicker(false);
//     if (date) {
//       setStartDate(date);

//       // 🔥 One Day logic
//       if (availabilityType === 'oneDay') {
//         setEndDate(date);
//       }
//     }
//   };

//   const handleEndDate = (event, date) => {
//     setShowEndPicker(false);
//     if (date) setEndDate(date);
//   };

//   const applyFilters = () => {

//     let filtered = dummyBabysitters;

//     // 🔥 CITY FILTER
//     if (city) {
//       filtered = filtered.filter(
//         item => item.city.toLowerCase() === city.toLowerCase()
//       );
//     }

//     // 🔥 RATING FILTER
//     if (rating > 0) {
//       filtered = filtered.filter(
//         item => item.rating >= rating
//       );
//     }

//     setResults(filtered);
//   };

//   // ---------------- UI ----------------

//   return (
//     <ScrollView style={styles.container}>

//       <Text style={styles.title}>Find a Babysitter</Text>

//       {/* CITY */}
//       <Text style={styles.label}>City</Text>
//       <TextInput
//         mode="outlined"
//         value={city}
//         onChangeText={setCity}
//         placeholder="Enter city"
//         style={styles.input}
//       />

//       {/* AVAILABILITY TYPE */}
//       <Text style={styles.label}>Availability Type</Text>

//       <RadioButton.Group
//         onValueChange={setAvailabilityType}
//         value={availabilityType}
//       >
//         <View style={styles.row}>
//           <RadioButton value="oneDay" />
//           <Text>One Day</Text>

//           <RadioButton value="repeat" />
//           <Text>Repeat Days</Text>
//         </View>
//       </RadioButton.Group>

//       {/* DATES */}
//       <View style={styles.row}>
//         <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.box}>
//           <Text>{startDate ? startDate.toDateString() : 'Start Date'}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => availabilityType === 'repeat' && setShowEndPicker(true)}
//           style={styles.box}
//         >
//           <Text>{endDate ? endDate.toDateString() : 'End Date'}</Text>
//         </TouchableOpacity>
//       </View>

//       {showStartPicker && (
//         <DateTimePicker
//           value={startDate || new Date()}
//           mode="date"
//           onChange={handleStartDate}
//         />
//       )}

//       {showEndPicker && (
//         <DateTimePicker
//           value={endDate || new Date()}
//           mode="date"
//           onChange={handleEndDate}
//         />
//       )}

//       {/* TIME */}
//       <Text style={styles.label}>Start Time</Text>
//       <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={styles.box}>
//         <Text>{startTime ? startTime.toLocaleTimeString() : 'Select Start Time'}</Text>
//       </TouchableOpacity>

//       <Text style={styles.label}>End Time</Text>
//       <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={styles.box}>
//         <Text>{endTime ? endTime.toLocaleTimeString() : 'Select End Time'}</Text>
//       </TouchableOpacity>

//       {showStartTimePicker && (
//         <DateTimePicker
//           value={startTime || new Date()}
//           mode="time"
//           onChange={(e, time) => {
//             setShowStartTimePicker(false);
//             if (time) setStartTime(time);
//           }}
//         />
//       )}

//       {showEndTimePicker && (
//         <DateTimePicker
//           value={endTime || new Date()}
//           mode="time"
//           onChange={(e, time) => {
//             setShowEndTimePicker(false);
//             if (time) setEndTime(time);
//           }}
//         />
//       )}

//       {/* REPEAT DAYS */}
//       {availabilityType === 'repeat' && (
//         <>
//           <Text style={styles.label}>Select Days</Text>
//           <View style={styles.rowWrap}>
//             {days.map(day => (
//               <Chip
//                 key={day}
//                 selected={selectedDays.includes(day)}
//                 onPress={() => toggleDay(day)}
//                 style={styles.chip}
//               >
//                 {day}
//               </Chip>
//             ))}
//           </View>
//         </>
//       )}

//       {/* RATING */}
//       <Text style={styles.label}>Rating</Text>
//       <View style={styles.rowWrap}>
//         {[1,2,3,4,5].map(star => (
//           <Chip
//             key={star}
//             selected={rating === star}
//             onPress={() => setRating(star)}
//             style={styles.chip}
//           >
//             ⭐ {star}
//           </Chip>
//         ))}
//       </View>

//       {/* BUTTON */}
//       <Button mode="contained" onPress={applyFilters} style={styles.button}>
//         Search
//       </Button>

//       {/* RESULTS */}
//       {results.map(item => (
//         <Card key={item.id} style={styles.card}>
//           <Card.Content>
//             <Text style={{fontWeight:'bold'}}>{item.name}</Text>
//             <Text>{item.city}</Text>
//             <Text>⭐ {item.rating}</Text>
//             <Text>{item.price}</Text>
//           </Card.Content>
//         </Card>
//       ))}

//     </ScrollView>
//   );
// };

// export default SearchBabySitterScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#FFF3E0'
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold'
//   },
//   label: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontWeight: '600'
//   },
//   input: {
//     backgroundColor: 'white'
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   rowWrap: {
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   },
//   chip: {
//     margin: 5
//   },
//   box: {
//     borderWidth: 1,
//     padding: 12,
//     borderRadius: 8,
//     width: '48%',
//     backgroundColor: '#fff',
//     marginTop: 10
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#FF8A65'
//   },
//   card: {
//     marginTop: 10
//   }
// });










































import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {
  Text,
  Button,
  Card,
  Avatar,
  TextInput,
  RadioButton,
  Chip
} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

const SearchBabySitterScreen = () => {

  const navigation = useNavigation();

  // ---------------- STATE ----------------
  const [city, setCity] = useState('');

  const [availabilityType, setAvailabilityType] = useState('oneDay');

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const [selectedDays, setSelectedDays] = useState([]);

  const [rating, setRating] = useState(0);

  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // ---------------- FUNCTIONS ----------------

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toISOString().split('T')[0]; // yyyy-mm-dd
  };

  const formatTime = (time) => {
    if (!time) return '';
    return time.toTimeString().split(' ')[0]; // HH:mm:ss
  };

  // const applyFilters = async () => {

  //   // 🔥 One Day auto logic
  //   let finalEndDate = endDate;
  //   if (availabilityType === 'oneDay' && startDate) {
  //     finalEndDate = startDate;
  //     setEndDate(startDate);
  //   }

  //   try {

  //     const url =
  //       `http://192.168.100.16:5001/api/Auth/SearchBabysitters` +
  //       `?city=${encodeURIComponent(city)}` +
  //       `&availabilityType=${availabilityType}` +
  //       `&startDate=${formatDate(startDate)}` +
  //       `&endDate=${formatDate(finalEndDate)}` +
  //       `&days=${selectedDays.join(',')}` +
  //       `&startTime=${formatTime(startTime)}` +
  //       `&endTime=${formatTime(endTime)}` +
  //       `&rating=${rating}`;

  //     console.log("API:", url);

  //     const response = await fetch(url);

  //     if (response.status === 200) {
  //       const data = await response.json();
  //       setResults(data);
  //     } else {
  //       // 🔥 Dummy fallback
  //       setResults([
  //         {
  //           babysitter_id: 1,
  //           full_name: 'Ayesha Khan',
  //           experience: '3+ years',
  //           charges: '800/hr',
  //           city: 'Lahore'
  //         },
  //         {
  //           babysitter_id: 2,
  //           full_name: 'Sara Ali',
  //           experience: '2 years',
  //           charges: '600/hr',
  //           city: 'Lahore'
  //         }
  //       ]);
  //     }

  //     setShowResults(true);

  //   } catch (error) {
  //     console.log(error);

  //     // 🔥 fallback
  //     setResults([
  //       {
  //         babysitter_id: 1,
  //         full_name: 'Ayesha Khan',
  //         experience: '3+ years',
  //         charges: '800/hr'
  //       }
  //     ]);

  //     setShowResults(true);
  //   }
  // };





//   const applyFilters = async () => {

//   if (!city) {
//     alert("Please enter city");
//     return;
//   }

//   if (!startDate || !startTime || !endTime) {
//     alert("Please select date & time");
//     return;
//   }

//   // One Day logic
//   let finalEndDate = endDate;
//   if (availabilityType === 'oneDay' && startDate) {
//     finalEndDate = startDate;
//     setEndDate(startDate);
//   }

//   try {
//     setLoading(true);

//     const url =
//       `http://192.168.100.16:5001/api/Auth/SearchBabysitters` +
//       `?city=${encodeURIComponent(city)}` +
//       `&availabilityType=${availabilityType}` +
//       `&startDate=${formatDate(startDate)}` +
//       `&endDate=${formatDate(finalEndDate)}` +
//       `&days=${selectedDays.join(',')}` +
//       `&startTime=${formatTime(startTime)}` +
//       `&endTime=${formatTime(endTime)}` +
//       `&rating=${rating}`;

//     console.log("API URL:", url);

//     const response = await fetch(url);

//     console.log("Status:", response.status);

//     if (!response.ok) {
//       throw new Error("Server error");
//     }

//     const data = await response.json();

//     console.log("Response Data:", data);

//     // 🔥 Important: backend se jo aya wahi show karo
//     setResults(data);
//     setShowResults(true);

//   } catch (error) {
//     console.log("ERROR:", error);

//     alert("Something went wrong. Check API / network");

//     setResults([]); // ❌ no dummy
//     setShowResults(true);
//   } finally {
//     setLoading(false);
//   }
// };







// const applyFilters = async () => {
//   if (!city) {
//     alert("Please enter city");
//     return;
//   }

//   if (!startDate || !startTime || !endTime) {
//     alert("Please select date & time");
//     return;
//   }

//   try {
//     // 🔥 Loading state optional
//     // setLoading(true);

//     const url = `http://192.168.100.16:5001/api/Auth/SearchBabysitters?city=${encodeURIComponent(city)}&availabilityType=${availabilityType}&startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}&days=${selectedDays.join(',')}&startTime=${formatTime(startTime)}&endTime=${formatTime(endTime)}&rating=${rating}`;

//     console.log("API URL:", url);

//     const response = await fetch(url);

//     console.log("Status:", response.status);

//     // 🔥 IMPORTANT: Pehle check karo response ok hai ya nahi
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.log("Error response:", errorText);
//       throw new Error(`Server error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Response Data:", data);

//     // 🔥 Agar data array hai to set karo, nahi to empty array
//     if (Array.isArray(data)) {
//       setResults(data);
//     } else {
//       setResults([]);
//     }
//     setShowResults(true);

//   } catch (error) {
//     console.log("ERROR:", error);
//     alert("Something went wrong. Please check if backend is running.");
//     setResults([]);
//     setShowResults(true);
//   } finally {
//     // setLoading(false);
//   }
// };









const applyFilters = async () => {
  console.log("========== SEARCH STARTED ==========");
  
  // Validation
  if (!city) {
    alert("Please enter city");
    return;
  }

  if (!startDate || !startTime || !endTime) {
    alert("Please select date & time");
    return;
  }

  try {
    // Build URL
    let url = `http://10.176.43.18:5001/api/Auth/SearchBabysitters?`;
    url += `city=${encodeURIComponent(city)}`;
    url += `&availabilityType=${availabilityType}`;
    url += `&startDate=${formatDate(startDate)}`;
    
    if (availabilityType === 'repeat' && endDate) {
      url += `&endDate=${formatDate(endDate)}`;
    } else {
      url += `&endDate=${formatDate(startDate)}`;
    }
    
    url += `&days=${selectedDays.join(',')}`;
    url += `&startTime=${formatTime(startTime)}`;
    url += `&endTime=${formatTime(endTime)}`;
    url += `&rating=${rating}`;

    console.log("📡 API URL:", url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("📡 Response Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("❌ Error Response:", errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("✅ Response Data:", data);

    if (Array.isArray(data)) {
      setResults(data);
      setShowResults(true);
      if (data.length === 0) {
        alert("No babysitters found with these filters");
      }
    } else {
      console.log("⚠️ Data is not an array:", data);
      setResults([]);
      setShowResults(true);
      alert("Unexpected response format from server");
    }

  } catch (error) {
    console.log("🔴 CATCH ERROR:", error.message);
    console.log("🔴 Full Error:", error);
    alert(`Error: ${error.message}\n\nCheck if backend is running at 192.168.100.16:5001`);
    setResults([]);
    setShowResults(true);
  }

  console.log("========== SEARCH ENDED ==========");
};

  const resetFilters = () => {
    setCity('');
    setStartDate(null);
    setEndDate(null);
    setStartTime(null);
    setEndTime(null);
    setSelectedDays([]);
    setRating(0);
    setShowResults(false);
  };

  // ---------------- UI ----------------

  return (
    <LinearGradient colors={['#FDE4EC', '#FFF1F3']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Find a Babysitter</Text>

        {/* CITY */}
        <TextInput
          label="City"
          value={city}
          onChangeText={setCity}
          mode="outlined"
          style={styles.input}
        />

        {/* AVAILABILITY TYPE */}
        <Text style={styles.section}>Availability Type</Text>

        <RadioButton.Group
          onValueChange={setAvailabilityType}
          value={availabilityType}
        >
          <View style={styles.row}>
            <View style={styles.radio}>
              <RadioButton value="oneDay" />
              <Text>One Day</Text>
            </View>

            

            <View style={styles.radio}>
              <RadioButton value="repeat" />
              <Text>Repeat Days</Text>
            </View>
          </View>
        </RadioButton.Group>

        {/* START DATE */}
        <Text style={styles.section}>Start Date</Text>
        <TouchableOpacity onPress={() => setShowStartDate(true)} style={styles.box}>
          <Text>{startDate ? startDate.toDateString() : 'Select Start Date'}</Text>
        </TouchableOpacity>

        {showStartDate && (
          <DateTimePicker
            value={startDate || new Date()}
            mode="date"
            onChange={(e, d) => {
              setShowStartDate(false);
              if (d) setStartDate(d);
            }}
          />
        )}

        {/* END DATE (only repeat) */}
        {availabilityType === 'repeat' && (
          <>
            <Text style={styles.section}>End Date</Text>
            <TouchableOpacity onPress={() => setShowEndDate(true)} style={styles.box}>
              <Text>{endDate ? endDate.toDateString() : 'Select End Date'}</Text>
            </TouchableOpacity>

            {showEndDate && (
              <DateTimePicker
                value={endDate || new Date()}
                mode="date"
                onChange={(e, d) => {
                  setShowEndDate(false);
                  if (d) setEndDate(d);
                }}
              />
            )}
          </>
        )}

        {/* TIME */}
        <Text style={styles.section}>Start Time</Text>
        <TouchableOpacity onPress={() => setShowStartTime(true)} style={styles.box}>
          <Text>{startTime ? startTime.toLocaleTimeString() : 'Select Start Time'}</Text>
        </TouchableOpacity>

        {showStartTime && (
          <DateTimePicker
            value={startTime || new Date()}
            mode="time"
            onChange={(e, t) => {
              setShowStartTime(false);
              if (t) setStartTime(t);
            }}
          />
        )}

        <Text style={styles.section}>End Time</Text>
        <TouchableOpacity onPress={() => setShowEndTime(true)} style={styles.box}>
          <Text>{endTime ? endTime.toLocaleTimeString() : 'Select End Time'}</Text>
        </TouchableOpacity>

        {showEndTime && (
          <DateTimePicker
            value={endTime || new Date()}
            mode="time"
            onChange={(e, t) => {
              setShowEndTime(false);
              if (t) setEndTime(t);
            }}
          />
        )}

        {/* DAYS */}
        {availabilityType === 'repeat' && (
          <>
            <Text style={styles.section}>Select Days</Text>

            <View style={styles.row}>
              {days.map((day) => (
                <Chip
                  key={day}
                  selected={selectedDays.includes(day)}
                  onPress={() => toggleDay(day)}
                  style={[
                    styles.chip,
                    selectedDays.includes(day) && styles.selectedChip
                  ]}
                >
                  {day}
                </Chip>
              ))}
            </View>
          </>
        )}

        {/* RATING */}
        <Text style={styles.section}>Minimum Rating</Text>
        <View style={styles.row}>
          {[1,2,3,4,5].map((r) => (
            <Chip
              key={r}
              selected={rating === r}
              onPress={() => setRating(r)}
              style={[styles.chip, rating === r && styles.selectedChip]}
            >
              ⭐ {r}
            </Chip>
          ))}
        </View>

        {/* BUTTONS */}
        <View style={styles.btnRow}>
          <Button mode="outlined" onPress={resetFilters} style={styles.reset}>
            Reset
          </Button>

          <Button mode="contained" onPress={applyFilters} style={styles.apply}>
            Search
          </Button>
        </View>

        {/* RESULTS */}
        {/* {showResults && (
          <>
            <Text style={styles.section}>Available Sitters</Text>

            {results.map((item, index) => (
              <Card key={index} style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Avatar.Icon size={50} icon="account" />

                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.name}>{item.full_name}</Text>
                    <Text>{item.experience}</Text>
                    <Text>Rs. {item.charges}</Text>
                  </View>
                </Card.Content>

                <Card.Actions>
                  <Button
                    onPress={() =>
                      navigation.navigate('babysitterprofile', {
                        sitter: item
                      })
                    }
                  >
                    View Profile
                  </Button>
                </Card.Actions>
              </Card>
            ))}
          </>
        )} */}

        {showResults && (
  <>
    <Text style={styles.section}>Available Sitters</Text>

    {results.length === 0 ? (
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        No babysitters found
      </Text>
    ) : (
      results.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Icon size={50} icon="account" />

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>{item.full_name}</Text>
              <Text>{item.experience}</Text>
              <Text>Rs. {item.charges}</Text>
            </View>
          </Card.Content>

          <Card.Actions>
            <Button
              onPress={() =>
                navigation.navigate('babysitterprofile', {
                  sitter: item
                })
              }
            >
              View Profile
            </Button>
          </Card.Actions>
        </Card>
      ))
    )}
  </>
)}

        <View style={{ height: 80 }} />

      </ScrollView>
    </LinearGradient>
  );
};

export default SearchBabySitterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },

  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },

  section: { marginTop: 15, marginBottom: 5, fontWeight: '600' },

  input: { backgroundColor: 'white' },

  row: { flexDirection: 'row', flexWrap: 'wrap' },

  radio: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },

  chip: { margin: 4 },

  selectedChip: { backgroundColor: '#F8BBD0' },

  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'white'
  },

  btnRow: { flexDirection: 'row', marginTop: 15 },

  reset: { flex: 1, marginRight: 5 },

  apply: { flex: 1, marginLeft: 5, backgroundColor: '#F48FB1' },

  card: { marginTop: 10 },

  cardContent: { flexDirection: 'row', alignItems: 'center' },

  name: { fontWeight: 'bold' }
});

































// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
// import {
//   Text,
//   Button,
//   Card,
//   Avatar,
//   TextInput,
//   RadioButton,
//   Chip
// } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const SearchBabySitterScreen = () => {
//   const navigation = useNavigation();

//   const [city, setCity] = useState('');
//   const [availabilityType, setAvailabilityType] = useState('oneDay');

//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);

//   const [startTime, setStartTime] = useState(new Date());
//   const [endTime, setEndTime] = useState(new Date());

//   const [showStartDate, setShowStartDate] = useState(false);
//   const [showEndDate, setShowEndDate] = useState(false);
//   const [showStartTime, setShowStartTime] = useState(false);
//   const [showEndTime, setShowEndTime] = useState(false);

//   const [selectedDays, setSelectedDays] = useState([]);
//   const [selectedRating, setSelectedRating] = useState(0);

//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false); // 🔥 IMPORTANT

//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   // ✅ Dummy Data
//   const dummyBabysitters = [
//     { id: 1, name: 'Ayesha Khan', city: 'Lahore', price: 500 },
//     { id: 2, name: 'Sara Ali', city: 'Karachi', price: 700 },
//     { id: 3, name: 'Fatima Noor', city: 'Lahore', price: 600 },
//   ];

//   // 🔹 Toggle Days
//   const toggleDay = (day) => {
//     setSelectedDays(prev =>
//       prev.includes(day)
//         ? prev.filter(d => d !== day)
//         : [...prev, day]
//     );
//   };

//   // 🔹 Date
//   const onStartDateChange = (e, date) => {
//     setShowStartDate(false);
//     if (date) {
//       setStartDate(date);
//       if (availabilityType === 'oneDay') {
//         setEndDate(date);
//       }
//     }
//   };

//   const onEndDateChange = (e, date) => {
//     setShowEndDate(false);
//     if (date) setEndDate(date);
//   };

//   // 🔹 Time
//   const onStartTimeChange = (e, time) => {
//     setShowStartTime(false);
//     if (time) setStartTime(time);
//   };

//   const onEndTimeChange = (e, time) => {
//     setShowEndTime(false);
//     if (time) setEndTime(time);
//   };

//   // 🔥 FIXED SEARCH FUNCTION
//   const handleSearch = () => {
//     let filtered = dummyBabysitters;

//     // ✅ City filter only if user entered something
//     if (city.trim() !== '') {
//       filtered = dummyBabysitters.filter(item =>
//         item.city.toLowerCase().includes(city.toLowerCase())
//       );
//     }

//     setResults(filtered);
//     setShowResults(true); // 🔥 SHOW RESULTS
//   };

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <LinearGradient colors={['#FDE4EC', '#FFF']} style={styles.container}>
//       <ScrollView>

//         <Text style={styles.title}>Find Babysitter</Text>

//         {/* CITY */}
//         <TextInput
//           label="City"
//           value={city}
//           onChangeText={setCity}
//           mode="outlined"
//           style={styles.input}
//         />

//         {/* AVAILABILITY TYPE */}
//         <Text style={styles.section}>Availability Type</Text>

//         <RadioButton.Group
//           value={availabilityType}
//           onValueChange={(value) => {
//             setAvailabilityType(value);
//             if (value === 'oneDay') setEndDate(startDate);
//             else setEndDate(null);
//           }}
//         >
//           <View style={styles.row}>
//             <RadioButton value="oneDay" />
//             <Text>One Day</Text>

//             <RadioButton value="repeat" />
//             <Text>Repeat Days</Text>
//           </View>
//         </RadioButton.Group>

//         {/* DATE */}
//         <TouchableOpacity style={styles.box} onPress={() => setShowStartDate(true)}>
//           <Text>Start: {startDate.toDateString()}</Text>
//         </TouchableOpacity>

//         {showStartDate && (
//           <DateTimePicker value={startDate} mode="date" onChange={onStartDateChange} />
//         )}

//         <TouchableOpacity style={styles.box} onPress={() => setShowEndDate(true)}>
//           <Text>
//             End: {endDate ? endDate.toDateString() : 'Select End Date'}
//           </Text>
//         </TouchableOpacity>

//         {showEndDate && (
//           <DateTimePicker value={endDate || new Date()} mode="date" onChange={onEndDateChange} />
//         )}

//         {/* TIME */}
//         <TouchableOpacity style={styles.box} onPress={() => setShowStartTime(true)}>
//           <Text>Start Time: {formatTime(startTime)}</Text>
//         </TouchableOpacity>

//         {showStartTime && (
//           <DateTimePicker value={startTime} mode="time" onChange={onStartTimeChange} />
//         )}

//         <TouchableOpacity style={styles.box} onPress={() => setShowEndTime(true)}>
//           <Text>End Time: {formatTime(endTime)}</Text>
//         </TouchableOpacity>

//         {showEndTime && (
//           <DateTimePicker value={endTime} mode="time" onChange={onEndTimeChange} />
//         )}

//         {/* REPEAT DAYS */}
//         {availabilityType === 'repeat' && (
//           <>
//             <Text style={styles.section}>Select Days</Text>
//             <View style={styles.row}>
//               {days.map(day => (
//                 <Chip
//                   key={day}
//                   selected={selectedDays.includes(day)}
//                   onPress={() => toggleDay(day)}
//                   style={styles.chip}
//                 >
//                   {day}
//                 </Chip>
//               ))}
//             </View>
//           </>
//         )}

//         {/* RATING */}
//         <Text style={styles.section}>Rating</Text>
//         <View style={styles.row}>
//           {[1,2,3,4,5].map(star => (
//             <Chip
//               key={star}
//               selected={selectedRating === star}
//               onPress={() => setSelectedRating(star)}
//               style={styles.chip}
//             >
//               ⭐ {star}
//             </Chip>
//           ))}
//         </View>

//         {/* SEARCH */}
//         <Button mode="contained" onPress={handleSearch} style={styles.button}>
//           Search
//         </Button>

//         {/* 🔥 RESULTS */}
//         {showResults && (
//           <>
//             <Text style={styles.section}>Results</Text>

//             {results.length === 0 ? (
//               <Text style={{ textAlign: 'center', marginTop: 10 }}>
//                 No babysitters found
//               </Text>
//             ) : (
//               results.map(item => (
//                 <Card key={item.id} style={styles.card}>
//                   <Card.Content style={styles.cardContent}>
//                     <Avatar.Icon size={50} icon="account" />
//                     <View style={{ marginLeft: 10 }}>
//                       <Text style={styles.name}>{item.name}</Text>
//                       <Text>{item.city}</Text>
//                       <Text>Rs {item.price}/hr</Text>
//                     </View>
//                   </Card.Content>

//                   <Card.Actions>
//                     <Button
//                       onPress={() =>
//                         navigation.navigate('babysitterprofile', { sitter: item })
//                       }
//                     >
//                       View Profile
//                     </Button>
//                   </Card.Actions>
//                 </Card>
//               ))
//             )}
//           </>
//         )}

//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default SearchBabySitterScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 15 },
//   title: { fontSize: 22, fontWeight: 'bold' },
//   input: { marginVertical: 8, backgroundColor: '#fff' },
//   section: { marginTop: 10, fontWeight: 'bold' },
//   row: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' },
//   chip: { margin: 4 },
//   box: {
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 10
//   },
//   button: { marginTop: 15, backgroundColor: '#F48FB1' },
//   card: { marginTop: 10 },
//   cardContent: { flexDirection: 'row', alignItems: 'center' },
//   name: { fontWeight: 'bold' }
// });

















