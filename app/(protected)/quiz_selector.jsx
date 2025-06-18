import React, { use, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import QuizSelectorCard from "../../components/quiz_selector_card";
import useFetchData from "../../hooks/fetch_quiz_selector";

export default function QuizSelector() {
  const router = useRouter();
  const { quiz, setQuiz, isLoading, setIsLoading, quizFetch } = useFetchData();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await quizFetch();
      setQuiz(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => router.push("/results_page")}
        >
          <Text style={styles.linkText}>Resultados</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#4e342e" />
      ) : (
        <FlatList
          data={quiz}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <QuizSelectorCard quiz={item} />}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fffbe7",
    paddingHorizontal: 16,
    paddingTop: 24
  },
  linksContainer: {
    alignItems: "center",
    marginBottom: 24
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
  listContent: {
    paddingBottom: 16
  }
});
