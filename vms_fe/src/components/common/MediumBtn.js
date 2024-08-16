import React from "react";
import "../styles/style.css";
import styles from "./MediumBtn.module.css";

const MediumBtn = ({ text }) => {
  return (
    <button className={`${styles.mediumBtn} ${styles.active}`}>{text}</button>
  );
};

export default MediumBtn;
