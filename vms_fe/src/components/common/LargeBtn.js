import React from "react";

import styles from "./LargeBtn.module.css";

const LargeBtn = ({ text, onClick, className }) => {
  return (
    <button className={className || styles.largeBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default LargeBtn;
