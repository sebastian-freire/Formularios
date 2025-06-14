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
import useFetchData from "../../hooks/login/useFetchData";

export default function QuizSelector() {
  const router = useRouter();
  const { quiz, setQuiz, isLoading, quizFetch } = useFetchData();

  useEffect(() => {
    const fetchData = async () => {
      const data = await quizFetch();
      setQuiz(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => router.push("/results")}>
          <Text style={styles.link}>Resultados</Text>
        </TouchableOpacity>
      </View>

      {!isLoading && (
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
  header: {
    fontSize: 24,
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
  link: {
    color: "#5b8bd6",
    fontSize: 16,
    textDecorationLine: "underline",
    marginHorizontal: 8
  },
  listContent: {
    paddingBottom: 16
  }
});
