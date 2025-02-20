 import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-5849b.firebaseapp.com",
  projectId: "task-manager-5849b",
  storageBucket: "task-manager-5849b.firebasestorage.app",
  messagingSenderId: "159230632765",
  appId: "1:159230632765:web:db09bda37cadaf5f735b54"
};

export const app = initializeApp(firebaseConfig);
