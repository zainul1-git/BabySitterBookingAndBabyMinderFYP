import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Card, Button, Avatar } from 'react-native-paper';
import { LinearGradient } from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import { Menu } from 'react-native-paper';

const EditBabySitterProfileScreen = ({ navigation }) => {

  const [image, setImage] = useState('https://via.placeholder.com/150');

  const [menuVisible, setMenuVisible] = useState(false);
  const [childAge, setChildAge] = useState('Toddlers');

  const [form, setForm] = useState({
    fullName: 'Ayesha Khan',
    cnic: '',
    dob: '',
    gender: '',
    title: '',
    charges: '',
    city: '',
    address: '',
    phone: '',
    summary: '',
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <LinearGradient
      colors={['#fde1e8', '#fce4ec', '#f8bbd0']}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Profile Image */}
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Avatar.Image size={100} source={{ uri: image }} />
            
            <Button
              mode="text"
              onPress={pickImage}
              style={{ marginTop: 10 }}
              textColor="#ff6f61"
            >
              Upload Photo
            </Button>
          </Card.Content>
        </Card>

        {/* Personal Information */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Personal Information</Text>

            <TextInput
              label="Full Name"
              value={form.fullName}
              onChangeText={(val) => handleChange('fullName', val)}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="CNIC / ID Number"
              value={form.cnic}
              onChangeText={(val) => handleChange('cnic', val)}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Date of Birth"
              value={form.dob}
              onChangeText={(val) => handleChange('dob', val)}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Gender"
              value={form.gender}
              onChangeText={(val) => handleChange('gender', val)}
              style={styles.input}
              mode="outlined"
            />
          </Card.Content>
        </Card>

        {/* Professional Experience */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Professional Experience</Text>

            <TextInput
              label="Professional Title"
              value={form.title}
              onChangeText={(val) => handleChange('title', val)}
              style={styles.input}
              mode="outlined"
            />

            {/* Dropdown */}
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                  <TextInput
                    label="Preferred Child Age"
                    value={childAge}
                    style={styles.input}
                    mode="outlined"
                    editable={false}
                    right={<TextInput.Icon icon="menu-down" />}
                  />
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => { setChildAge('Infants'); setMenuVisible(false); }} title="Infants" />
              <Menu.Item onPress={() => { setChildAge('Toddlers'); setMenuVisible(false); }} title="Toddlers" />
              <Menu.Item onPress={() => { setChildAge('Kids'); setMenuVisible(false); }} title="Kids" />
            </Menu>

            <TextInput
              label="Charges per hour (PKR)"
              value={form.charges}
              onChangeText={(val) => handleChange('charges', val)}
              style={styles.input}
              keyboardType="numeric"
              mode="outlined"
            />
          </Card.Content>
        </Card>

        {/* Location */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Location</Text>

            <TextInput
              label="City"
              value={form.city}
              onChangeText={(val) => handleChange('city', val)}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Full Address"
              value={form.address}
              onChangeText={(val) => handleChange('address', val)}
              style={styles.input}
              mode="outlined"
            />
          </Card.Content>
        </Card>

        {/* Contact */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Contact</Text>

            <TextInput
              label="Phone Number"
              value={form.phone}
              onChangeText={(val) => handleChange('phone', val)}
              style={styles.input}
              keyboardType="phone-pad"
              mode="outlined"
            />
          </Card.Content>
        </Card>

        {/* Experience Summary */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Experience Summary</Text>

            <TextInput
              label="Write about your experience"
              value={form.summary}
              onChangeText={(val) => handleChange('summary', val)}
              style={styles.input}
              mode="outlined"
              multiline
              numberOfLines={4}
            />
          </Card.Content>
        </Card>

        {/* Update Button */}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{ color: '#fff' }}
          onPress={() => navigation.goBack()}
        >
          Update Profile
        </Button>

        <View style={{ height: 80 }} />
      </ScrollView>
    </LinearGradient>
  );
};

export default EditBabySitterProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },

  button: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#ff6f61',
    borderRadius: 25,
    paddingVertical: 6,
  },
});