import React from "react";
import "../styles/style.css";
import styles from "./MediumBtn.module.css";

const MediumBtn = () => {
  return (
    <button className={`${styles.mediumBtn} ${styles.active}`}>
      기업 비교하기
    </button>
  );
};

export default MediumBtn;
