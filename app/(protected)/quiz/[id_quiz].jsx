import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

export const options = {
  headerShown: true,
  title: "Seleccionar Quiz"
};

export default function QuizSelector() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "fff"
  },
  viewSinHeader: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  scroll: {
    padding: 16
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4
  },
  footer: {
    width: "100%",
    height: "18%",
    alignItems: "center",
    marginTop: "auto",
    borderTopWidth: 2,
    borderTopColor: "lightgrey",
    backgroundColor: "white",
    paddingBottom: 16
  },
  total: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16
  },
  verOrdenBtn: {
    backgroundColor: "blue",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32
  },
  verOrdenText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
