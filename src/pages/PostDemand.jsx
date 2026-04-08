import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

const PostDemand = () => {
  const [form, setForm] = useState({
    cropType: "",
    quantity: "",
    location: "",
  });

  const handleSubmit = async () => {
    if (!form.cropType || !form.quantity || !form.location) {
      return alert("Fill all fields");
    }

    await addDoc(collection(db, "demands"), {
      ...form,
      userId: auth.currentUser?.uid || "demo",
      createdAt: new Date(),
    });

    alert("Demand posted!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-96">
        <h2 className="text-xl font-bold mb-4">Post Demand</h2>

        <input
          placeholder="Crop"
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => setForm({ ...form, cropType: e.target.value })}
        />

        <input
          placeholder="Quantity"
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          placeholder="Location"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostDemand;