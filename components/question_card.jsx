import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultipleQuestion from "./multiple_question";
import TestQuestion from "./text_question";

function QuestionCard({ question }) {
  const multiple = question.type === "multiple_choice";

  return (
    <View>
      <Text style={styles.title}>{question.question_name}</Text>
      {multiple ? (
        <MultipleQuestion
          id_entrante={question.id}
          options={question.options}
        />
      ) : (
        <TestQuestion id_entrante={question.id} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4e342e",
    marginBottom: 12
  }
});

export default QuestionCard;
