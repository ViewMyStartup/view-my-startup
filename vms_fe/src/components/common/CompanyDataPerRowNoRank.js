import React from "react";
import styles from "../common/CompanyDataPerRowNoRank.module.css";

function CompanyDataPerRowNoRank({ type = "noRank", dataObject = {}, myCompanyId }) {
  const convertToBillion = (number) => parseFloat((number / 100000000).toFixed(2));

  const truncateText = (text, maxLength) => (typeof text === "string" ? (text.length > maxLength ? text.substring(0, maxLength) + "..." : text) : "");

  function formatNumberWithCommas(number) {
    return number.toLocaleString();
  }

  const isMyCompany = dataObject.id === myCompanyId;

  const typeNoRank = () => {
    const {
      id,
      name,
      logoUrl,
      description,
      category,
      totalInvestment,
      revenue,
      employees,
    } = dataObject;

    return (
      <li
        key={id}
        className={`${styles.dataPerRowContainer} ${isMyCompany ? styles.myCompanyNoRank : ""}`}
      >
        <section className={`${styles.diffSizeContainer} ${styles.noRankSize}`}>
          <article className={styles.companyInfoContainer}>
            <img src={logoUrl} alt="기업 이미지" />
            <span>{name}</span>
          </article>
          <span className={styles.columnCompanyDescription}>
            {truncateText(description, 58)}
          </span>
        </section>
        <section className={styles.sameSizeContainer}>
          <span>{category}</span>
          <span>{`${convertToBillion(totalInvestment)}억 원`}</span>
          <span>{`${convertToBillion(revenue)}억 원`}</span>
          <span>{`${employees}명`}</span>
        </section>
      </li>
    );
  };

  const typeRank = () => {
    const {
      id,
      rank,
      name,
      logoUrl,
      description,
      category,
      totalInvestment,
      revenue,
      employees,
    } = dataObject;

    return (
      <li
        key={id}
        className={`${styles.dataPerRowContainer} ${isMyCompany ? styles.myCompany : ""}`}
      >
        <section className={`${styles.diffSizeContainer} ${styles.rankSize}`}>
          <span className={styles.columnRank}>{`${dataObject.rank}위`}</span>
          <article className={styles.companyInfoContainer}>
            <img src={logoUrl} alt="기업 이미지" />
            <span>{name}</span>
          </article>
          <span className={styles.columnCompanyDescription}>
            {truncateText(description, 58)}
          </span>
        </section>
        <section className={`${styles.sameSizeContainer} ${styles.rankSizeForSame}`}>
          <span>{category}</span>
          <span>{`${convertToBillion(totalInvestment)}억 원`}</span>
          <span>{`${convertToBillion(revenue)}억 원`}</span>
          <span>{`${employees}명`}</span>
        </section>
      </li>
    );
  };

  if (type === "noRank") {
    return typeNoRank();
  } else if (type === "rank") {
    return typeRank();
  }

  return null; // type이 "noRank" 또는 "rank"가 아닐 경우 아무 것도 렌더링하지 않음
}

export default CompanyDataPerRowNoRank;

