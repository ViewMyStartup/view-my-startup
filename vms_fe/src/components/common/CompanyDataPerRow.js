import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./CompanyDataPerRow.module.css";
import iconKebab from "../../assets/images/ic_kebab.svg";

function CompanyDataPerRow({
  type = "rank",
  dataObject = {},
  index,
  currentPage,
  limit = 10,
  myCompanyId,
  activeDropdownId,  // 현재 열려있는 드롭다운의 ID를 확인하기 위해 추가
  onOpenModal, // 모달 열기 핸들러
  onCloseModal // 모달 닫기 핸들러
}) {
  const kebabIconRef = useRef(null);
  const isMyCompany = dataObject.id === myCompanyId;

  const handleKebabClick = () => {
    if (activeDropdownId === dataObject.id) {
      // 모달이 열려 있는 경우, 모달을 닫음
      onCloseModal();
    } else {
      const rect = kebabIconRef.current.getBoundingClientRect();
      onOpenModal("menu", dataObject, { x: rect.left, y: rect.bottom }, kebabIconRef);
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
        <Link to={`/id/${id}`}>
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
        <Link to={`/id/${id}`}>
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
              src={iconKebab}
              alt="kebab"
              ref={kebabIconRef} // 케밥 아이콘 참조 전달
              onClick={handleKebabClick} // 클릭 시 모달 열기/닫기 핸들러 호출
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
        <Link to={`/id/${id}`}>
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
