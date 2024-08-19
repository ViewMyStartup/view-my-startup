import React from "react";
import "../styles/style.css";
import styles from "./MediumBtn.module.css";

const MediumBtn = ({ text, onClick, className }) => {
  return (
<button className={className || styles.outlineBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default MediumBtn;
