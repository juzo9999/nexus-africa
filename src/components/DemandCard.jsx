// src/components/DemandCard.jsx
import React from "react";
import { FaBullseye } from "react-icons/fa";

const DemandCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border-l-8 border-blue-500 overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">Need {data.cropType}</h3>
          <FaBullseye className="text-blue-500" />
        </div>

        <p className="text-gray-600 mb-1">Quantity: {data.quantity} tons</p>
        <p className="text-gray-600 mb-2">Location: {data.location}</p>
        <p className="text-gray-400 text-sm mb-3">Posted {data.time}</p>

        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
          Match Supply
        </button>
      </div>
    </div>
  );
};

export default DemandCard;