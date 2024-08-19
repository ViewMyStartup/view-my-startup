import React from "react";
import styles from "./SelectBtn.module.css";

const SelectBtn = ({ text, onClick, status }) => {
  let buttonClass = styles.selectBtnDefault;

  if (status === "selected") {
    buttonClass = styles.selectBtnSelected;
  } else if (status === "deselected") {
    buttonClass = styles.selectBtnDeselected;
  }

  return (
    <button className={`${styles.selectBtn} ${buttonClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default SelectBtn;
