import React from "react";
import "../styles/style.css";
import styles from "./OutlineBtn.module.css";

const OutlineBtn = ({ text, onClick }) => {
  return (
    <button className={styles.outlineBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default OutlineBtn;
