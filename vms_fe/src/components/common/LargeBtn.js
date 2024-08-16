import React from "react";
import styles from "./LargeBtn.module.css";
import "../styles/style.css";

const LargeBtn = () => {
  return (
    <button className={`${styles.largeBtn} ${styles.active}`}>
      기업 비교하기
    </button>
  );
};

export default LargeBtn;
