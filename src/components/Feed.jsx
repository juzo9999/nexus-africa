// src/components/Feed.jsx
import React from "react";
import SupplyCard from "./SupplyCard";
import DemandCard from "./DemandCard";

const Feed = ({ feed }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {feed.map((item, index) => {
        if (item.type === "supply") {
          return <SupplyCard key={index} data={item} />;
        }
        if (item.type === "demand") {
          return <DemandCard key={index} data={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default Feed;