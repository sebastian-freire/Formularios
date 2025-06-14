import { Tabs } from "expo-router";
import { UserProvider } from "../context/userContext";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <UserProvider>
      <Tabs screenOptions={genericHeaderOptions}>
        <Tabs.Screen
          name="(protected)"
          options={{
            headerShown: false,
            title: "Quizes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="login_page"
          options={{
            headerShown: true,
            title: "Iniciar sesión",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            )
          }}
        />
      </Tabs>
    </UserProvider>
  );
}

const genericHeaderOptions = {
  headerStyle: {
    height: 92, // Altura fija en px
    //tuve que ponerlo porque el stack no se puede cambiar la altura
    // en el stack de protected no se puede cambiar la altura
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
