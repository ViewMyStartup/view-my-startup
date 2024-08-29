import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./ModalInvestmentUpdate.module.css";
import deleteIcon from "../assets/images/ic_delete.svg";
import eyeOpenIcon from "../assets/images/ic_password_eye_open.svg";
import eyeCloseIcon from "../assets/images/ic_password_eye_close.svg";
import MediumBtn from "./common/MediumBtn";
import { updateInvestment } from "API/CompanyInvestDetailAPI";
import { useCompanyData } from "context/CompanyDataContext";

const ModalInvestmentUpdate = ({ isOpen, onClose, selectedInvestment }) => {
  const { fetchData } = useCompanyData();
  const [investmentData, setInvestmentData] = useState({
    investorName: "",
    amount: "",
    comment: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (selectedInvestment && isOpen) {
      setInvestmentData({
        investorName: selectedInvestment.userName || "",
        amount: selectedInvestment.userTotalInvestment?.toString() || "",
        comment: selectedInvestment.userComment || "",
        password: "",
      });
    }
  }, [selectedInvestment, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInvestmentSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!investmentData.investorName) {
      newErrors.investorName = "투자자 이름을 입력해 주세요.";
    }

    if (!investmentData.amount || isNaN(Number(investmentData.amount))) {
      newErrors.amount = "올바른 투자 금액을 입력해 주세요.";
    }

    if (!investmentData.comment) {
      newErrors.comment = "코멘트를 입력해 주세요.";
    }

    if (!investmentData.password) {
      newErrors.password = "비밀번호를 입력해 주세요.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      if (!selectedInvestment) throw new Error("선택된 투자가 없습니다.");

      await updateInvestment(selectedInvestment.id, {
        investorName: investmentData.investorName,
        investmentAmount: Number(investmentData.amount),
        investmentComment: investmentData.comment,
        password: investmentData.password,
      });

      alert("투자 정보가 성공적으로 수정되었습니다.");
      onClose();
      await fetchData();
    } catch (error) {
      console.error("투자 수정에 실패했습니다", error);
      setErrors({ form: "투자 수정에 실패했습니다." });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            <h2>투자 정보 수정</h2>
            <img
              src={deleteIcon}
              className={style.deleteLogo}
              alt="deleteLogo"
              onClick={onClose}
            />
          </div>

          <form
            onSubmit={handleInvestmentSubmit}
            className={style.PartitionHug}
          >
            <div className={style.inputWrapper}>
              <label
                htmlFor="investorName"
                className={style.companyColumnsName}
              >
                투자자 이름
              </label>
              <input
                type="text"
                id="investorName"
                name="investorName"
                placeholder="투자자 이름을 입력하세요"
                value={investmentData.investorName}
                onChange={handleChange}
                className={style.input}
              />
              {errors.investorName && (
                <p className={style.errorMessage}>{errors.investorName}</p>
              )}
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="amount" className={style.companyColumnsName}>
                투자 금액
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="투자 금액을 입력하세요"
                value={investmentData.amount}
                onChange={handleChange}
                className={style.input}
              />
              {errors.amount && (
                <p className={style.errorMessage}>{errors.amount}</p>
              )}
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="comment" className={style.companyColumnsName}>
                코멘트
              </label>
              <input
                id="comment"
                name="comment"
                placeholder="코멘트를 입력하세요"
                value={investmentData.comment}
                onChange={handleChange}
                className={style.input}
              />
              {errors.comment && (
                <p className={style.errorMessage}>{errors.comment}</p>
              )}
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="password" className={style.companyColumnsName}>
                비밀번호
              </label>
              <div className={style.passwordWrapper}>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  value={investmentData.password}
                  onChange={handleChange}
                  className={style.input}
                />
                <img
                  src={isPasswordVisible ? eyeCloseIcon : eyeOpenIcon}
                  alt="Toggle visibility"
                  className={style.passwordToggle}
                  onClick={togglePasswordVisibility}
                />
              </div>
              {errors.password && (
                <p className={style.errorMessage}>{errors.password}</p>
              )}
            </div>
            {errors.form && <p className={style.errorMessage}>{errors.form}</p>}
            <MediumBtn
              text={isLoading ? "수정 중..." : "수정하기"}
              type="submit"
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>,
    document.body // 모달을 렌더링할 DOM 노드
  );
};

export default ModalInvestmentUpdate;
