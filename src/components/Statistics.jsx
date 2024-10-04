/* eslint-disable react/prop-types */
import styles from "./Statistics.module.css";

function Statistics({ title, image, additionalClass, children }) {
  return (
    <div className={`${styles.statistics} ${styles[additionalClass]}`}>
      <div className={styles.statisticsImageBox}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default Statistics;
