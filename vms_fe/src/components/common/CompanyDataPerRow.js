import React from "react";
import styles from "./CompanyDataPerRow.module.css";

//이미지
import iconKebab from "../../assets/images/ic_kebab.svg"

function CompanyDataPerRow({ type = "rank", dataObject = {} }) {
  //단위 변환
  const convertToBillion = (number) => {
    return number / 100000000
  }

  //텍스트 자르기 (사전 작성)
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  const typeRank = (data) => {
    const {
      rank,
      name,
      img,
      description,
      category,
      total_investment,
      revenue,
      employees,
    } = data;

    return (
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.rankSize}`}>
          <span className={styles.columnRank}>{`${rank}위`}</span>
          <article className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </article>
          <span className={styles.columnCompanyDescription}>{truncateText(description, 58)}</span>
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

  const typeNoRank = (data) => {
    const {
      name,
      img,
      description,
      category,
      total_investment,
      revenue,
      employees,
    } = data;

    return (
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.noRankSize}`}>
          <article className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </article>
          <span className={styles.columnCompanyDescription}>{truncateText(description, 58)}</span>
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

  const typeInvest = (data) => {
    const {
      rank,
      name,
      img,
      description,
      category,
      total_investment_vms,
      total_investment_infact,
    } = data;

    return (
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.investSize}`}>
          <span className={styles.columnRank}>{`${rank}위`}</span>
          <div className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </div>
          <span className={styles.columnCompanyDescription}>{truncateText(description, 58)}</span>
          <span className={styles.columnCategory}>{category}</span>
        </section>
        <section className={`${styles.sameSizeContainer} ${styles.ivestSizeForSame}`}>
          <span>{`${convertToBillion(total_investment_vms)}억 원`}</span>
          <span>{`${convertToBillion(total_investment_infact)}억 원`}</span>
        </section>
      </li>
    );
  };

  const typeComment = () => {
    const { userName, userRank, user_total_investment, user_comment } = userData;

    return (
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.sameSizeContainer} ${styles.commentSizeForSame}`}>
          <span>{userName}</span>
          <span>{`${userRank}위`}</span>
          <span>{`${convertToBillion(user_total_investment)}억 원`}</span>
        </section>
        <section className={`${styles.diffSizeContainer} ${styles.commentSize}`}>
          <span className={styles.columnComment}>{user_comment}</span>
          <div className={styles.columnNone}>
            <img src={iconKebab} alt="kebab" />
          </div>
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
  }
}

export default CompanyDataPerRow;

