import React from "react";
import styles from "./MediumBtn.module.css";

const MediumBtn = ({ text, onClick }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.mediumBtn} ${styles.active}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default MediumBtn;


