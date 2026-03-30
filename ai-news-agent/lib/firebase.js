import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// VOLTE NA ABA DO FIREBASE E COPIE AS SUAS CHAVES REAIS PARA CÁ:
const firebaseConfig = {
  apiKey: "AIzaSyCwY2Vn5L3Bq8K3Qd6bGzDm69kmoQM0-NM",
  authDomain: "ai-news-agent-b8c65.firebaseapp.com",
  projectId: "ai-news-agent-b8c65",
  storageBucket: "ai-news-agent-b8c65.firebasestorage.app",
  messagingSenderId: "904683311059",
  appId: "1:904683311059:web:b98f85facc3c4876e0e926"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };