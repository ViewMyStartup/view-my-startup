import React, { useState } from "react";
import styles from "./inputBar.module.css";

const InputBar = () => {
  // 상태 관리
  const [investorName, setInvestorName] = useState(""); // 투자자 이름
  const [investmentAmount, setInvestmentAmount] = useState(""); // 투자 금액
  const [investmentComment, setInvestmentComment] = useState(""); // 투자 코멘트
  const [password, setPassword] = useState(""); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [errors, setErrors] = useState({}); // 에러 처리

  // 투자 금액 숫자로만 입력하도록 설정
  const handleInvestmentAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      // 숫자만 입력
      setInvestmentAmount(value);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // 비밀번호 유효성 검사
    if (!password) {
      newErrors.password = "비밀번호는 필수로 입력해주세요.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인은 필수로 입력해주세요.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword =
        "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
    }

    // 투자자 이름 유효성 검사
    if (!investorName) {
      newErrors.investorName = "이름은 필수로 입력해주세요.";
    } else if (/^\d+$/.test(investorName)) {
      // 입력값이 숫자로만 이루어져 있는 경우
      newErrors.investorName = "이름은 한글 또는 영어로 입력해주세요.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 폼 제출 추가
    console.log({
      investorName,
      investmentAmount,
      investmentComment,
      password,
      confirmPassword,
    });
  };

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
        {errors.investorName && (
          <p className={styles.errorMessage}>{errors.investorName}</p>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="investmentAmount" className={styles.label}>
            투자 금액
          </label>
          <input
            type="text"
            id="investmentAmount"
            placeholder="투자 금액을 숫자로 입력해주세요"
            value={investmentAmount}
            onChange={handleInvestmentAmountChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${styles.passwordInput}`}
          />
        </div>
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password}</p>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`${styles.input} ${styles.passwordInput}`}
          />
          {errors.confirmPassword && (
            <p className={styles.errorMessage}>{errors.confirmPassword}</p>
          )}
        </div>
        <div className={styles.inputButtons}>
          <button className={styles.cancelButton}>취소</button>
          <button className={styles.submitInvestButton} type="submit">
            투자하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
