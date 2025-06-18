//Aca selecciono la respuesta de la pregunta.
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import useFetchQuestion from "../../../../../hooks/fetch_question";
import { useEffect } from "react";
import QuestionCard from "../../../../../components/question_card";

function QuestionPage() {
  const { id_question } = useLocalSearchParams();
  const router = useRouter();
  const questionId = parseInt(id_question);

  const { question, setQuestion, isLoading, setIsLoading, questionsFetch } =
    useFetchQuestion(questionId);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await questionsFetch();
      console.log(data);
      setQuestion(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregunta {question?.id}:</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4e342e" />
      ) : (
        <View style={styles.questionCard}>
          <QuestionCard question={question} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbe7",
    padding: 16
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4e342e",
    marginBottom: 16,
    textAlign: "center"
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    gap: 16
  },
  questionCard: {
    backgroundColor: "#fffdfa",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ffb347",
    elevation: 1,
    marginTop: 16
  },
  questionText: {
    fontSize: 16,
    color: "#4e342e"
  }
});

export default QuestionPage;
