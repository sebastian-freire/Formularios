import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useUser } from "../../context/userContext";

export default function ProtectedLayout() {
  const router = useRouter();
  const { isLoggedIn } = useUser();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace("/login_page");
  //   }
  // }, [isLoggedIn]);
  //FIX ME FUNCIONA PERO DESCOMENTAR PARA QUE NO REDIRECCIONE A LOGIN

  return (
    <Stack screenOptions={genericHeaderOptions}>
      <Stack.Screen
        name="quiz_selector"
        options={{
          title: "Selector de quiz"
        }}
      />
      <Stack.Screen
        name="quiz/[id_quiz]"
        options={{
          title: "Prueba"
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
