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
    { name: "Taiwo", score: 120, image: img4 },
    { name: "Brown", score: 200, image: img5 },
    { name: "Theo", score: 110, image: img6 },
    { name: "Lanre", score: 180, image: img7 },
    { name: "Damola", score: 190, image: img8 },
    { name: "Wale", score: 220, image: img9 },
  ];

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

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

  return (
    <div className={styles.finalLeaderBoard}>
      <div className={styles.imageDiv}>
        <img
          style={{
            width: "80px",
            border: "5px solid white",
            borderRadius: "100%",
          }}
          src={sortedPlayers[0].image}
          alt={sortedPlayers[0].name}
        />

        <p>WINNER!</p>
      </div>
      <div className={styles.leaderBoard}>
        <div positionContainer>
          <div className={styles.otherPositions}>
            <ol start="4">
              <div>
                {sortedPlayers.slice(3, 6).map((player) => {
                  return (
                    <li
                      key={Math.random()}
                    >{`${player.name} (${player.score})`}</li>
                  );
                })}
              </div>
              <div>
                {sortedPlayers.slice(6, sortedPlayers.length).map((player) => {
                  return (
                    <li
                      key={Math.random()}
                    >{`${player.name} (${player.score})`}</li>
                  );
                })}
              </div>
            </ol>
          </div>
        </div>
        <div className={`${styles.bars} ${styles.secondPlace}`}>
          <p className={styles.score}>2</p>
          <img className={styles.images} src={secondPlace.img} alt="" />
          <p className={styles.position}>{secondPlace.name}</p>
          <p className={styles.position}>{secondPlace.score} </p>
        </div>
        <div className={`${styles.bars} ${styles.firstPlace}`}>
          <p className={styles.score}>1</p>
          <img className={styles.images} src={firstPlace.img} alt="" />
          <p className={styles.position}>{firstPlace.name}</p>
          <p className={styles.position}>{firstPlace.score}</p>
        </div>
        <div className={`${styles.bars} ${styles.thirdPlace}`}>
          <p className={styles.score}>3</p>
          <img className={styles.images} src={thirdPlace.img} alt="" />
          <p className={styles.position}>{thirdPlace.name}</p>
          <p className={styles.position}>{thirdPlace.score}</p>
        </div>
      </div>
    </div>
  );
};

export default FinalLeaderboard;
