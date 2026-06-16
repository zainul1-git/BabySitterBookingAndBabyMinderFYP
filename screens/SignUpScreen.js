// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, TouchableOpacity,View } from 'react-native';
// import { TextInput, Button, Text ,RadioButton} from 'react-native-paper';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import DateTimePicker from '@react-native-community/datetimepicker'

// const SignUpScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const role = route.params?.role || 'parent';

//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [experience, setExperience] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [gender, setGender] = useState('male');
//   const [cnic, setCnic] = useState();
//   const[city,setCity]=useState();

//    const[residential,setResidential]=useState();

//    const[charges,setCharges]=useState();
//   const [minAge, setMinAge] = useState('');
//  const [maxAge, setMaxAge] = useState('');

//    const [dob, setDob] = useState(null);
//    const [showPicker, setShowPicker] = useState(false);
//    const[hidePassword,setHidePassword]=useState(true);
//    const[hideConfirmPassword,setHideConfirmPassword]=useState(true);
//     const[address,setAddress]=useState('');

  



//   const handleRegister = () => {
//     // yahan backend API call aayega
//     if (role === 'parent') navigation.navigate('ParentMainScreen');
//     else navigation.navigate('BabysitterHome');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>{role === 'parent' ? 'Parent Sign Up' : 'Babysitter Sign Up'}</Text>

//       <TextInput label="Full Name" value={fullName} onChangeText={setFullName} mode="outlined" style={styles.input} />
//       <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} />
//       <TextInput label="Phone Number" value={phone} onChangeText={setPhone} mode="outlined" style={styles.input} />
//        <TextInput label="Address" value={address} onChangeText={setAddress} mode="outlined" style={styles.input} />
// {/* 
//       {role === 'babysitter' && (
//          <TextInput label="Experience (years)" 
//         value={experience}
//          onChangeText={setExperience} 
//          mode="outlined" style={styles.input} />

//       )}
      
       
//           <Text style={{ marginBottom: 5, marginTop: 10, fontWeight: '500'}}>Gender</Text>

// <RadioButton.Group
//   onValueChange={value => setGender(value)}
//   value={gender}
// >
//   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    
//     <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
//       <RadioButton value="male" />
//       <Text>Male</Text>
//     </View>

//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <RadioButton value="female" />
//       <Text>Female</Text>
//     </View>

//   </View>
// </RadioButton.Group> */}


// {role === 'babysitter' && (
//   <>
//     <TextInput 
//       label="Experience (years)" 
//       value={experience}
//       onChangeText={setExperience} 
//       mode="outlined" 
//       style={styles.input} 
//     />

//     {/* Gender */}
//     <Text style={{ marginBottom: 5, marginTop: 10, fontWeight: '500'}}>
//       Gender
//     </Text>

//     <RadioButton.Group
//       onValueChange={value => setGender(value)}
//       value={gender}
//     >
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
//           <RadioButton value="male" />
//           <Text>Male</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <RadioButton value="female" />
//           <Text>Female</Text>
//         </View>

//       </View>
//     </RadioButton.Group>

//       <TextInput
//       label="Cnic"
//       value={cnic}
//       onChangeText={setCnic}
//       keyboardType="numeric"
//       mode="outlined"
//       style={styles.input}
//     />
//        <TextInput
//       label="City"
//       value={city}
//       onChangeText={setCity}
//       // keyboardType="numeric"
//       mode="outlined"
//       style={styles.input}
//     />

//       <TextInput
//       label="Residential Address"
//       value={residential}
//       onChangeText={setResidential}
//       // keyboardType="numeric"
//       mode="outlined"
//       style={styles.input}
//     />

//        <TextInput
//       label="Charges Pkr/Hour"
//       value={charges}
//       onChangeText={setCharges}
//       // keyboardType="numeric"
//       mode="outlined"
//       style={styles.input}
//     />


//      <Text style={{ marginBottom: 5, marginTop: 10, fontWeight: '500' }}>
//       Date of Birth
//     </Text>

//     <TouchableOpacity
//       onPress={() => setShowPicker(true)}
//       style={{
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 8,
//         padding: 15,
//         marginBottom: 15,
//         backgroundColor: '#FFF7F0'
//       }}
//     >
//       <Text>
//         {dob ? dob.toDateString() : 'Select Date of Birth'}
//       </Text>
//     </TouchableOpacity>

