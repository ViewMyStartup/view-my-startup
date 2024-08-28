import React from "react";
import styles from "../common/CompanyDataPerRowNoRank.module.css";

// 이미지
import iconKebab from "../../assets/images/ic_kebab.svg";

function CompanyDataPerRowNoRank({ type = "noRank", dataObject = {} }) {
  // 단위 변환
  const convertToBillion = (number) => {
    return parseFloat((number / 100000000).toFixed(2)); // 반올림
  };

  // 텍스트 자르기 (사전 작성)
  const truncateText = (text, maxLength) => {
    if (typeof text !== "string") {
      return "";
    }
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  function formatNumberWithCommas(number) {
    return number.toLocaleString();
  }

  // noRank 타입 처리
  const typeNoRank = () => {
    const {
      id,
      name,
      logoUrl, // logoUrl 사용
      description,
      category,
      totalInvestment,  // 수정된 부분
      revenue,
      employees,
    } = dataObject;

    return (
      <li key={id} className={styles.dataPerRowContainer}>
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
          <span>{`${convertToBillion(totalInvestment)}억 원`}</span> {/* 수정된 부분 */}
          <span>{`${convertToBillion(revenue)}억 원`}</span>
          <span>{`${employees}명`}</span>
        </section>
      </li>
    );
  };

  // 다른 타입 처리 (추가적으로 필요할 경우 사용 가능)
  const typeRank = () => {
    const {
      id,
      rank,
      name,
      logoUrl,
      description,
      category,
      totalInvestment,  // 수정된 부분
      revenue,
      employees,
    } = dataObject;

    return (
      <li key={id} className={styles.dataPerRowContainer}>
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
        <section
          className={`${styles.sameSizeContainer} ${styles.rankSizeForSame}`}
        >
          <span>{category}</span>
          <span>{`${convertToBillion(totalInvestment)}억 원`}</span> {/* 수정된 부분 */}
          <span>{`${convertToBillion(revenue)}억 원`}</span>
          <span>{`${employees}명`}</span>
        </section>
      </li>
    );
  };

  // 선택한 타입에 따라 처리
  if (type === "noRank") {
    return typeNoRank();
  } else if (type === "rank") {
    return typeRank();
  }
  // 추가적인 타입 처리
}

export default CompanyDataPerRowNoRank;


