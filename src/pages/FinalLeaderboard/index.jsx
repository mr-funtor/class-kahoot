import styles from "./finalLeaderboard.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";

import {
  img1,
  img2,
  img3,
  img4,
  img11,
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
    { name: "Taiwo", score: 120, image: img4 },
    { name: "Brown", score: 200, image: img11 },
    { name: "Theo", score: 110, image: img6 },
    { name: "Lanre", score: 180, image: img7 },
    { name: "Damola", score: 190, image: img8 },
    { name: "Wale", score: 220, image: img9 },
  ];

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  // console.log(sortedPlayers);

  const firstPlace = {
    img: sortedPlayers[0].image,
    name: sortedPlayers[0].name,
    score: sortedPlayers[0].score,
  };
  const secondPlace = {
    img: sortedPlayers[1].image,
    name: sortedPlayers[1].name,
    score: sortedPlayers[1].score,
  };
  const thirdPlace = {
    img: sortedPlayers[2].image,
    name: sortedPlayers[2].name,
    score: sortedPlayers[2].score,
  };


  // console.log(sortedPlayers.slice(3));
  const otherPlayers = sortedPlayers.slice(3).map((player, index) => (
    <div key={index} className={styles.otherPositions}>
      <ol start={4}>
        <li style={{ display: "flex" }}>
          <p>{index + 4}.</p>
          <div className={styles.flex}>
            <p>{player.name}</p>
            <p>({player.score})</p>
          </div>
        </li>
      </ol>
    </div>
  ));

  return (
    <div className={styles.finalLeaderBoard}>
      <div className={styles.positionContainer}>
        {otherPlayers}
      </div>

      <div className={styles.finalLeaderBoard}>
        <div className={styles.imageDiv}>
          <LoadingSpinner size="120px">
            <img
              className={styles.winnerImage}
              src={sortedPlayers[0].image}
              alt={sortedPlayers[0].name}
            />
          </LoadingSpinner>
          <p>WINNER!</p>
        </div>

        <div className={styles.leaderBoard}>
          <div className={styles.scoreBoard}>
            <p className={styles.score}>2</p>
            <div className={`${styles.bars} ${styles.secondPlace}`}>
              <img className={styles.images} src={secondPlace.img} alt="" />
              <p className={styles.position}>{secondPlace.name}</p>
              <p className={styles.position}>{secondPlace.score} </p>
            </div>
          </div>

          <div className={styles.scoreBoard}>
            <p className={styles.score}>1</p>
            <div className={`${styles.bars} ${styles.firstPlace}`}>
              <img className={styles.images} src={firstPlace.img} alt="" />
              <p className={styles.position}>{firstPlace.name}</p>
              <p className={styles.position}>{firstPlace.score}</p>
            </div>
          </div>

          <div className={styles.scoreBoard}>
            <p className={styles.score}>3</p>
            <div className={`${styles.bars} ${styles.thirdPlace}`}>
              <img className={styles.images} src={thirdPlace.img} alt="" />
              <p className={styles.position}>{thirdPlace.name}</p>
              <p className={styles.position}>{thirdPlace.score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalLeaderboard;
