import style from "./responseTracker.module.css";

const BarChart = ({ data }) => {
  const maxDataValue = Math.max(...data.map((item) => item.point));

  return (
    <div className={style.barChart}>
      {data.map((item, index) => (
        <div
          key={index}
          className={style.bar}
          style={{
            height: `${(item.point / maxDataValue) * 100}%`,
            backgroundColor: item.color,
          }}
        >
          <div className={style.labels}>
            {item.label} {item.point}
            {item.label === "D -" && <span className={style.checkmark}>✔</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
