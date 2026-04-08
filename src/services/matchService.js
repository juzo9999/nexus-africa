// src/services/matchService.js
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getMatches = async (cropType) => {
  const q = query(collection(db, "products"), where("cropType", "==", cropType));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
};