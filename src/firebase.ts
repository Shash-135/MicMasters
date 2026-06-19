import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1N8v_UUAD7uMWKYsRJKsKX-Y5tTZo2Vw",
  authDomain: "micmasters-web.firebaseapp.com",
  projectId: "micmasters-web",
  storageBucket: "micmasters-web.firebasestorage.app",
  messagingSenderId: "642984514167",
  appId: "1:642984514167:web:55e33a275be9ac3443ec72",
  measurementId: "G-HS5Y44TRLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
