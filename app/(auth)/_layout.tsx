import { Tabs } from 'expo-router';

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FEBA17',
        tabBarInactiveTintColor: '#74512D',
        tabBarStyle: { backgroundColor: '#4E1F00' },
      }}
    />
  );
}
