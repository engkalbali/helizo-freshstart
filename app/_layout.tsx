import { Stack } from 'expo-router';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function AppLayout() {
  const { user } = useContext(AuthContext);

  return (
    <Stack>
      <Stack.Screen name="Splash" options={{ headerShown: false }} />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
        redirect={!!user} // اگه کاربر لاگین کرده، به این مسیر نره
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
        redirect={!user} // اگه کاربر لاگین نکرده، به این مسیر نره
      />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="explore" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
    </Stack>
  );
}