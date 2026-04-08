import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import { getFeed } from "../services/feedService";
import Navbar from "../components/Navbar";

const Home = () => {
  const [feed, setFeed] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadFeed = async () => {
      const data = await getFeed();
      setFeed(data);
    };
    loadFeed();
  }, []);

  const filteredFeed = feed.filter(item =>
    item.cropType?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-24">

      <Navbar />

      {/* HERO */}
      <section className="px-4 py-6 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Nexus Africa
        </h1>
        <p className="text-sm mb-4">
          Connecting supply, demand & opportunity.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search crops..."
          className="w-full p-3 rounded-xl text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* STATS */}
      <section className="grid grid-cols-3 gap-2 px-4 mt-4">
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <h2 className="font-bold text-green-600">1240</h2>
          <p className="text-xs text-gray-500">Supply</p>
        </div>
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <h2 className="font-bold text-blue-600">980</h2>
          <p className="text-xs text-gray-500">Demand</p>
        </div>
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <h2 className="font-bold text-purple-600">320</h2>
          <p className="text-xs text-gray-500">Users</p>
        </div>
      </section>

      {/* TRENDING */}
      <section className="px-4 mt-4">
        <h2 className="text-sm font-bold mb-2">🔥 Trending</h2>
        <div className="flex gap-2 overflow-x-auto">
          {["Maize", "Rice", "Cassava"].map((crop, i) => (
            <span
              key={i}
              className="bg-white px-3 py-1 rounded-full shadow text-xs"
              onClick={() => setSearch(crop)}
            >
              {crop}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 mt-6">
  <h2 className="text-lg font-bold mb-3">🔥 Active Deals</h2>

  <div className="flex gap-3 overflow-x-auto">
    {[1,2,3].map((_, i) => (
      <div
        key={i}
        className="min-w-[220px] bg-white p-4 rounded-xl shadow"
      >
        <h3 className="font-semibold">Maize Deal</h3>
        <p className="text-sm text-gray-500">50 tons • Kaduna</p>
        <p className="text-xs text-green-600 mt-1">Matched with buyer</p>
      </div>
    ))}
  </div>
</section>

     <section className="px-4 mt-6">
  <h2 className="text-lg font-bold mb-3">📊 Market Insights</h2>

  <div className="bg-white p-4 rounded-xl shadow">
    <p className="text-sm">
      📈 Demand for rice has increased by <span className="font-bold text-green-600">18%</span> this week.
    </p>
    <p className="text-sm mt-2">
      ⚠️ Tomato supply is low in Lagos — opportunity for farmers.
    </p>
  </div>
</section>

        <section className="px-4 mt-6">
  <h2 className="text-lg font-bold mb-3">🚚 Logistics Opportunities</h2>

  <div className="space-y-3">
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="font-semibold">Route: Kaduna → Lagos</p>
      <p className="text-sm text-gray-500">High demand for transport</p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow">
      <p className="font-semibold">Route: Ogun → Abuja</p>
      <p className="text-sm text-gray-500">Cassava delivery needed</p>
    </div>
  </div>
</section>
   
      
      {/* FEED */}
      <section className="px-4 mt-6">
        <h2 className="text-lg font-bold mb-3">Market Feed</h2>
        <Feed feed={filteredFeed} />
      </section>

      {/* FLOATING ACTION */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3">
        <a
          href="/post-supply"
          className="bg-green-600 text-white px-4 py-3 rounded-full shadow-lg text-sm"
        >
          + Supply
        </a>
        <a
          href="/post-demand"
          className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg text-sm"
        >
          + Demand
        </a>
      </div>

    </div>
  );
};

export default Home;