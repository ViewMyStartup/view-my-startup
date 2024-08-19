import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import styles from "./PageNav.module.css";

//이미지
import logo from "../assets/images/logo_desktop_tablet.svg";

function PageNav() {
  const location = useLocation();   // 현재 페이지 경로를 불러오는 훅

  const BoardList = () => {
    // 추후 라우터 돔 추가 후에 현재 페이지 경로를 비교해서 BoardList를 Active 스타일 적용할 수 있도록 미리 작성
    // 경로 수정 필요
    return (
      <ul className={styles.boardList}>
        <li>
          <Link to="/mycompany" className={location.pathname === "/mycompany" ? styles.boardActive : ""}>
          나의 기업 비교
          </Link>
        </li>
        <li>
          <Link to="/compare" className={location.pathname === "/compare" ? styles.boardActive : ""}>
          비교 현황
          </Link>
        </li>
        <li>
          <Link to="/investinfo" className={location.pathname === "/investinfo" ? styles.boardActive : ""}>
          투자 현황
          </Link>
        </li>
      </ul>
    );
  };

  return (
    // 이미지 클릭 시 홈으로 돌아가게 하는 Link 사전 추가
    <nav className={styles.outlineContain}>
      <section className={styles.pageNavBox}>
        {/* <Link to="/"> */}
        <img src={logo} alt="logo" />
        {/* </Link> */}
        <BoardList />
      </section>
    </nav>
  );
}

export default PageNav;
