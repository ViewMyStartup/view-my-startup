import React, { useState } from "react";
import MediumBtn from "./common/MediumBtn.js";
import styles from "./ModalPassword.module.css";
import eyeIcon from "../assets/images/ic_password_eye.svg";



const ModalPassword = ({ onClose }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({}); // 에러 상태 관리

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // 비밀번호 유효성 검사
    if (!password) {
      newErrors.password = "비밀번호는 필수로 입력해주세요.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 비밀번호 제출 처리 로직
    console.log("입력한 비밀번호:", password);

    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalHeader}>삭제 권한 인증</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <div className={styles.passwordWrapper}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="패스워드를 입력해주세요"
                value={password}
                onChange={handlePasswordChange}
                className={styles.input}
              />
              <img
                src={eyeIcon}
                alt="Toggle visibility"
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              />
            </div>
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password}</p>
            )}
          </div>
          <MediumBtn text="삭제하기" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default ModalPassword;

