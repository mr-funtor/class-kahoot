import styles from "./finalLeaderboard.module.css";
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
const FinalLeaderboard = () => {
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
  const firstPlace = sortedPlayers[0].name;
  const secondPlace = sortedPlayers[1].name;
  const thirdPlace = sortedPlayers[2].name;

  return (
    <div className={styles.positionContainer}>
      <div className={styles.otherPositions}>
        <ol start="4">
          <div>
            <li>Username (score)</li>
            <li>Username (score)</li>
            <li>Username (score)</li>
          </div>
          <div>
            <li>Username (score)</li>
            <li>Username (score)</li>
            <li>Username (score)</li>
          </div>
        </ol>
      </div>

      <div className={styles.finalLeaderBoard}>
        <img
          style={{ width: "110px" }}
          src={sortedPlayers[0].image}
          alt={sortedPlayers[0].name}
        />
        <div className={styles.leaderBoard}>
          <div className={styles.secondPlace}>{firstPlace}</div>
          <div className={styles.winner}>{secondPlace}</div>
          <div className={styles.thirdPlace}>{thirdPlace}</div>
        </div>
      </div>
    </div>
  );
};

export default FinalLeaderboard;
