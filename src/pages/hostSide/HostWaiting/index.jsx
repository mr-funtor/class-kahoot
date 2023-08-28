import { BiPlay } from "react-icons/bi";
import { CustomButton, LoadingDots } from "../../../components";
import styles from "./HostWaiting.module.css";
import {
  img1,
  img2,
  img3,
  img4,
  img9,
  img6,
  img7,
  img8,
} from "../../../assets";

const HostWaiting = ({ gamePin }) => {
  const players = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img9 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
  ];
  return (
    <div className={styles.HostWaiting}>
      <h1>Get ready to play!</h1>
      <div className={styles.gamePinBox}>
        <h3>Game Pin</h3>
        <p>
          {gamePin ? (
            gamePin
          ) : (
            <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <LoadingDots />
            </span>
          )}
        </p>
      </div>
      <CustomButton
        containerStyle={`${styles.startBtn}`}
        buttonText={
          <>
            <BiPlay className={styles.playIcon} />
            Start!
          </>
        }
        onClick={() => {
          console.log("clicked!");
        }}
        disabled={players.length < 2}
      />

      <div className={styles.playerSection}>
        <p>
          <span style={{ color: "#6847c4" }}>{players.length}</span> players are
          ready to play
        </p>
        <div className={styles.userAviBox}>
          {players.map((item, index) => (
            <div className={styles.allPlayerSection} key={index}>
              <img
                src={item.image}
                alt={`player ${index + 1}`}
                className={styles.userAvi}
              />
              <p>{`player ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HostWaiting;
