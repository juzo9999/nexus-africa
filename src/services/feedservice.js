// src/services/feedservice.js
const maize = "https://via.placeholder.com/150?text=Maize";
const cassava = "https://via.placeholder.com/150?text=Cassava";

export const getFeed = async () => {
  return [
    {
      type: "supply",
      cropType: "Maize",
      quantity: 50,
      location: "Kaduna",
      image: maize,
      time: "2 hours ago",
    },
    {
      type: "demand",
      cropType: "Rice",
      quantity: 200,
      location: "Lagos",
      time: "5 hours ago",
    },
    {
      type: "supply",
      cropType: "Cassava",
      quantity: 80,
      location: "Ogun",
      image: cassava,
      time: "1 day ago",
    },
    {
      type: "supply",
      cropType: "Soybean",
      quantity: 50,
      location: "Borno",
      image: maize,
      time: "2 hours ago",
    },
    {
      type: "demand",
      cropType: "Sugar cane",
      quantity: 200,
      location: "Kogi",
      time: "5 hours ago",
    },
    {
      type: "supply",
      cropType: "Ginger",
      quantity: 80,
      location: "Jos",
      image: cassava,
      time: "1 day ago",
    },
  ];
};