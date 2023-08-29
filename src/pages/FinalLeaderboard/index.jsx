import styles from "./finalLeaderboard.module.css";

const FinalLeaderboard = () => {
  return (
    <div className={styles.positionContainer}>
      <div className={styles.otherPositions}>
        <ol start="4">
          <div>
            <li>Username (score)</li>
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
    </div>
  );
};

export default FinalLeaderboard;
