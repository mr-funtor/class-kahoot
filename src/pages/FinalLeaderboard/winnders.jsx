import FinalLeaderBoard from ".";

const users = [
  { name: "Precious", score: 150 },
  { name: "Toyin", score: 250 },
  { name: "Waliyah", score: 200 },
  { name: "Taiwo", score: 320 },
  { name: "Brown", score: 100 },
  { name: "Theo", score: 110 },
  { name: "Lanre", score: 180 },
  { name: "Damola", score: 190 },
  { name: "Wale", score: 220 },
];

const Winners = () => {
  return <FinalLeaderBoard users={users} />;
};

export default Winners;
