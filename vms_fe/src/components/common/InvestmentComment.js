import React, { useState } from "react";
import styles from "./InvestmentComment.module.css";

const InvestmentComment = ({ headerText, placeholderText, errorMessage }) => {
  const [commentValue, setCommentValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleBlur = () => {
    if (commentValue === "") {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <div className={styles.investmentComment}>
      <div className={styles.investmentHeaderText}>{headerText}</div>
      <textarea
        className={`${styles.investmentTextarea} ${hasError ? styles.investmentTextareaError : ""}`}
        placeholder={placeholderText}
        value={commentValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {hasError && <div className={styles.investmentErrorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default InvestmentComment;

