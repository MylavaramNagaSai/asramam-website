import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // PASTE YOUR CONFIG OBJECT HERE FROM FIREBASE SETTINGS
  apiKey: "YOUR_API_KEY",
  authDomain: "satyanandasramam-web-12345.firebaseapp.com",
  projectId: "satyanandasramam-web-12345",
  storageBucket: "satyanandasramam-web-12345.firebasestorage.app",
  messagingSenderId: "496812873263",
  appId: "1:496812873263:web:7b68bfa843c48583d498da"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);