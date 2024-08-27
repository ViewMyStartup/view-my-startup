import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CompanyDataPerRow.module.css";
import ModalPassword from "../ModalPassword";

//이미지
import iconKebab from "../../assets/images/ic_kebab.svg";

function CompanyDataPerRow({
  type = "rank",
  dataObject = {},
  index,
  currentPage,
  limit = 10,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // 모달 열기 함수
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setDropdownVisible(false); // 모달 열릴 때 드롭다운 닫기
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      totalInvestment,
      revenue,
      employees,
    } = dataObject;

    return (
      <li className={styles.dataPerRowContainer}>
        <Link to={`/id/${id}`}>
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
            <span>{`${convertToBillion(totalInvestment)}억 원`}</span>
            <span>{`${convertToBillion(revenue)}억 원`}</span>
            <span>{`${employees}명`}</span>
          </section>
        </Link>
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
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.noRankSize}`}>
          <article className={styles.companyInfoContainer}>
            <img src={img} alt="기업 이미지" />
            <span>{name}</span>
          </article>
          <span className={styles.columnCompanyDescription}>{description}</span>
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
      logoUrl, // img를 logoUrl로 수정함
      description,
      category,
      investmentVmsTotal,
      investmentInfactTotal,
    } = dataObject;

    return (
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.investSize}`}>
          <span className={styles.columnRank}>{`${rank}위`}</span>
          <div className={styles.companyInfoContainer}>
            <img src={logoUrl} alt="기업 이미지" />
            <span>{name}</span>
          </div>
          <span className={styles.columnCompanyDescription}>{description}</span>
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
      <li className={styles.dataPerRowContainer}>
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
              onClick={toggleDropdown}
              className={styles.kebabIcon}
            />
            {dropdownVisible && (
              <div className={styles.dropdownMenu}>
                <button
                  onClick={() =>
                    alert("수정하기 클릭, 추가 로직 필요시 추가예정")
                  }
                >
                  수정하기
                </button>
                <button onClick={handleOpenModal}>삭제하기</button>
              </div>
            )}
          </div>
        </section>

        {isModalOpen && (
          <ModalPassword
            onClose={handleCloseModal}
            onDelete={() => {
              handleCloseModal();
            }}
          />
        )}
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
      <li className={styles.dataPerRowContainer}>
        <section className={`${styles.diffSizeContainer} ${styles.investSize}`}>
          <span className={styles.columnRank}>{`${
            index + 1 + (currentPage - 1) * limit
          }위`}</span>
          <div className={styles.companyInfoContainer}>
            <img src={logoUrl} alt="기업 이미지" />
            <span>{name}</span>
          </div>
          <span className={styles.columnCompanyDescription}>{description}</span>
          <span className={styles.columnCategory}>{category}</span>
        </section>
        <section
          className={`${styles.sameSizeContainer} ${styles.ivestSizeForSame}`}
        >
          <span>{`${formatNumberWithCommas(mySelectionCount)}`}</span>
          <span>{`${formatNumberWithCommas(CompareSelectionCount)}`}</span>
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
