import React, { useState } from "react";

const InputBar = () => {
  // 상태 관리
  const [investorName, setInvestorName] = useState(""); // 투자자 이름
  const [investmentAmount, setInvestmentAmount] = useState(""); // 투자 금액
  const [password, setPassword] = useState(""); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [errors, setErrors] = useState({}); // 에러 처리

  return (
    <div className={styles.inputFormContainer}>
      <div className={styles.inputFormTop}>
        <h1 className={styles.h1}>기업에 투자하기</h1>
        <button className={styles.inputTopX}>X</button>
      </div>
      <h2 className={styles.h2}>투자 기업 정보</h2>
      <p>(기업아이콘) 기업명: 여기는 기업 정보 데이터 불러와야함</p>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <div className={styles.formGroup}>
          <label htmlFor="investorName" className={styles.label}>
            투자자 이름
          </label>
          <input
            type="text"
            id="investorName"
            placeholder="투자자 이름을 입력해주세요"
            value={investorName}
            onChange={(e) => setInvestorName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="investmentAmount" className={styles.label}>
            투자 금액
          </label>
          <input
            type="text"
            id="investmentAmount"
            placeholder="투자 금액을 숫자로 입력해주세요"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            className={styles.input}
          />
        </div>
      </form>
    </div>
  );
};

export default InputBar;
