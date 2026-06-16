// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { TextInput, Button, RadioButton, Text } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen = () => {
//   const navigation = useNavigation();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('parent');

// //   const route = useRoute();
// // const initialRole = route.params?.role || 'parent';
// // const [role, setRole] = useState(initialRole);

//   const handleLogin = () => {   ye alag hai system
//     if (!email || !password) { 
//       alert('Please fill all fields');
//       return;
//     }

//     if (role === 'parent') {
//       navigation.navigate('ParentHome');
//     } else {
//       navigation.navigate('BabysitterHome');
//     }
//   };


// //   const handleLogin = () => {
// //   if (!email || !password) {
// //     alert('Please fill all fields');
// //     return;
// //   }

// //   const firstTime = true; // Replace with API/db check

// //   if (firstTime) {
// //     // Go to corresponding Signup
// //     if (role === 'parent') {
// //       navigation.navigate('ParentSignUpScreen', { role: 'parent' });
// //     } else {
// //       navigation.navigate('BabysitterSignUpScreen', { role: 'babysitter' });
// //     }
// //   } else {
// //    // Go to corresponding Home screen
// //     if (role === 'parent') {
// //       navigation.navigate('ParentHome');
// //     } else {
// //       navigation.navigate('BabysitterHome');
// //     }
// //   }
// // };

//   return (
//     <View style={styles.container}>
      
//       {/* Title */}
//       <Text style={styles.title}>Login</Text>

//       {/* Email Input */}
//       <TextInput
//         label="Email"
//         mode="outlined"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />

//       {/* Password Input */}
//       <TextInput
//         label="Password"
//         mode="outlined"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />

//       {/* Role Selection */}
//       <View style={styles.radioContainer}>
//         <Text style={styles.roleText}>Select Role:</Text>

//         <RadioButton.Group onValueChange={value => setRole(value)} value={role}>
//           <View style={styles.radioRow}>
//             <RadioButton value="parent" />
//             <Text>Parent</Text>
//           </View>

//           <View style={styles.radioRow}>
//             <RadioButton value="babysitter" />
//             <Text>Babysitter</Text>
//           </View>
//         </RadioButton.Group>
//       </View>

//       {/* Login Button */}
//       <Button
//         mode="contained"
//         onPress={handleLogin}
//         style={styles.button}
//         contentStyle={styles.buttonContent}
//       >
//         Login
//       </Button>

