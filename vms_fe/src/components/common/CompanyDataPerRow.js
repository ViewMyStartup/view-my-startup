import React from "react";
import styles from "./CompanyDataPerRow.module.css";

//이미지
import iconKebab from "../../assets/images/ic_kebab.svg";

function CompanyDataPerRow({ type = "rank", dataObject = {} }) {
  //단위 변환
  const convertToBillion = (number) => {
    return parseFloat((number / 100000000).toFixed(2)); // 반올림
    // return Math.floor((number / 100000000) * 100) / 100; // 버림
  };

  function formatNumberWithCommas(number) {
    return number.toLocaleString();
  }

  const typeRank = () => {
    const {
      id,
      rank,
      name,
      logoUrl, // img -> logoUrl
      description,
      category,
      total_investment,
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
            {description}
          </span>
        </section>
        <section
          className={`${styles.sameSizeContainer} ${styles.rankSizeForSame}`}
        >
          <span>{category}</span>
          <span>{`${convertToBillion(total_investment)}억 원`}</span>
          <span>{`${convertToBillion(revenue)}억 원`}</span>
          <span>{`${employees}명`}</span>
        </section>
      </li>
    );
  };

  const typeNoRank = () => {
    const {
      id,
      name,
      img,
      description,
      category,
      total_investment,
      revenue,
      employees,
    } = dataObject;

    return (
      <li key={id} className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.noRankSize}`}>
          <article className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </article>
          <span className={styles.columnCompanyDescription}>
            {description}
          </span>
        </section>
        <section className={styles.sameSizeContainer}>
          <span>{category}</span>
          <span>{`${convertToBillion(total_investment)}억 원`}</span>
          <span>{`${convertToBillion(revenue)}억 원`}</span>
          <span>{`${employees}명`}</span>
        </section>
      </li>
    );
  };

  const typeInvest = () => {
    const {
      id,
      rank,
      name,
      img,
      description,
      category,
      investmentVmsTotal,
      investmentInfactTotal,
    } = dataObject;

    return (
      <li key={id} className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.investSize}`}>
          <span className={styles.columnRank}>{`${rank}위`}</span>
          <div className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </div>
          <span className={styles.columnCompanyDescription}>
            {description}
          </span>
          <span className={styles.columnCategory}>{category}</span>
        </section>
        <section
          className={`${styles.sameSizeContainer} ${styles.ivestSizeForSame}`}
        >
          <span>{`${convertToBillion(investmentVmsTotal)}억 원`}</span>
          <span>{`${convertToBillion(investmentInfactTotal)}억 원`}</span>
        </section>
      </li>
    );
  };

  const typeComment = () => {
    const { id, userName, userRank, userTotalInvestment, userComment } =
      dataObject;

    return (
      <li key={id} className={styles.dataPerRowContainer}>
        <section
          className={`${styles.sameSizeContainer} ${styles.commentSizeForSame}`}
        >
          <span>{userName}</span>
          <span>{`${userRank}위`}</span>
          <span>{`${convertToBillion(userTotalInvestment)}억 원`}</span>
        </section>
        <section
          className={`${styles.diffSizeContainer} ${styles.commentSize}`}
        >
          <span className={styles.columnComment}>{userComment}</span>
          <div className={styles.columnNone}>
            <img src={iconKebab} alt="kebab" />
          </div>
        </section>
      </li>
    );
  };

  const typeChoose = () => {
    const {
      id,
      rank,
      name,
      img,
      description,
      category,
      myCompanyChooseCount,
      CompareChoohseCount,
    } = dataObject;

    return (
      <li key={id} className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.investSize}`}>
          <span className={styles.columnRank}>{`${rank}위`}</span>
          <div className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </div>
          <span className={styles.columnCompanyDescription}>
            {description}
          </span>
          <span className={styles.columnCategory}>{category}</span>
        </section>
        <section
          className={`${styles.sameSizeContainer} ${styles.ivestSizeForSame}`}
        >
          <span>{`${formatNumberWithCommas(myCompanyChooseCount)}`}</span>
          <span>{`${formatNumberWithCommas(CompareChoohseCount)}`}</span>
        </section>
      </li>
    );
  };

  if (type === "rank") {
    return typeRank();
  } else if (type === "noRank") {
    return typeNoRank();
  } else if (type === "invest") {
    return typeInvest();
  } else if (type === "comment") {
    return typeComment();
  } else if (type === "choose") {
    return typeChoose();
  }
}

export default CompanyDataPerRow;
