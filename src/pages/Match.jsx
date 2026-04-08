import React, { useState } from "react";
import { getMatches } from "../services/matchService";

const Match = () => {
  const [crop, setCrop] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await getMatches(crop);
    setResults(data);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find Supply</h2>

      <input
        placeholder="Enter crop (e.g. maize)"
        className="border p-2 rounded mr-2"
        onChange={(e) => setCrop(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="mt-6 space-y-4">
        {results.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3>{item.cropType}</h3>
            <p>{item.quantity} tons</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Match;