import { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "../context/userContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, logout, isLoggedIn } = useUser();

  return (
    <View style={styles.container}>
      {isLoggedIn && (
        <TouchableOpacity onPress={() => router.push("/quiz_selector")}>
          <Text style={{ color: "red", marginBottom: 20 }}>
            Ir a Quiz Selector
          </Text>
        </TouchableOpacity>
      )}

      <TextInput placeholder="Ingresa tu nombre" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffbe7" // Amarillo pastel muy suave
  },
  input: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ffb347", // Naranja suave
    marginBottom: 22,
    fontSize: 16,
    backgroundColor: "#fffdfa", // Blanco cálido
    borderRadius: 8,
    color: "#4e342e" // Marrón oscuro
  },
  button: {
    width: "80%",
    backgroundColor: "#ffb347", // Naranja suave
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    elevation: 2
  },
  buttonText: {
    color: "#fffbe7", // Amarillo pastel muy suave
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
});
