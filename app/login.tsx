import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { signIn, signUp } from "../lib/firebase/auth";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // true = login | false = signup
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) return Alert.alert("لطفاً ایمیل و رمز را وارد کنید");
    try {
      isLogin ? await signIn(email, password) : await signUp(email, password);
      router.replace("/"); // بعد از لاگین بره به صفحه اصلی
    } catch (err: any) {
      Alert.alert("خطا", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "ورود به حساب" : "ساخت حساب جدید"}</Text>

      <TextInput
        placeholder="ایمیل"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="رمز عبور"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title={isLogin ? "ورود" : "ثبت‌نام"} onPress={handleSubmit} color="#FEBA17" />

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 20 }}>
        <Text style={{ color: "#74512D" }}>
          {isLogin ? "حساب نداری؟ ثبت‌نام کن" : "قبلاً ثبت‌نام کردی؟ وارد شو"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff9f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: "#4E1F00",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
});
