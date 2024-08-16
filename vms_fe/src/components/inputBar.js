import React, { useState } from "react";

const InputBar = () => {
  // 상태 관리
  const [investorName, setInvestorName] = useState(""); // 투자자 이름
  const [investmentAmount, setInvestmentAmount] = useState(""); // 투자 금액
  const [password, setPassword] = useState(""); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [errors, setErrors] = useState({}); // 에러 처리

  return;
  <div className={styles.inputFormContainer}>
    <div className={styles.inputFormTop}>
      <h1 className={styles.h1}>기업에 투자하기</h1>
      <button className={styles.inputTopX}>X</button>
    </div>
    <h2 className={styles.h2}>투자 기업 정보</h2>
    <p>(기업아이콘) 기업명: 여기는 기업 정보 데이터 불러와야함</p>
  </div>;
};

export default InputBar;
