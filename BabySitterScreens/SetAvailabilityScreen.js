// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   Text,
//   Card,
//   Button,
//   Chip,
//   IconButton,
// } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import LinearGradient from 'react-native-linear-gradient';

// const SetAvailabilityScreen = ({ navigation }) => {
//   const [slots, setSlots] = useState([
//     { start: null, end: null },
//   ]);
//   const [showPicker, setShowPicker] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [pickerType, setPickerType] = useState('start');

//   const formatTime = (date) => {
//     if (!date) return 'Select Time';
//     return date.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   const handleTimeChange = (event, selectedDate) => {
//     setShowPicker(false);
//     if (!selectedDate) return;

//     let updatedSlots = [...slots];
//     updatedSlots[currentIndex][pickerType] = selectedDate;
//     setSlots(updatedSlots);
//   };

//   const openPicker = (index, type) => {
//     setCurrentIndex(index);
//     setPickerType(type);
//     setShowPicker(true);
//   };

//   const addSlot = () => {
//     if (slots.length >= 4) return;
//     setSlots([...slots, { start: null, end: null }]);
//   };

//   const removeSlot = (index) => {
//     let updated = slots.filter((_, i) => i !== index);
//     setSlots(updated);
//   };

//   const validateSlots = () => {
//     for (let slot of slots) {
//       if (!slot.start || !slot.end) return false;
//       if (slot.start >= slot.end) return false;
//     }
//     return true;
//   };

//   const handleSave = () => {
//     if (!validateSlots()) {
//       alert('Please select valid time slots');
//       return;
//     }

//     console.log('Selected Slots:', slots);
//   };

//   return (
//     <LinearGradient
//       colors={['#fde1e8', '#fce4ec', '#fff']}
//       style={styles.container}
//     >
//       <ScrollView showsVerticalScrollIndicator={false}>
        
//         {/* Header */}
//         <View style={styles.header}>
//           <IconButton
//             icon="arrow-left"
//             size={24}
//             onPress={() => navigation.goBack()}
//           />
//           <View>
//             <Text style={styles.title}>Set Availability</Text>
//             <Text style={styles.subtitle}>
//               Select your available time slots
//             </Text>
//           </View>
//         </View>

//         {/* Card */}
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.cardTitle}>Your Availability</Text>
//             <Text style={styles.cardSubtitle}>
//               Select one or more time slots
//             </Text>

//             {/* Time Slots */}
//             {slots.map((slot, index) => (
//               <View key={index} style={styles.slotRow}>
                
//                 <TouchableOpacity
//                   style={styles.timeBox}
//                   onPress={() => openPicker(index, 'start')}
//                 >
//                   <Text>{formatTime(slot.start)}</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.timeBox}
//                   onPress={() => openPicker(index, 'end')}
//                 >
//                   <Text>{formatTime(slot.end)}</Text>
//                 </TouchableOpacity>

//                 {slots.length > 1 && (
//                   <IconButton
//                     icon="close"
//                     size={20}
//                     onPress={() => removeSlot(index)}
//                   />
//                 )}
//               </View>
//             ))}

//             {/* Add Slot */}
//             <Button
//               mode="outlined"
//               onPress={addSlot}
//               style={styles.addBtn}
//               labelStyle={{ color: '#ff6f91' }}
//             >
//               + Add Time Slot
//             </Button>
//           </Card.Content>
//         </Card>

//         {/* Preview */}
//         <View style={styles.previewContainer}>
//           {slots.map((slot, index) => {
//             if (!slot.start || !slot.end) return null;
//             return (
//               <Chip key={index} style={styles.chip}>
//                 {formatTime(slot.start)} - {formatTime(slot.end)}
//               </Chip>
//             );
//           })}
//         </View>

//         {/* Save Button */}
//         <LinearGradient
//           colors={['#ff9a9e', '#fecfef']}
//           style={styles.saveBtn}
//         >
//           <Button
//             mode="contained"
//             onPress={handleSave}
//             style={{ backgroundColor: 'transparent' }}
//             labelStyle={{ color: '#fff' }}
//           >
//             Save Availability
//           </Button>
//         </LinearGradient>

//       </ScrollView>

