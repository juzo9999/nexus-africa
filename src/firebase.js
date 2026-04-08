// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔑 Your Firebase config (replace with your own from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyAW5FDO5EpxVsUK3g3ueG0mIkv7TqLZqoY",
  authDomain: "intercnexusafrica.firebaseapp.com",
  projectId:"intercnexusafrica",
  storageBucket:"intercnexusafrica.firebasestorage.app",
  messagingSenderId: "177765913565",
  appId: "1:177765913565:web:49abe3a17e73254f381c34",
  measurementId: "G-CE6QJFQBG4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);