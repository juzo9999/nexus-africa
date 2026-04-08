import maize from "../assets/maize.jpg";
import cassava from "../assets/cassava.pg";

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
  ];
};