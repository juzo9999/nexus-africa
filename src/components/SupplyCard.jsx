// src/components/SupplyCard.jsx
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const SupplyCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={data.image || "/default.jpg"}
          alt={data.cropType}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
          <FaRegHeart className="text-red-500" />
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{data.cropType}</h3>
        <p className="text-gray-600 mb-1">Quantity: {data.quantity} tons</p>
        <p className="text-gray-600 mb-2">Location: {data.location}</p>
        <p className="text-gray-400 text-sm mb-3">Posted {data.time}</p>

        <button className="w-full bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SupplyCard;