// Firebase configuration & client initialization
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAdd_3tKAjRekb0dZljzSJ_KOEer7ol_QE",
  authDomain: "bhavya-sreekumar.firebaseapp.com",
  projectId: "bhavya-sreekumar",
  storageBucket: "bhavya-sreekumar.firebasestorage.app",
  messagingSenderId: "244623657093",
  appId: "1:244623657093:web:8cca71eead684266cf41ec",
  measurementId: "G-Z5W3BBZGPL",
};

// Initialize Firebase app (singleton across client & prerender)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Analytics safely (client-only)
export const initAnalytics = async (): Promise<Analytics | null> => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

