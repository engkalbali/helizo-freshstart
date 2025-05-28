import { Tabs } from 'expo-router';

export default function AuthTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FEBA17',
        tabBarInactiveTintColor: '#74512D',
        tabBarStyle: { backgroundColor: '#4E1F00' },
      }}
    >
      <Tabs.Screen name="login" options={{ tabBarLabel: 'ورود' }} />
      <Tabs.Screen name="signup" options={{ tabBarLabel: 'ثبت‌نام' }} />
    </Tabs>
  );
}
