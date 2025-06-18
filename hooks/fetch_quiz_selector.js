import { useState } from "react";

export default function useFetchData() {
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = process.env.EXPO_PUBLIC_API_URL;

  //Traer todos los quizzes del json
  const quizFetch = async () => {
    try {
      const res = await fetch(URL + "/Quizes");
      if (!res.ok) throw new Error("Error al traer la información");
      const json = await res.json();
      return json;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return { quiz, setQuiz, isLoading, setIsLoading, quizFetch };
}
