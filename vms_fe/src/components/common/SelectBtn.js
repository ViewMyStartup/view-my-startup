import React from "react";
import styles from "./SelectBtn.module.css";

const SelectBtn = ({ text, onClick, status }) => {
  let buttonClass = styles.selectBtnDefault;
  const style = {};

  if (status === "selected") {
    buttonClass = styles.selectBtnSelected;
    style.backgroundImage = 'url("/assets/images/ic_check.svg")';
    style.backgroundRepeat = "no-repeat";
    style.backgroundPosition = "11px center";
  } else if (status === "deselected") {
    buttonClass = styles.selectBtnDeselected;
  }

  return (
    <button
      className={`${styles.selectBtn} ${buttonClass}`}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default SelectBtn;
