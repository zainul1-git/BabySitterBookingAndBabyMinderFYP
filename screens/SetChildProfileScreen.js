import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';

import {
  Text,
  TextInput,
  Button,
  Avatar,
  Card
} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {DropDown} from 'react-native-paper-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';

const SetChildProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [gender, setGender] = useState('');
  const [showGenderDropDown, setShowGenderDropDown] = useState(false);

  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [notes, setNotes] = useState('');

  const [guardianName, setGuardianName] = useState('');

  const [relation, setRelation] = useState('');
  const [showRelationDropDown, setShowRelationDropDown] = useState(false);

  const [contact, setContact] = useState('');

  const [image, setImage] = useState(null);

  // Dropdown Options
  const genderList = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];

  const relationList = [
    { label: 'Father', value: 'Father' },
    { label: 'Mother', value: 'Mother' },
    { label: 'Guardian', value: 'Guardian' }
  ];

  // Image Picker
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets) {
        setImage(response.assets[0].uri);
      }
    });
  };



  const saveChildProfile = async () => {
  try {
    const childData = {
      parent_id: 1,
      name: name,
      age: parseInt(age),
      date_of_birth: dob.toISOString(),
      gender: gender,
      guardian_details: guardianName,
      guardian_contact: contact,
      relation: relation,
      picture: ""
    };

    const response = await fetch(
      'http://10.14.91.18/api/YourControllerName/CreateChildProfileParentSide',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(childData)
      }
    );

    const result = await response.json();

    if (result === true) {
      // 👉 DATA PASS KARO NEXT SCREEN KO
      navigation.navigate('ViewChildScreen', { child: childData });
    } else {
      alert('Failed ❌');
    }

  } catch (error) {
    console.log(error);
    alert('Error ❌');
  }
};

  return (
    <LinearGradient colors={['#FDE4EC', '#E3F2FD']} style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Set Child Profile</Text>

        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={100}
            source={
              image
                ? { uri: image }
                : { uri: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' }
            }
          />

          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Icon name="camera-alt" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* FORM */}
        <Card style={styles.card}>
          <Card.Content>

            <TextInput
              label="Child Name"
              mode="outlined"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            {/* AGE + GENDER */}
            <View style={styles.row}>
              <TextInput
                label="Age"
                mode="outlined"
                value={age}
                onChangeText={setAge}
                style={[styles.input, styles.halfInput]}
              />

              <View style={styles.halfInput}>
                {/* <DropDown
                  label="Gender"
                  mode="outlined"
                  visible={showGenderDropDown}
                  showDropDown={() => setShowGenderDropDown(true)}
                  onDismiss={() => setShowGenderDropDown(false)}
                  value={gender}
                  setValue={setGender}
                  list={genderList}
                />  */}
              </View>
            </View>

            {/* DOB */}
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                label="Date of Birth"
                mode="outlined"
                value={dob.toDateString()}
                editable={false}
                style={styles.input}
              />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={dob}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(Platform.OS === 'ios');
                  if (selectedDate) setDob(selectedDate);
                }}
              />
            )}

            {/* NOTES */}
            <TextInput
              label="Special Notes"
              mode="outlined"
              multiline
              numberOfLines={4}
              value={notes}
              onChangeText={setNotes}
              placeholder="Allergies, favorite games, bedtime routine..."
              style={styles.input}
            />

            {/* GUARDIAN */}
            <Text style={styles.sectionTitle}>Guardian Details</Text>

            <TextInput
              label="Guardian Name"
              mode="outlined"
              value={guardianName}
              onChangeText={setGuardianName}
              style={styles.input}
            />

             {/* <DropDown
              label="Relation"
              mode="outlined"
              visible={showRelationDropDown}
              showDropDown={() => setShowRelationDropDown(true)}
              onDismiss={() => setShowRelationDropDown(false)}
              value={relation}
              setValue={setRelation}
              list={relationList}
            />  */}

            <TextInput
              label="Contact Number"
              mode="outlined"
              keyboardType="phone-pad"
              value={contact}
              onChangeText={setContact}
              style={styles.input}
            />

          </Card.Content>
        </Card>

        {/* SAVE */}
        {/* <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('ViewChildScreen')}
        >
          Save Profile
        </Button> */}

        <Button
  mode="contained"
  style={styles.button}
  onPress={saveChildProfile}
>
  Save Profile
</Button>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('parentmain')}>
          <Icon name="home" size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="child-care" size={26} color="#FF7043" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ParentProfileScreen')}>
          <Icon name="person" size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="more-horiz" size={26} />
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

export default SetChildProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 40,
    marginBottom: 10
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  avatarContainer: {
    alignItems: 'center',
    marginVertical: 15
  },

  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 130,
    backgroundColor: '#FF7043',
    padding: 6,
    borderRadius: 20
  },

  card: {
    margin: 15,
    borderRadius: 15,
    elevation: 3
  },

  input: {
    marginBottom: 12
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  halfInput: {
    width: '48%'
  },

  sectionTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16
  },

  button: {
    margin: 15,
    borderRadius: 25,
    backgroundColor: '#FF7043'
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10
  }
});