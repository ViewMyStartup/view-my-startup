import React from "react";
import styles from "./MyCompanyCompare.module.css";
import PageNav from "components/PageNav";

function MyCompanyCompare() {
  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.content}>
        <h1 className={styles.heading}>나의 기업을 선택해 주세요!</h1>
      </div>
    </div>
  );
}

export default MyCompanyCompare;