//       {/* Time Picker */}
//       {showPicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="time"
//           is24Hour={false}
//           display="default"
//           onChange={handleTimeChange}
//         />
//       )}
//     </LinearGradient>
//   );
// };

// export default SetAvailabilityScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   subtitle: {
//     fontSize: 13,
//     color: '#777',
//   },

//   card: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },

//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   cardSubtitle: {
//     fontSize: 12,
//     color: '#888',
//     marginBottom: 10,
//   },

//   slotRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   timeBox: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//     padding: 12,
//     borderRadius: 12,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },

//   addBtn: {
//     marginTop: 10,
//     borderColor: '#ff6f91',
//     borderRadius: 10,
//   },

//   previewContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 15,
//   },

//   chip: {
//     margin: 5,
//     backgroundColor: '#ffe4ec',
//   },

//   saveBtn: {
//     marginTop: 20,
//     borderRadius: 25,
//     overflow: 'hidden',
//   },
// });


import React, { useState } from 'react';
import { View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Text, Card, Button, IconButton,TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
 import AsyncStorage from '@react-native-async-storage/async-storage'

const SetAvailabilityScreen = ({ navigation }) => {

  const [grid, setGrid] = useState({});

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const times = ['8-10', '10-12', '12-2', '2-4', '4-6'];

  const[city,setCity]=useState('');

  // toggle cell
  const toggleCell = (day, time) => {
    const key = `${day}-${time}`;
    setGrid((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // const handleSave = () => {
  //   // selected slots extract
  //   const selected = Object.keys(grid).filter((key) => grid[key]);

  //   console.log("Babysitter Availability:", selected);
  // };





// const handleSave = async () => {
//   const selected = Object.keys(grid).filter(key => grid[key]);

//   const slots = selected.map(key => {
//     const [day, time] = key.split('-');

//     let start, end;

//     if (time === '8-10') { start = "08:00:00"; end = "10:00:00"; }
//     if (time === '10-12') { start = "10:00:00"; end = "12:00:00"; }
//     if (time === '12-2') { start = "12:00:00"; end = "14:00:00"; }
//     if (time === '2-4') { start = "14:00:00"; end = "16:00:00"; }
//     if (time === '4-6') { start = "16:00:00"; end = "18:00:00"; }

//     return {
//       day: day,
//       start_time: start,
//       end_time: end
//     };
//   });

//   try {
//     const response = await fetch(
//       "http://192.168.100.16:5001/api/Auth/SetAvailability",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           babysitter_id: 1, // 🔥 dynamic karo baad mein
//           slots: slots
//         })
//       }
//     );

//     const data = await response.json();

//     alert("Availability Saved");
//     console.log(data);

//   } catch (error) {
//     console.log(error);
//   }
// };





// const handleSave = async () => {
//   const userData = await AsyncStorage.getItem('user');


//   if (!userData) {
//   alert("User not found. Please login again.");
//   navigation.navigate('Login');
//   return;
// }


//   const user = JSON.parse(userData);
//   // const babysitter_id = user.babysitter_id;


//   // Ye line baad mein add ki

//   const babysitter_id = user?.babysitter_id || user?.user?.babysitter_id;

//   // 🔥 Debug ke liye (optional)
//   console.log("UserData:", userData);
//   console.log("Babysitter ID:", babysitter_id);

//   // 🔥 Agar ID nahi mili to return karo
//   if (!babysitter_id) {
//     alert("User not found. Please login again.");
//     navigation.navigate('Login');
//     return;
//   }


//   const selected = Object.keys(grid).filter(key => grid[key]);

//   if (selected.length === 0) {
//     alert("Please select at least one time slot");
//     return;
//   }

//   if (!city) {
//     alert("Please enter your city");
//     return;
//   }

//   const slots = selected.map(key => {
//     const [day, time] = key.split('-');
//     let start, end;

//     if (time === '8-10') { start = "08:00:00"; end = "10:00:00"; }
//     else if (time === '10-12') { start = "10:00:00"; end = "12:00:00"; }
//     else if (time === '12-2') { start = "12:00:00"; end = "14:00:00"; }
//     else if (time === '2-4') { start = "14:00:00"; end = "16:00:00"; }
//     else if (time === '4-6') { start = "16:00:00"; end = "18:00:00"; }

//     return {
//       day: day,
//       start_time: start,
//       end_time: end
//     };
//   });

//   try {
//     // 🔥 Get logged in babysitter ID from AsyncStorage
//     // const userData = await AsyncStorage.getItem('user');
//     // const user = JSON.parse(userData);
//     // const babysitter_id = user.babysitter_id || user.user?.babysitter_id;

//     const response = await fetch(
//       "http://192.168.100.16:5001/api/Auth/SetAvailability",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           babysitter_id: babysitter_id,  // 🔥 Dynamic ID
//           city: city,                    // 🔥 City bhi bhejo
//           slots: slots
//         })
//       }
//     );

//     // 🔥 YAHAN IMPORTANT: response use karo error check ke liye
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(errorText || "Something went wrong");
//     }

//     // const data = await response.json();
    
//    // ye new add kia 
//     let data = null;

// if (response.headers.get("content-type")?.includes("application/json")) {
//   data = await response.json();
// } else {
//   const text = await response.text();
//   console.log("Non JSON response:", text);
// }

//     // 🔥 Success
//     alert(data.message || "Availability Saved Successfully ✅");
//     console.log("Response Data:", data);
    
//     // 🔥 Option: Navigate back ya reset grid
//     // navigation.goBack();

//   } catch (error) {
//     console.log("Error:", error);
//     console.log("STACK:", error?.stack);

//     // alert("Failed to save availability: " + error.message);
//     alert("Failed to save availability: " + (error.message || "Unknown error"));
//   }
// };






const handleSave = async () => {
// ye new add kia 
  console.log("GRID:", grid);
console.log("SELECTED:", selected);
  // 🔥 Day mapping (Short to Full)
  const dayMap = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday"
  };

  const userData = await AsyncStorage.getItem('user');

  if (!userData) {
    alert("User not found. Please login again.");
    navigation.navigate('Login');
    return;
  }

  const user = JSON.parse(userData);
  const babysitter_id = user?.babysitter_id || user?.user?.babysitter_id;

  console.log("UserData:", userData);
  console.log("Babysitter ID:", babysitter_id);

  if (!babysitter_id) {
    alert("User not found. Please login again.");
    navigation.navigate('Login');
    return;
  }

  const selected = Object.keys(grid).filter(key => grid[key]);

  if (selected.length === 0) {
    alert("Please select at least one time slot");
    return;
  }

  if (!city) {
    alert("Please enter your city");
    return;
  }

  // 🔥 Slots ko sahi format mein convert karo
  // const slots = selected.map(key => {
  //   const parts = key.split('-');

  //   if (parts.length !== 2) {
  //     console.log("Invalid key:", key);
  //     return null;
  //   }

  //   const dayShort = parts[0];
  //   const time = parts[1];

  //   let start = "";
  //   let end = "";

  //   if (time === '8-10') { start = "08:00:00"; end = "10:00:00"; }
  //   else if (time === '10-12') { start = "10:00:00"; end = "12:00:00"; }
  //   else if (time === '12-2') { start = "12:00:00"; end = "14:00:00"; }
  //   else if (time === '2-4') { start = "14:00:00"; end = "16:00:00"; }
  //   else if (time === '4-6') { start = "16:00:00"; end = "18:00:00"; }

  //   if (!start || !end) {
  //     console.log("Invalid time slot:", key);
  //     return null;
  //   }

  //   return {
  //     day: dayMap[dayShort],  // 🔥 "Mon" → "Monday"
  //     start_time: start,
  //     end_time: end
  //   };
  // }).filter(item => item !== null);






// ye slots ka new code add kia
  const slots = selected.map(key => {
  const parts = key.split('-');

  if (parts.length < 3) {
    console.log("Invalid key:", key);
    return null;
  }

  const dayShort = parts[0];
  const startHour = parts[1];
  const endHour = parts[2];

  return {
    day: dayMap[dayShort],
    start_time: `${startHour.padStart(2, '0')}:00:00`,
    end_time: `${endHour.padStart(2, '0')}:00:00`
  };
}).filter(item => item !== null);

  // 🔥 Debugging: Check karo kya bhej rahe ho
  const finalData = {
    babysitter_id: babysitter_id,
    city: city,
    slots: slots
  };
  console.log("FINAL DATA TO SEND:", JSON.stringify(finalData, null, 2));

  if (slots.length === 0) {
    alert("No valid slots selected");
    return;
  }

  try {
    const response = await fetch(
      "http://10.176.43.18:5001/api/Auth/SetAvailability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalData)
      }
    );

    console.log("Response Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Error Response:", errorText);
      throw new Error(errorText || "Something went wrong");
    }

    let data = null;
    if (response.headers.get("content-type")?.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.log("Non JSON response:", text);
    }

    alert(data?.message || "Availability Saved Successfully ✅");
    console.log("Response Data:", data);

  } catch (error) {
    console.log("Error:", error);
    console.log("STACK:", error?.stack);
    alert("Failed to save availability: " + (error.message || "Unknown error"));
  }
};



  return (
    <LinearGradient
      colors={['#FDE4EC', '#FCE4EC', '#FFF1F3']}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

        <TextInput 
         label="City *"
         value={city}
         onChangeText={setCity}
         mode="outlined"
         style={styles.input}
         placeholder="e.g., Rawalpindi, Islamabad"
         />

        {/* HEADER */}
        <View style={styles.header}>
          <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
          <View>
            <Text style={styles.title}>Set Availability</Text>
            <Text style={styles.subtitle}>
              Select your available time slots
            </Text>
          </View>
        </View>

        {/* CARD */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Your Availability</Text>
            <Text style={styles.cardSubtitle}>
              Tap to select available slots
            </Text>

            {/* GRID */}
            <View style={styles.gridContainer}>

              {/* HEADER ROW */}
              <View style={styles.gridRow}>
                <View style={styles.timeCell} />
                {days.map((day) => (
                  <Text key={day} style={styles.dayHeader}>
                    {day}
                  </Text>
                ))}
              </View>

              {/* BODY */}
              {times.map((time) => (
                <View key={time} style={styles.gridRow}>
                  <Text style={styles.timeLabel}>{time}</Text>

                  {days.map((day) => {
                    const key = `${day}-${time}`;
                    const selected = grid[key];

                    return (
                      <View
                         key={key}
                         style={[
                           styles.cell,
                           selected && styles.selectedCell,
                         ]}
                         onTouchEnd={() => toggleCell(day, time)}
                         />
                         

                   
                      
                    );
                  })}
                </View>
                

              ))}
            </View>

          </Card.Content>
        </Card>

        {/* SAVE BUTTON */}
        <Button
          mode="contained"
          onPress={handleSave}
          style={styles.saveBtn}
          labelStyle={{ color: '#fff' }}
        >
          Save Availability
        </Button>


      </ScrollView>
      {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('BabySitterDashBoard')}>
          <Text style={styles.tab} >Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('JobRequestsScreen')}
        >
          <Text style={styles.tab}>Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('setavailabilityscreen')}
        >
          <Text style={styles.activeTab}>Availability</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.tab}>More</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>
  );
};

