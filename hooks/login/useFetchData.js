import { useState } from "react";

export default function useFetchData() {
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL =
    "https://45a9-2800-a4-15bf-9900-852b-2f8f-a735-9b1.ngrok-free.app";

  const quizFetch = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(URL + "/Quizes");
      if (!res.ok) throw new Error("Error al traer la información");
      const json = await res.json();
      return json;
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { quiz, setQuiz, isLoading, quizFetch };
}
