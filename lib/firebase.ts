// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnh1EUPJfAX1DznSoJqO4nVNyjnN1uXKM",
  authDomain: "helizo-8594.firebaseapp.com",
  projectId: "helizo-8594",
  storageBucket: "helizo-8594.firebasestorage.app",
  messagingSenderId: "576210292113",
  appId: "1:576210292113:web:bea94510a621f68cb61e30",
  measurementId: "G-ZEH7DCQPBC",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };