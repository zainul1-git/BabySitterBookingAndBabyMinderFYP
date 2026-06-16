import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph, Button, Text } from "react-native-paper";
import { Rating } from "react-native-ratings";

const JobHistoryDetailsScreen = ({ route }) => {
  // Example job history data
  const history = {
    parentName: "Ayesha Malik",
    childName: "Hassan Malik",
    date: "2026-03-20",
    timeDuration: "4h 30m",
    totalEarnings: 2500,
    rating: 4.5,
    feedback: "Very caring and punctual babysitter.",
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Job History Details</Title>
          <Paragraph>Parent: {history.parentName}</Paragraph>
          <Paragraph>Child: {history.childName}</Paragraph>
          <Paragraph>Date: {history.date}</Paragraph>
          <Paragraph>Time Duration: {history.timeDuration}</Paragraph>
          <Paragraph>Total Earnings: PKR {history.totalEarnings}</Paragraph>

          <View style={styles.ratingContainer}>
            <Text style={{ marginRight: 8 }}>Rating:</Text>
            <Rating
              type="star"
              startingValue={history.rating}
              imageSize={24}
              readonly
            />
          </View>

          {history.feedback ? (
            <Paragraph style={{ marginTop: 10 }}>Feedback: {history.feedback}</Paragraph>
          ) : null}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FDEEF4", // Soft pastel pink
  },
  card: {
    marginVertical: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    elevation: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default JobHistoryDetailsScreen;