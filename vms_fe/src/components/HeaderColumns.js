import React from "react";
import styles from "./HeaderColumns.module.css";

function HeaderColumns({ type = "rank" }) {
  const renderRank = () => {
    return (
      <header className={styles.HeaderColumns}>
        <section className={`${styles.diffSizeContainer} ${styles.rankSize}`}>
          <div className={styles.columnRank}>순위</div>
          <div className={styles.columnCompanyName}>기업 명</div>
          <div className={styles.columnCompanyDescription}>기업 소개</div>
        </section>
        <section className={styles.sameSizeContainer}>
          <span>카테고리</span>
          <span>누적투자 금액</span>
          <span>매출액</span>
          <span>고용 인원</span>
        </section>
      </header>
    );
  };

  const renderNoRank = () => {
    return (
      <header className={styles.HeaderColumns}>
        <section className={`${styles.diffSizeContainer} ${styles.noRankSize}`}>
          <div className={styles.columnCompanyName}>기업 명</div>
          <div className={styles.columnCompanyDescription}>기업 소개</div>
        </section>
        <section className={styles.sameSizeContainer}>
          <span>카테고리</span>
          <span>누적투자 금액</span>
          <span>매출액</span>
          <span>고용 인원</span>
        </section>
      </header>
    );
  };

  const renderInfoInvest = () => {
    return (
      <header className={styles.HeaderColumns}>
        <section className={`${styles.diffSizeContainer} ${styles.investSize}`}>
          <div className={styles.columnRank}>순위</div>
          <div className={styles.columnCompanyName}>기업 명</div>
          <div className={styles.columnCompanyDescription}>기업 소개</div>
          <div className={styles.columnCategory}>카테고리</div>
        </section>
        <section className={`${styles.sameSizeContainer} ${styles.ivestSizeForSame}`}>
          <div className={styles.wrapText}>
            <span>View My Startup </span> &nbsp;
            <span>투자 금액</span>
          </div>
          <span>실제 누적 투자 금액</span>
        </section>
      </header>
    );
  };

  const renderComment = () => {
    return (
      <header className={styles.HeaderColumns}>
        <section className={`${styles.sameSizeContainer} ${styles.commentSizeForSame}`}>
          <span>투자자 이름</span>
          <span>순위</span>
          <span>투자 금액</span>
        </section>
        <section className={`${styles.diffSizeContainer} ${styles.commentSize}`}>
          <div className={styles.columnComment}>투자 코멘트</div>
          <div className={styles.columnNone}></div>
        </section>
      </header>
    );
  };

  if (type === "rank") {
    return renderRank();
  } else if (type === "noRank") {
    return renderNoRank();
  } else if (type === "invest") {
    return renderInfoInvest();
  } else if (type === "comment") {
    return renderComment();
  }
}

export default HeaderColumns;
