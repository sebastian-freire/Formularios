import { Tabs } from "expo-router";
import { UserProvider, useUser } from "../context/userContext";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

//bar
function TabsWithAuth() {
  const { isLoggedIn } = useUser();

  return (
    <Tabs screenOptions={genericHeaderOptions} initialRouteName="login_page">
      <Tabs.Screen
        name="(protected)"
        options={{
          headerShown: false,
          title: "Quizes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              disabled={!isLoggedIn}
              style={[props.style, { opacity: isLoggedIn ? 1 : 0.5 }]}
            />
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
  );
}

// Root layout component
export default function RootLayout() {
  return (
    <UserProvider>
      <TabsWithAuth />
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
