import { Stack, useRouter } from "expo-router";

export default function ProtectedLayout() {
  const router = useRouter();
  return (
    <Stack screenOptions={genericHeaderOptions}>
      <Stack.Screen
        name="quiz_selector"
        options={{
          title: "Quiz Selector"
        }}
      />
      <Stack.Screen
        name="quiz/[id_quiz]"
        options={{
          title: "Quiz"
        }}
      />
      <Stack.Screen
        name="quiz/[id_quiz]/question/[id_question]"
        options={{
          title: "Question"
        }}
      />
    </Stack>
  );
}

const genericHeaderOptions = {
  headerStyle: {
    backgroundColor: "#ffb347", // Color de fondo
    elevation: 4 // Sombra en Android
  },
  headerTitleStyle: {
    color: "#fffbe7", // Color del texto
    fontSize: 20,
    fontWeight: "bold"
  },
  headerTitleAlign: "center" // Centra el título
};
