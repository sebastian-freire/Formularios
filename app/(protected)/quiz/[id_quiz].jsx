import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import QuizCard from "../../../components/quiz_card";
import useFetchQuiz from "../../../hooks/fetch_quiz";

export default function QuizPage() {
  const { id_quiz } = useLocalSearchParams();
  const quizId = parseInt(id_quiz);
  const router = useRouter();

  const {
    quiz,
    setQuiz,
    quizFetch,
    questions,
    setQuestions,
    questionsFetch,
    isLoading,
    setIsLoading
  } = useFetchQuiz(quizId);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await quizFetch();
      const questionsData = await questionsFetch();
      setQuiz(data);
      setQuestions(questionsData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{quiz.name}</Text>
      <Text style={styles.subtitle}>
        Estas viendo las preguntas del quiz: {quizId}
      </Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => router.push(`/quiz/${quizId}/create_question`)}
        >
          <Text style={styles.linkText}>Agregar preguntas al quiz</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#4e342e" />
      ) : (
        <View style={styles.questionsContainer}>
          {questions.map((question, idx) => (
            <QuizCard key={idx} id_quiz={id_quiz} question={question} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fffbe7",
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4e342e",
    marginBottom: 8,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: "#4e342e",
    marginBottom: 16,
    textAlign: "center"
  },
  linksContainer: {
    alignItems: "center",
    margin: 10
  },
  link: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 8,
    elevation: 2
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold"
  },
  questionsContainer: {
    marginTop: 16
  }
});
