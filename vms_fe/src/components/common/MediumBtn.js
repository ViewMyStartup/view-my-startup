import React from "react";
import "../styles/style.css";
import styles from "./MediumBtn.module.css";

const MediumBtn = ({ text, onClick }) => {
  return (
    <button
      className={`${styles.mediumBtn} ${styles.active}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MediumBtn;