export default SetAvailabilityScreen;

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  subtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },

  /* CARD */
  card: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#444',
  },

  cardSubtitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },

  /* GRID CONTAINER */
  gridContainer: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 6,
  },

  /* ROW */
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  /* DAY HEADER */
  dayHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    color: '#888',
    fontWeight: '600',
  },

  timeCell: {
    width: 55,
  },

  /* TIME LABEL */
  timeLabel: {
    width: 55,
    fontSize: 11,
    textAlign: 'center',
    color: '#666',
    fontWeight: '500',
  },

  /* GRID CELL */
  cell: {
    flex: 1,
    height: 38,
    marginHorizontal: 2,
    borderRadius: 10,
    backgroundColor: '#FDE4EC', // soft pink base
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* SELECTED CELL */
  selectedCell: {
    backgroundColor: '#F48FB1', // darker pink
    elevation: 2,
    shadowColor: '#F48FB1',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  /* SAVE BUTTON */
  saveBtn: {
    marginTop: 25,
    borderRadius: 30,
    paddingVertical: 6,
    backgroundColor: '#F48FB1',
    elevation: 3,
  },
  
  tab: {
    color: '#888',
    fontSize: 13,
  },

  activeTab: {
    color: '#e91e63',
    fontWeight: 'bold',
    fontSize: 13,
  },
   bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#FFF7F0',
    marginTop: 10,
  },


});