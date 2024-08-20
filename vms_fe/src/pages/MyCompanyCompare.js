import React from "react";
import styles from "./MyCompanyCompare.module.css";
import PageNav from "components/PageNav";
import MediumBtn from "components/common/MediumBtn.js";
import icCircle from "../assets/images/ic_circle.svg";
import icPlus from "../assets/images/ic_plus.svg";
import icRestart from "../assets/images/ic_restart.svg";

function MyCompanyCompare() {
  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>나의 기업을 선택해 주세요!</h1>
          <div className={styles.resetBtnWrapper}>
            <MediumBtn
              text={
                <>
                  <img src={icRestart} alt="restart" className={styles.icRestart} />
                  &nbsp;전체 초기화
                </>
              }
              disabled={true}  // 초기화 버튼 비활성화
            />
          </div>
        </div>
        <div className={styles.addMyCompany}>
          <div className={styles.innerBox}>
            <div className={styles.addButtonWrapper}>
              <div className={styles.addButton}>
                <img src={icCircle} alt="circle" className={styles.icCircle} />
                <img src={icPlus} alt="plus" className={styles.icPlus} />
              </div>
              <p className={styles.addText}>기업 추가</p>
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <MediumBtn text="기업 비교하기" disabled={true} /> {/* 버튼 비활성화 및 텍스트 변경 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCompanyCompare;

