import React, { useState, useEffect } from "react";
import styles from "./CurrentStateInvest.module.css";
import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import DropdownMiddleSize from "../components/common/DropdownMiddleSize";
import usePageHandler from "../hook/usePageHandler";
import DataRowSetRender from "../components/DataRowSetRender";

// Mock data import
import logo1 from "../assets/images/company_logo_1.svg";
import logo2 from "../assets/images/company_logo_2.svg";

function CurrentStateInvest() {
  const { currentPage, totalPages, handlePageChange, setCurrentPage } =
    usePageHandler();

  const [selectedOption, setSelectedOption] = useState(
    "View My Startup 투자 금액 높은순"
  );
  const [sortedData, setSortedData] = useState([]);

  // 테스트를 위한 데이터
  const mockData = [
    {
      id: 1,
      rank: 1,
      name: "에듀넥스트",
      description:
        "에듀넥스트는 인공지능을 활용한 맞춤형 학습 플랫폼을 제공하는 스타트업입니다.",
      category: "에듀테크",
      investmentVmsTotal: 5000000, // 가상의 투자 금액
      investmentInfactTotal: 4500000, // 가상의 실제 누적 투자 금액
      img: logo1, // logoUrl
    },
    {
      id: 2,
      rank: 2,
      name: "코딩마스터",
      description:
        "코딩마스터는 청소년들을 위한 코딩 교육 플랫폼을 운영하는 기업입니다.",
      category: "에듀테크",
      investmentVmsTotal: 3000000, // 가상의 투자 금액
      investmentInfactTotal: 2500000, // 가상의 실제 누적 투자 금액
      img: logo2,
    },
    {
      id: 3,
      rank: 3,
      name: "러닝큐브",
      description:
        "러닝큐브는 게이미피케이션을 적용한 온라인 학습 플랫폼을 제공합니다.",
      category: "에듀테크",
      investmentVmsTotal: 4000000, // 가상의 투자 금액
      investmentInfactTotal: 3200000, // 가상의 실제 누적 투자 금액
      img: logo1,
    },
    {
      id: 4,
      rank: 4,
      name: "스터디온",
      description:
        "스터디온은 실시간 온라인 튜터링 서비스를 제공하는 스타트업입니다.",
      category: "에듀테크",
      investmentVmsTotal: 2000000, // 가상의 투자 금액
      investmentInfactTotal: 6000000, // 가상의 실제 누적 투자 금액
      img: logo2,
    },
    {
      id: 5,
      rank: 5,
      name: "에듀브릭",
      description:
        "에듀브릭은 블록체인 기반 학습 인증 플랫폼을 운영하는 기업입니다.",
      category: "블록체인",
      investmentVmsTotal: 3500000, // 가상의 투자 금액
      investmentInfactTotal: 4600000, // 가상의 실제 누적 투자 금액
      img: logo1,
    },
  ];

  // 투자 현황 페이지에서 사용될 옵션 설정
  const customOptions = [
    "View My Startup 투자 금액 높은순",
    "View My Startup 투자 금액 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  // 옵션 별 정렬
  useEffect(() => {
    let sorted = [...mockData];
    switch (selectedOption) {
      case "View My Startup 투자 금액 높은순":
        sorted.sort((a, b) => b.investmentVmsTotal - a.investmentVmsTotal);
        break;
      case "View My Startup 투자 금액 낮은순":
        sorted.sort((a, b) => a.investmentVmsTotal - b.investmentVmsTotal);
        break;
      case "실제 누적 투자 금액 높은순":
        sorted.sort(
          (a, b) => b.investmentInfactTotal - a.investmentInfactTotal
        );
        break;
      case "실제 누적 투자 금액 낮은순":
        sorted.sort(
          (a, b) => a.investmentInfactTotal - b.investmentInfactTotal
        );
        break;
      default:
        break;
    }
    setSortedData(sorted);
    setCurrentPage(1); // 옵션 바뀌는 경우, 첫 페이지로 돌아감
  }, [selectedOption]);

  // 옵션 변경 핸들러
  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  return (
    <div>
      <PageNav />
      <div className={styles.currentStateInvest}>
        <div className={styles.investStateNav}>
          <p>투자 현황</p>
          <DropdownMiddleSize
            initialLabel={selectedOption}
            options={customOptions}
            handleOptionChange={handleDropdownChange}
          />
        </div>
        <div className={styles.investCompanyList}>
          <DataRowSetRender
            type="invest"
            dataList={sortedData.slice(
              (currentPage - 1) * 10,
              currentPage * 10
            )}
          />
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageClick}
            hasNext={currentPage < totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentStateInvest;
