import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

export default function QuizSelectorCard({ quiz }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push(`/quiz/${quiz.id}`)}
      >
        <Text style={styles.title}>{quiz.name}</Text>
        <Text style={styles.description}>{quiz.description}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
    alignItems: "center"
  },
  card: {
    width: "90%",
    backgroundColor: "#fffdfa",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ffb347",
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4e342e",
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: "#4e342e"
  }
});
