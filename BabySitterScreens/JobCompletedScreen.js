import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const JobCompletedScreen = ({ navigation }) => {

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((i) => (
      <TouchableOpacity key={i} onPress={() => setRating(i)}>
        <Icon
          name={i <= rating ? 'star' : 'star-outline'}
          size={30}
          color="#FFD700"
          style={{ marginHorizontal: 3 }}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <LinearGradient
      colors={['#fde1e8', '#fce4ec', '#f8bbd0']}
      style={styles.container}
    >
      <View style={styles.centerContainer}>

        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>

            {/* Success Icon */}
            <Icon name="check-circle" size={70} color="#4CAF50" />

            {/* Title */}
            <Text style={styles.title}>Job Completed</Text>

            {/* Earnings Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Earnings</Text>
              <Text style={styles.value}>PKR 2000</Text>
              <Text style={styles.subText}>Duration: 4h 15m</Text>
            </View>

            {/* Job Details */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Job Details</Text>

              <Text style={styles.label}>Parent Name</Text>
              <Text style={styles.valueSmall}>Ali Ahmed</Text>

              <Text style={styles.label}>Child</Text>
              <Text style={styles.valueSmall}>Sara (4 yrs)</Text>

              <Text style={styles.label}>Start Time</Text>
              <Text style={styles.valueSmall}>10:00 AM</Text>

              <Text style={styles.label}>End Time</Text>
              <Text style={styles.valueSmall}>2:15 PM</Text>
            </View>

            {/* Rating Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Rate Your Experience</Text>

              <View style={styles.starsRow}>
                {renderStars()}
              </View>

              <TextInput
                mode="outlined"
                placeholder="Write your feedback about the job..."
                value={feedback}
                onChangeText={setFeedback}
                multiline
                numberOfLines={3}
                style={styles.input}
              />
            </View>

            {/* Submit Button */}
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={{ color: '#fff' }}
              onPress={() => navigation.navigate('BabySitterDashBoard')}
            >
              Submit Review
            </Button>

          </Card.Content>
        </Card>

      </View>
    </LinearGradient>
  );
};

export default JobCompletedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  card: {
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  section: {
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  label: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },

  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  valueSmall: {
    fontSize: 15,
    fontWeight: '500',
  },

  subText: {
    fontSize: 13,
    color: '#777',
  },

  starsRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  input: {
    backgroundColor: '#fff',
    marginTop: 5,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#ff6f61',
    borderRadius: 25,
    paddingVertical: 6,
    width: '100%',
  },
});