//       {/* Sign Up Link */}
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.signupText}>
//           Don't have an account? Sign Up
//         </Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FDF6F0', // soft pastel
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   radioContainer: {
//     marginVertical: 15,
//   },
//   roleText: {
//     fontSize: 16,
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   radioRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   button: {
//     marginTop: 20,
//     borderRadius: 20,
//   },
//   buttonContent: {
//     paddingVertical: 8,
//   },
//   signupText: {
//     marginTop: 20,
//     textAlign: 'center',
//     color: '#6C9BCF',
//   },
// });




// YE WALA CODE HAI JO FIRSTLY USE KAR RAHA THA

// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { TextInput, Button, RadioButton, Text } from 'react-native-paper';
// import { useNavigation, useRoute } from '@react-navigation/native';
//  import AsyncStorage from '@react-native-async-storage/async-storage';
//   await AsyncStorage.setItem("user", JSON.stringify(data.user));


// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//     // const [userType, setUserType] = React.useState('parent'); 

//   // agar ChooseRole se role aaya hai, usse preselect karenge
//   const initialRole = route.params?.role || 'parent';
//   const [role, setRole] = useState(initialRole);
//     const [userType, setuserType] = useState('');

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
 





//   const handleLogin=()=>{
//     if(!email||!password)
//     {
//       Alert('please fill all fields');
//       return;
//     }
//     if (email === "parent@gmail.com" && password === "123") {
//   navigation.replace('parentmain');
// } 
// else if (email === "sitter@gmail.com" && password === "123") {
//   navigation.replace('BabySitterDashBoard');
// } 
// else {
//   alert("Invalid credentials");
// }


//  if (!email || !password) {
//      alert('Please fill all fields');
//      return;
//    }

//    try {
//     const response = await fetch(
//        `http://192.168.100.16/api/login?email=${email}&password=${password}`
//      );

//      if (response.status === 200) {
//       const data = await response.json();

//        // ✅ Parent login success
//        if(data.role==="parent"){
//        navigation.replace('parentmain');
//        }
//        else if(data.role==='babysitter')
//        {
//          navigation.replace('BabySitterDashBoard');
//        }

//      } else if (response.status === 204) {
//        alert("Invalid credentials");
//      } else {
//        alert("Server error");
//      }

//    } catch (error) {
//      console.log(error);
//      alert("Network error");
//    }



  //};



  // }




// const handleLogin = async () => {
//   if (!email || !password) {
//     alert('Please fill all fields');
//     return;
//   }

//   try {
//     // const response = await fetch(
//     //   `http://192.168.100.16:5001/api/login?email=${email}&password=${password}`
//     // );
//     const response = await fetch(
//   `http://192.168.100.16:5001/api/Auth/Login?email=${email}&password=${password}`
// );

//     if (response.status === 200) {
//       const data = await response.json();

//       if (data.role === "parent") {
//         navigation.replace('parentmain');
//       } else if (data.role === "babysitter") {
//         navigation.replace('BabySitterDashBoard');
//       }

//     } else if (response.status === 204) {
//       alert("Invalid credentials");
//     } else {
//       alert("Server error");
//     }

//   } catch (error) {
//     console.log(error);
//     alert("Network error");
//   }
// };





// YE WALA FUNCTION USE KRNA HAI IS CODE MEIN

// const handleLogin = async () => {
//   if (!email || !password) {
//     alert('Please fill all fields');
//     return;
//   }

//   console.log("Login pressed");

//   try {
//     const url = `http://192.168.100.16:5001/api/Auth/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&role=${role}`;

//     console.log("URL:", url);

//     const response = await fetch(url);

//     console.log("Status:", response.status);

//     if (response.status === 200) {
//       const data = await response.json();

//       //ye line new add ki
//       if (!data || !data.role) {
//     alert("Invalid response from server");
//     return;
//   }
//    await AsyncStorage.setItem("user", JSON.stringify(data.user));




//       console.log("DATA:", data);

//       if (data.role === "parent" ) {
         
//         navigation.replace('parentmain'); //,{user:data.user}
        
        
//       } else if (data.role === "babysitter") {
//         navigation.replace('BabySitterDashBoard');
//       }

//     } else if (response.status === 204) {
//       alert("Invalid credentials");
//     } else {
//       alert("Server error");
//     }

//   } catch (error) {
//     console.log("ERROR:", error);
//     alert("Network error");
//   }
// };











 

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         label="Email"
//         mode="outlined"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />

      

//       <TextInput
//         label="Password"
//         mode="outlined"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />

//       <View style={styles.radioContainer}>
//         <Text style={styles.roleText}>Select Role:</Text>
//         <RadioButton.Group onValueChange={value => setRole(value)} value={role}>
//           <View style={styles.radioRow}>
//             <RadioButton value="parent" />
//             <Text>Parent</Text>
//           </View>

//           <View style={styles.radioRow}>
//             <RadioButton value="babysitter" />
//             <Text>Babysitter</Text>
//           </View>
//         </RadioButton.Group>
//       </View>

//       {/* <Button
//         mode="contained"
//         onPress={handleLogin}
//         style={styles.button}
//         contentStyle={styles.buttonContent}
//       >
//         Login
//       </Button>  */}


//       <Button
//   mode="contained"
//   onPress={() => handleLogin()} // <--- Is tarah likhein
//   style={styles.button}
// >
//   Login
// </Button>


 
//       {/* <Button
//   mode="contained"
//   onPress={() => {

//     // yahan normally API call hoti hai (login check)
//     // abhi testing ke liye direct use kar rahe hain

//     if (userType === 'parent') {
//       navigation.replace('parentmain');
//     } else {
//       navigation.replace('BabysitterMainScreen');
//     }

//   }}
// >
//   Login
// </Button>  */}

//       <TouchableOpacity onPress={() => navigation.navigate('SignUp', { role })}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FDF6F0', justifyContent: 'center', padding: 20 },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
//   input: { marginBottom: 15, borderRadius: 10 },
//   radioContainer: { marginVertical: 15 },
//   roleText: { fontSize: 16, marginBottom: 8, fontWeight: '500' },
//   radioRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
//   button: { marginTop: 20, borderRadius: 20 },
//   buttonContent: { paddingVertical: 8 },
//   signupText: { marginTop: 20, textAlign: 'center', color: '#6C9BCF' },
// });







// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { TextInput, Button, RadioButton, Text } from 'react-native-paper';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // 🔥 UNCOMMENT THIS

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
  
//   const initialRole = route.params?.role || 'parent';
//   const [role, setRole] = useState(initialRole);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleLogin = async () => {
//     if (!email || !password) {
//       alert('Please fill all fields');
//       return;
//     }

//     console.log("Login pressed");

//     try {
//       const url = `http://192.168.100.16:5001/api/Auth/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&role=${role}`;
//       console.log("URL:", url);

//       const response = await fetch(url);
//       console.log("Status:", response.status);

//       if (response.status === 200) {
//         const data = await response.json();
// if (!data || !data.role) {
//     alert("Invalid response from server");
//     return;
//   }
//  await AsyncStorage.setItem("user", JSON.stringify(data.user));
//         // console.log("DATA:", data);

//         console.log("User Saved:",data.user)

//         if (data.role === "parent") {
//           // 🔥 Save parent data to AsyncStorage
//           // await AsyncStorage.setItem("user", JSON.stringify(data.user));
//           console.log("Parent data saved:", data.user);
//           navigation.replace('parentmain');
          
//         } else if (data.role === "babysitter") {
//           // 🔥 Save babysitter data to AsyncStorage
//           // await AsyncStorage.setItem("user", JSON.stringify(data.user));
//           console.log("Babysitter data saved:", data.user);
//           navigation.replace('BabySitterDashBoard');
//         }

//       } else if (response.status === 204) {
//         alert("Invalid credentials");
//       } else {
//         alert("Server error");
//       }

//     } catch (error) {
//       console.log("ERROR:", error);
//       alert("Network error");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         label="Email"
//         mode="outlined"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />

//       <TextInput
//         label="Password"
//         mode="outlined"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />

//       <View style={styles.radioContainer}>
//         <Text style={styles.roleText}>Select Role:</Text>
//         <RadioButton.Group onValueChange={value => setRole(value)} value={role}>
//           <View style={styles.radioRow}>
//             <RadioButton value="parent" />
//             <Text>Parent</Text>
//           </View>

//           <View style={styles.radioRow}>
//             <RadioButton value="babysitter" />
//             <Text>Babysitter</Text>
//           </View>
//         </RadioButton.Group>
//       </View>

//       <Button
//         mode="contained"
//         onPress={() => handleLogin()}
//         style={styles.button}
//       >
//         Login
//       </Button>

//       <TouchableOpacity onPress={() => navigation.navigate('SignUp', { role })}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FDF6F0', justifyContent: 'center', padding: 20 },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
//   input: { marginBottom: 15, borderRadius: 10 },
//   radioContainer: { marginVertical: 15 },
//   roleText: { fontSize: 16, marginBottom: 8, fontWeight: '500' },
//   radioRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
//   button: { marginTop: 20, borderRadius: 20 },
//   buttonContent: { paddingVertical: 8 },
//   signupText: { marginTop: 20, textAlign: 'center', color: '#6C9BCF' },
// });




















import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, RadioButton, Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const initialRole = route.params?.role || 'parent';

  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    console.log("Login pressed");

    try {
      const url = `http://10.176.43.18:5001/api/Auth/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&role=${role}`;

      console.log("URL:", url);

      const response = await fetch(url);
      console.log("Status:", response.status);

      if (response.status === 200) {
        const data = await response.json();

        // 🔴 Strong validation
        if (!data || !data.role || !data.user) {
          alert("Invalid response from server");
          return;
        }

        console.log("User Data:", data.user);

        // ✅ Save ONLY ONCE
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        console.log("User saved in AsyncStorage");

        // ✅ Navigation based on role
        if (data.role === "parent") {
          navigation.replace('parentmain');
        } else if (data.role === "babysitter") {
          navigation.replace('BabySitterDashBoard');
        } else {
          alert("Unknown role received");
        }

      } else if (response.status === 204) {
        alert("Invalid credentials");
      } else {
        const text = await response.text();
        console.log("Server Error:", text);
        alert("Server error");
      }

    } catch (error) {
      console.log("ERROR:", error);
      alert("Network error: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <View style={styles.radioContainer}>
        <Text style={styles.roleText}>Select Role:</Text>

        <RadioButton.Group onValueChange={setRole} value={role}>
          <View style={styles.radioRow}>
            <RadioButton value="parent" />
            <Text>Parent</Text>
          </View>

          <View style={styles.radioRow}>
            <RadioButton value="babysitter" />
            <Text>Babysitter</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
      >
        Login
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp', { role })}>
        <Text style={styles.signupText}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333'
  },
  input: {
    marginBottom: 15,
    borderRadius: 10
  },
  radioContainer: {
    marginVertical: 15
  },
  roleText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500'
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  button: {
    marginTop: 20,
    borderRadius: 20
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#6C9BCF'
  }
});