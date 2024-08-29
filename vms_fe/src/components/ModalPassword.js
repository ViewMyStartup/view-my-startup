import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MediumBtn from "./common/MediumBtn.js";
import styles from "./ModalPassword.module.css";
import eyeOpenIcon from "../assets/images/ic_password_eye_open.svg";
import eyeCloseIcon from "../assets/images/ic_password_eye_close.svg";
import deleteIcon from "../assets/images/ic_delete.svg";
import { deleteInvestment } from "API/CompanyInvestDetailAPI";
import { useCompanyData } from "context/CompanyDataContext";

const ModalPassword = ({ isOpen, onClose, investmentId }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { fetchData } = useCompanyData();

  useEffect(() => {
    // 모달이 열릴 때 스크롤을 비활성화
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    // 모달이 닫힐 때 스크롤을 활성화
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!password) {
      newErrors.password = "비밀번호는 필수로 입력해주세요.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      await deleteInvestment(investmentId, password);
      alert("삭제가 성공적으로 완료되었습니다");
      onClose();
      await fetchData();
    } catch (error) {
      console.error("비밀번호 인증 실패", error);
      setErrors({ password: "비밀번호가 올바르지 않습니다." });
    } finally {
      setIsLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={deleteIcon} alt="닫기" />
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
                src={isPasswordVisible ? eyeCloseIcon : eyeOpenIcon}
                alt="Toggle visibility"
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              />
            </div>
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password}</p>
            )}
          </div>
          <MediumBtn
            text={isLoading ? "삭제 중..." : "삭제하기"}
            type="submit"
            disabled={isLoading}
          />
        </form>
      </div>
    </div>,
    document.querySelector("[data-modal-container]")
  );
};

export default ModalPassword;
