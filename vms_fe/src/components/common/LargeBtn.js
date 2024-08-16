import React from "react";
import styles from "./LargeBtn.module.css";
import "../styles/style.css";

const LargeBtn = ({ text, onClick }) => {
  return (
    <button className={`${styles.largeBtn} ${styles.active}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default LargeBtn;
