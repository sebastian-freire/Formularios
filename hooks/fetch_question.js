import { useState } from "react";

export default function useFetchQuestion(questionId) {
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL_ENV = process.env.EXPO_PUBLIC_API_URL;

  const questionsFetch = async () => {
    const URL = `${URL_ENV}/Question/${questionId}`;
    const res = await fetch(URL);
    if (!res.ok) throw new Error("Error al traer la información");
    const json = await res.json();
    return json;
  };

  return {
    question,
    setQuestion,
    isLoading,
    setIsLoading,
    questionsFetch
  };
}
