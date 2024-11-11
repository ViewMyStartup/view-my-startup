import React, { useRef } from "react";
import Link from "next/link";
import styles from "../common/CompanyDataPerRow.module.css";

function CompanyDataPerRow({
  type = "rank",
  dataObject = {},
  index,
  currentPage,
  limit = 10,
  myCompanyId,
  activeDropdownId,
  onOpenModal,
  onCloseModal
}) {
  const kebabIconRef = useRef(null);
  const isMyCompany = dataObject.id === myCompanyId;

  const handleKebabClick = () => {
    if (activeDropdownId === dataObject.id) {
      onCloseModal();
    } else {
      const rect = kebabIconRef.current.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const adjustedX = rect.left + scrollX;
      const adjustedY = rect.bottom + scrollY + 1;

      onOpenModal("menu", dataObject, { x: adjustedX, y: adjustedY }, kebabIconRef);
    }
  };

  const convertToBillion = (number) => {
    return parseFloat((number / 100000000).toFixed(2));
  };

  function formatNumberWithCommas(number) {
    return number.toLocaleString();
  }

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
        className={`${styles.dataPerRowContainer} ${
          isMyCompany ? styles.myCompanyPerRow : ""
        }`}
      >
        <Link href={`/id/${id}`}>
          <section className={`${styles.diffSizeContainer} ${styles.rankSize}`}>
            <span className={styles.columnRank}>{`${rank}위`}</span>
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
            <span>{`${convertToBillion(totalInvestment)}억 원`}</span>
            <span>{`${convertToBillion(revenue)}억 원`}</span>
            <span>{`${employees}명`}</span>
          </section>
        </Link>
      </li>
    );
  };

  const typeInvest = () => {
    const {
      id,
      rank,
      name,
      logoUrl,
      description,
      category,
      virtualInvestment,
      totalInvestment,
    } = dataObject;

    return (
      <li
        className={`${styles.dataPerRowContainer} ${
          isMyCompany ? styles.myCompany : ""
        }`}
      >
        <Link href={`/id/${id}`}>
          <section
            className={`${styles.diffSizeContainer} ${styles.investSize}`}
          >
            <span className={styles.columnRank}>{`${rank}위`}</span>
            <div className={styles.companyInfoContainer}>
              <img src={logoUrl} alt="기업 이미지" />
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
            <span>{`${convertToBillion(virtualInvestment)}억 원`}</span>
            <span>{`${convertToBillion(totalInvestment)}억 원`}</span>
          </section>
        </Link>
      </li>
    );
  };

  const typeComment = () => {
    const { userName, userRank, userTotalInvestment, userComment } =
      dataObject;

    return (
      <li
        className={`${styles.dataPerRowContainer} ${
          isMyCompany ? styles.myCompany : ""
        }`}
      >
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
          <div className={styles.dropdownContainer}>
            <img
              src="/assets/images/ic_kebab.svg"
              alt="kebab"
              ref={kebabIconRef}
              onClick={handleKebabClick}
              className={styles.kebabIcon}
            />
          </div>
        </section>
      </li>
    );
  };

  const typeChoose = () => {
    const {
      id,
      name,
      logoUrl,
      description,
      category,
      mySelectionCount,
      CompareSelectionCount,
    } = dataObject;

    return (
      <li
        className={`${styles.dataPerRowContainer} ${
          isMyCompany ? styles.myCompany : ""
        }`}
      >
        <Link href={`/id/${id}`}>
          <section
            className={`${styles.diffSizeContainer} ${styles.investSize}`}
          >
            <span className={styles.columnRank}>{`${
              index + 1 + (currentPage - 1) * limit
            }위`}</span>
            <div className={styles.companyInfoContainer}>
              <img src={logoUrl} alt="기업 이미지" />
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
            <span>{`${formatNumberWithCommas(mySelectionCount)}`}</span>
            <span>{`${formatNumberWithCommas(CompareSelectionCount)}`}</span>
          </section>
        </Link>
      </li>
    );
  };

  if (type === "rank") {
    return typeRank();
  } else if (type === "invest") {
    return typeInvest();
  } else if (type === "comment") {
    return typeComment();
  } else if (type === "choose") {
    return typeChoose();
  }
}

export default CompanyDataPerRow;