//     {showPicker && (
//       <DateTimePicker
//         value={dob || new Date()}
//         mode="date"
//         display="default"
//         maximumDate={new Date()}
//         onChange={(event, selectedDate) => {
//           setShowPicker(false);
//           if (selectedDate) setDob(selectedDate);
//         }}
//       />
//     )}

//     <Text style={{ marginBottom: 5, marginTop: 10, fontWeight: '500' }}>
//   Preferred Child Age
// </Text>

// <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

//   <TextInput
//     label="Min Age"
//     value={minAge}
//     onChangeText={setMinAge}
//     keyboardType="numeric"
//     mode="outlined"
//     style={[styles.input, { flex: 1, marginRight: 5 }]}
//   />

//   <TextInput
//     label="Max Age"
//     value={maxAge}
//     onChangeText={setMaxAge}
//     keyboardType="numeric"
//     mode="outlined"
//     style={[styles.input, { flex: 1, marginLeft: 5 }]}
//   />

// </View>


//   </>
// )}

//       <TextInput
//   label="Password"
//   value={password}
//   onChangeText={setPassword}
//   secureTextEntry={hidePassword}
//   mode="outlined"
//   style={styles.input}
//   right={
//     <TextInput.Icon
//       icon={hidePassword ? "eye-off" : "eye"}
//       onPress={() => setHidePassword(!hidePassword)}
//     />
//   }
// />
//      <TextInput
//   label="Confirm Password"
//   value={confirmPassword}
//   onChangeText={setConfirmPassword}
//   secureTextEntry={hideConfirmPassword}
//   mode="outlined"
//   style={styles.input}
//   right={
//     <TextInput.Icon
//       icon={hideConfirmPassword ? "eye-off" : "eye"}
//       onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
//     />
//   }
// />

//       <Button mode="contained" onPress={handleRegister} style={styles.button}>
//         Register As Sitter
//       </Button>

//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default SignUpScreen;

// const styles = StyleSheet.create({
//   container: { flexGrow: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FDF6F0' },
//   title: { fontSize: 28, fontWeight: '600', marginBottom: 20, textAlign: 'center', color: '#FF8A65',marginTop:10,fontWeight:'bold' },
//   input: { marginBottom: 15, backgroundColor: '#FFF7F0' },
//   button: { marginTop: 10, borderRadius: 12, backgroundColor: '#FF8A65' },
//   loginText: { marginTop: 15, color: '#FF8A65', textDecorationLine: 'underline', textAlign: 'center' },
// });





import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { TextInput, Button, Text, RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const role = route.params?.role || 'parent';

  // 🔹 Common States
   const [cnic1, setCnic1] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
 
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  // 🔹 Babysitter States
  const [experience, setExperience] = useState('');
  const[age,setAge]=useState('');
  const [gender, setGender] = useState('male');
  const [cnic, setCnic] = useState('');
  const [city, setCity] = useState('');
  const [residential, setResidential] = useState('');
  const [charges, setCharges] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const [dob, setDob] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  // 🔹 Image Picker
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7, includeBase64:true}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  // const handleRegister = () => {
  //   if (role === 'parent') navigation.navigate('ParentMainScreen');
  //   else navigation.navigate('BabysitterHome');
  // };


