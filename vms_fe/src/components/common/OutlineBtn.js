import React from "react";
import "../styles/style.css";
import styles from "./OutlineBtn.module.css";

const OutlineBtn = ({ text }) => {
  return <button className={styles.outlineBtn}>{text}</button>;
};

export default OutlineBtn;
