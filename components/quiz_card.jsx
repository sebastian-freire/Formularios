import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

function QuizCard({ id_quiz, question }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push(`/quiz/${id_quiz}/question/${question.id}`)}
      >
        <Text style={styles.questionText}>{question.question_name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    backgroundColor: "#fffdfa",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ffb347",
    elevation: 1
  },
  questionText: {
    fontSize: 16,
    color: "#4e342e"
  }
});

export default QuizCard;