const handleRegister = async () => {

  if (!fullName || !email || !password || !address) {
    alert("Please fill required fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {

    let url = "";
    let data = {};

    // 🔹 Parent Signup
    if (role === "parent") {
      url = "http://10.176.43.18:5001/api/Auth/CreateParent";

      data = {
        full_name: fullName,
        email: email,
        password: password,
        phone_no: phone,
        address: address,
        cnic: cnic1,
        picture: profileImage || ""
      };
    }

    // 🔹 Babysitter Signup
    else {
      url = "http://10.176.43.18:5001/api/Auth/CreateBabySitter";

      data = {
        full_name: fullName,
        email: email,
        password: password,
        phone_no: phone,
        cnic: cnic,
        gender: gender,
        experience: experience,
        age: age,
        city: city,
        address: residential,
        min_child_age: minAge,
        max_child_age: maxAge,
        charges: charges,
       date_of_birth: dob ? dob.toISOString() : null,
        picture: profileImage || ""
      };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      alert("Signup Successful ✅");

      // 🔥 navigate to login
      navigation.navigate("Login");
    } 
    else {
      const errorText = await response.text();
      console.log(errorText);
      alert("Signup Failed ");
    }

  } catch (error) {
    console.log(error);
    alert("Network error ");
  }
};




  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>
        {role === 'parent' ? 'Parent Sign Up' : 'Babysitter Sign Up'}
      </Text>

      {/* 🔥 Profile Image */}
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.image} />
            ) : (
              <Text style={{ color: '#999' }}>Upload Photo</Text>
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.imageText}>Add Profile Picture</Text>
      </View>

      {/* 🔹 Common Fields */}
      
      <TextInput label="Full Name" value={fullName} onChangeText={setFullName} mode="outlined" style={styles.input} />
      <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} />
      <TextInput label="Phone Number" value={phone} onChangeText={setPhone} mode="outlined" keyboardType='Numeric' style={styles.input} />
      <TextInput label="Address" value={address} onChangeText={setAddress} mode="outlined" style={styles.input} />
      {role==='parent'&&(
         <TextInput label="CNIC" value={cnic1} onChangeText={setCnic1} mode="outlined"  keyboardType='Numeric' style={styles.input} />
      )}
     
      {/* 🔹 Babysitter Section */}
      {role === 'babysitter' && (
        <>
          <TextInput label="Experience (years)" value={experience} onChangeText={setExperience} mode="outlined" style={styles.input} />

          {/* Gender */}
          <Text style={styles.sectionLabel}>Gender</Text>
          <RadioButton.Group onValueChange={setGender} value={gender}>
            <View style={styles.row}>
              <View style={styles.radioItem}>
                <RadioButton value="male" />
                <Text>Male</Text>
              </View>
              <View style={styles.radioItem}>
                <RadioButton value="female" />
                <Text>Female</Text>
              </View>
            </View>
          </RadioButton.Group>

          <TextInput label="CNIC" value={cnic} onChangeText={setCnic} mode="outlined" style={styles.input} />
          <TextInput label="City" value={city} onChangeText={setCity} mode="outlined" style={styles.input} />
           <TextInput label="Age" value={age} onChangeText={setAge} mode="outlined" keyboardType='Numeric' style={styles.input} />
          <TextInput label="Residential Address" value={residential} onChangeText={setResidential} mode="outlined" style={styles.input} />
          <TextInput label="Charges PKR/Hour" value={charges} onChangeText={setCharges} keyboardType="numeric" mode="outlined" style={styles.input} />

          {/* DOB */}
          <Text style={styles.sectionLabel}>Date of Birth</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dobBox}>
            <Text>{dob ? dob.toDateString() : 'Select Date of Birth'}</Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={dob || new Date()}
              mode="date"
              maximumDate={new Date()}
              onChange={(e, selectedDate) => {
                setShowPicker(false);
                if (selectedDate) setDob(selectedDate);
              }}
            />
          )}

          {/* Age Range */}
          <Text style={styles.sectionLabel}>Preferred Child Age</Text>
          <View style={styles.row}>
            <TextInput label="Min Age" value={minAge} onChangeText={setMinAge} keyboardType="numeric" mode="outlined" style={[styles.input, styles.half]} />
            <TextInput label="Max Age" value={maxAge} onChangeText={setMaxAge} keyboardType="numeric" mode="outlined" style={[styles.input, styles.half]} />
          </View>
        </>
      )}

      {/* 🔹 Password */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePassword}
        mode="outlined"
        style={styles.input}
        right={<TextInput.Icon icon={hidePassword ? 'eye-off' : 'eye'} onPress={() => setHidePassword(!hidePassword)} />}
      />

      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={hideConfirmPassword}
        mode="outlined"
        style={styles.input}
        right={<TextInput.Icon icon={hideConfirmPassword ? 'eye-off' : 'eye'} onPress={() => setHideConfirmPassword(!hideConfirmPassword)} />}
      />

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FDF6F0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF8A65',
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#FFF7F0',
  },
  button: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: '#FF8A65',
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#FF8A65',
  },

  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF7F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD6BA',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageText: {
    marginTop: 5,
    color: '#FF8A65',
  },

  sectionLabel: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  half: {
    flex: 1,
    marginHorizontal: 5,
  },

  dobBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#FFF7F0',
  },
});