import { BiPlay } from "react-icons/bi";
import { CustomButton, LoadingDots } from "../../../components";
import styles from "./HostWaiting.module.css";
import styled from "../../PlayerWaiting/PlayerWaiting.module.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../../assets";
import { useState } from "react";

const dummyAvatars = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
];

const HostWaiting = ({ gamePin, players = [] }) => {
  const [allPlayers, setAllPlayers] = useState(dummyAvatars);

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

      {/* USING DATA COMING FROM REAL PLAYERS DESTRUCTURED ABOVE */}
      {/* <div className={styles.playerSection}>
        <p>{players.length} are ready to play</p>
        {players.map((item, index) => (
          <div>
            <img
              src={item.image}
              alt={`player ${index + 1}`}
              className={styles.playerAvatar}
            />
            <p>{`player ${index + 1}`}</p>
          </div>
        ))}
      </div> */}

      {/* using dummy data */}
      <div className={styles.playerSection}>
        <p><span style={{color: '#6847c4'}}>{allPlayers.length}</span> players are ready to play</p>
        <div className={styles.userAviBox}>
          {allPlayers.map((item, index) => (
            <div>
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
