import React, { useState } from "react";
import styles from "./InputBar.module.css";
import eyeOpenIcon from "assets/images/ic_password_eye_open.svg";
import eyeSlashIcon from "assets/images/ic_password_eye_close.svg";

const InputBar = ({ onClose }) => {
  const [investorName, setInvestorName] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentComment, setInvestmentComment] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInvestmentAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInvestmentAmount(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!password) {
      newErrors.password = "비밀번호는 필수로 입력해주세요.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인은 필수로 입력해주세요.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword =
        "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
    }

    if (!investorName) {
      newErrors.investorName = "이름은 필수로 입력해주세요.";
    } else if (/^\d+$/.test(investorName)) {
      newErrors.investorName = "이름은 한글 또는 영어로 입력해주세요.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({
      investorName,
      investmentAmount,
      investmentComment,
      password,
      confirmPassword,
    });

    onClose();
  };

  // 비밀번호 가시성 토글 함수
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputFormContainer}>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        {/* 투자자 이름 입력란 */}
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

        {/* 투자 금액 입력란 */}
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

        {/* 투자 코멘트 입력란 */}
        <div className={styles.formGroup}>
          <label htmlFor="investmentComment" className={styles.label}>
            투자 코멘트
          </label>
          <input
            type="text"
            id="investmentComment"
            placeholder="코멘트를 입력해주세요"
            value={investmentComment}
            onChange={(e) => setInvestmentComment(e.target.value)}
            className={`${styles.input} ${styles.investmentComment}`}
          />
        </div>

        {/* 비밀번호 입력란 */}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <div className={styles.passwordInputWrapper}>
            <input
              type={showPassword ? "text" : "password"} // 비밀번호 입력란의 type 변경
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.input} ${styles.passwordInput}`}
            />
            <img
              src={showPassword ? eyeSlashIcon : eyeOpenIcon} // 가시성에 따른 아이콘 변경
              alt="비밀번호 가시성 토글"
              onClick={togglePasswordVisibility}
              className={styles.passwordToggleIcon}
            />
          </div>
        </div>
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password}</p>
        )}

        {/* 비밀번호 확인 입력란 */}
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            비밀번호 확인
          </label>
          <div className={styles.passwordInputWrapper}>
            <input
              type={showPassword ? "text" : "password"} // 비밀번호 확인 입력란의 type 변경
              id="confirmPassword"
              placeholder="비밀번호를 다시 한번 입력해주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`${styles.input} ${styles.passwordInput}`}
            />
            <img
              src={showPassword ? eyeSlashIcon : eyeOpenIcon} // 가시성에 따른 아이콘 변경
              alt="비밀번호 가시성 토글"
              onClick={togglePasswordVisibility}
              className={styles.ConfirmPasswordToggleIcon}
            />
          </div>
          {errors.confirmPassword && (
            <p className={styles.errorMessage}>{errors.confirmPassword}</p>
          )}
        </div>

        <div className={styles.inputButtons}>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={onClose}
          >
            취소
          </button>
          <button className={styles.submitInvestButton} type="submit">
            투자하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
