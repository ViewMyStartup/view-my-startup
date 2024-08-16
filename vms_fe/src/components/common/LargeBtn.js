import React from "react";
import styles from "./LargeBtn.module.css";
import "../styles/style.css";

const LargeBtn = ({ text }) => {
  return (
    <button className={`${styles.largeBtn} ${styles.active}`}>{text}</button>
  );
};

export default LargeBtn;
