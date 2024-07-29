import ReactDOM from "react-dom/client";
// components
import App from "./App";
// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// styles
import "@/styles/reset.css";
import "react-loading-skeleton/dist/skeleton.css";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
