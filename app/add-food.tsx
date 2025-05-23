import { View, Text, StyleSheet } from "react-native";

export default function AddFoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>افزودن غذا</Text>
      <Text style={styles.description}>اینجا قراره یه فرم لوکس برای اضافه کردن غذا بسازیم 😋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff9f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4E1F00",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#74512D",
  },
});
