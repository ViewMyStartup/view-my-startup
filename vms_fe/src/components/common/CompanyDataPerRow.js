import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CompanyDataPerRow.module.css";
import ModalInvestmentUpdate from "../ModalInvestmentUpdate";
import ModalPassword from "../ModalPassword";

// 이미지
import iconKebab from "../../assets/images/ic_kebab.svg";

function CompanyDataPerRow({
  type = "rank",
  dataObject = {},
  index,
  currentPage,
  limit = 10,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOpenModal = (type, id) => {
    if (type === "password") {
      setIsModalOpen(true);
      setSelectedId(id);
    } else if (type === "update") {
      setSelectedInvestment(dataObject);
      setIsUpdateModalOpen(true);
    }
    setDropdownVisible(false); // 모달 열릴 때 드롭다운 닫기
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
    setSelectedId(null);
    setSelectedInvestment(null);
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
      logoUrl,
      description,
      category,
      virtualInvestment, // 수정된 필드
      totalInvestment, // 수정된 필드
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
          <span>{`${convertToBillion(virtualInvestment)}억 원`}</span>
          <span>{`${convertToBillion(totalInvestment)}억 원`}</span>
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
                <button onClick={() => handleOpenModal("update", id)}>
                  수정하기
                </button>
                <button onClick={() => handleOpenModal("password", id)}>
                  삭제하기
                </button>
              </div>
            )}
          </div>
        </section>

        {isModalOpen && (
          <ModalPassword
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            investmentId={selectedId}
          />
        )}

        {isUpdateModalOpen && selectedInvestment && (
          <ModalInvestmentUpdate
            isOpen={isUpdateModalOpen}
            onClose={handleCloseModal}
            selectedInvestment={selectedInvestment}
          />
        )}
      </li>
    );
  };

  const typeChoose = () => {
    const {
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
