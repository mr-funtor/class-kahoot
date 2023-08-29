import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../../assets/index";
import styles from "./finalLeaderboard.module.css";

const FinalLeaderBoard = () => {
  const players = [
    { name: "Precious", score: 150, image: img1 },
    { name: "Toyin", score: 250, image: img2 },
    { name: "Waliyah", score: 100, image: img3 },
    { name: "Taiwo", score: 320, image: img4 },
    { name: "Brown", score: 200, image: img5 },
    { name: "Theo", score: 110, image: img6 },
    { name: "Lanre", score: 180, image: img7 },
    { name: "Damola", score: 190, image: img8 },
    { name: "Wale", score: 220, image: img9 },
  ];

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  // console.log(sortedPlayers[0]);
  const firstPlace = {
    name: sortedPlayers[0].name,
    score: sortedPlayers[0].score,
  };
  const secondPlace = {
    name: sortedPlayers[1].name,
    score: sortedPlayers[1].score,
  };
  const thirdPlace = {
    name: sortedPlayers[2].name,
    score: sortedPlayers[2].score,
  };

  return (
    <div className={styles.finalLeaderBoard}>
      <div>
        <img
          style={{ width: "110px" }}
          src={sortedPlayers[0].image}
          alt={sortedPlayers[0].name}
        />
        <p>winner!</p>
      </div>
      <div className={styles.leaderBoard}>
        <div className={`${styles.bars} ${styles.secondPlace}`}>
          <p>{secondPlace.name}</p>
          <p>{secondPlace.score}</p>
        </div>
        <div className={`${styles.bars} ${styles.winner}`}>
          <p>{firstPlace.name}</p>
          <p>{firstPlace.score}</p>
        </div>
        <div className={`${styles.bars} ${styles.thirdPlace}`}>
          <p>{thirdPlace.name}</p>
          <p>{thirdPlace.score}</p>
        </div>
      </div>
    </div>
  );
};

export default FinalLeaderBoard;
