import React from "react";
import Dropdown from "./Dropdown";


const DropdownComponent = () => {
  const options = [
    "누적 투자금액 높은순",
    "누적 투자금액 낮은순",
    "매출액 높은순",
    "매출액 낮은순",
    "고용 인원 많은순",
    "고용 인원 적은순",
  ];

  return (
    <div className="dropdown-component">
      <Dropdown initialLabel="누적 투자금액 높은순" options={options} />
    </div>
  );
};

export default DropdownComponent;

