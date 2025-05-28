import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'ورود', headerShown: false }} />
      <Stack.Screen name="signup" options={{ title: 'ثبت‌نام', headerShown: false }} />
    </Stack>
  );
}