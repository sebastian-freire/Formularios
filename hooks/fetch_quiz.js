import { useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

export default function useFetchQuiz(quizId) {
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const URL_ENV = process.env.EXPO_PUBLIC_API_URL;

  const quizFetch = async () => {
    try {
      const URL = `${URL_ENV}/Quizes/${quizId}`;
      const res = await fetch(URL);
      if (!res.ok) {
        Alert.alert("Error", "No se encontró el quiz.", [
          { text: "OK", onPress: () => router.replace("/quiz_selector") }
        ]);
        return;
      }
      const json = await res.json();
      return json;
    } catch (e) {
      Alert.alert("Error", "No se pudo cargar el quiz.");
    }
  };

  const questionsFetch = async () => {
    try {
      const URL = `${URL_ENV}/Quizes_questions/${quizId}`;
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Error al traer la información");
      const json = await res.json();
      return json.questions;
    } catch (e) {
      Alert.alert("Error", "No se pudieron cargar las preguntas.", [
        { text: "OK", onPress: () => router.replace("/quiz_selector") }
      ]);
    }
  };

  return {
    quiz,
    setQuiz,
    quizFetch,
    questions,
    setQuestions,
    questionsFetch,
    isLoading,
    setIsLoading
  };
}
