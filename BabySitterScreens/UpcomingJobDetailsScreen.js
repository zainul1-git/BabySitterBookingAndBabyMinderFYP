import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const UpcomingJobDetailsScreen = ({ navigation, route }) => {
  // Example job data (replace with props/API)
  const job = {
    parentName: "Sara Khan",
    childName: "Ali Khan",
    date: "2026-04-10",
    time: "10:00 AM - 2:00 PM",
    location: "F-10, Islamabad"
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Upcoming Job Details</Title>
          <Paragraph>Parent: {job.parentName}</Paragraph>
          <Paragraph>Child: {job.childName}</Paragraph>
          <Paragraph>Date: {job.date}</Paragraph>
          <Paragraph>Time: {job.time}</Paragraph>
          <Paragraph>Location: {job.location}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => alert("Job Accepted")} style={styles.button}>
            Accept Job
          </Button>
          <Button mode="outlined" onPress={() => alert("Job Rejected")} style={styles.button}>
            Reject Job
          </Button>
        </Card.Actions>
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
  actions: {
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default UpcomingJobDetailsScreen;