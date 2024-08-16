import React, { useState } from "react";

const InputBar = () => {
  // 상태 관리
  const [investorName, setInvestorName] = useState(""); // 투자자 이름
  const [investmentAmount, setInvestmentAmount] = useState(""); // 투자 금액
  const [investmentComment, setInvestmentComment] = useState(""); // 투자 코멘트
  const [password, setPassword] = useState(""); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [errors, setErrors] = useState({}); // 에러 처리

  return <div className={styles.inputFormContainer}></div>;
};

export default InputBar;
