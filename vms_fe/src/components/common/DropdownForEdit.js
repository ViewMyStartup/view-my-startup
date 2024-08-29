import React, { useState, useRef, useEffect } from "react";
import styles from "./DropdownMenu.module.css";

function DropdownMenu({ dataObject, onOpenModal }) {
  const { activeDropdownId, onDropdownToggle } = useDropdown();

  const handleDropdownToggle = () => {
    onDropdownToggle(dataObject.id);
  };

  options = ["수정하기", "삭제하기"];

  //드랍다운 참조값
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleOptionChange(option);
  };

  // 이벤트 리스너 등록
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      {activeDropdownId === dataObject.id && (
        <ul className={`${styles.dropdownMenu} ${styles.dropdownMenuOpen}`}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownMenuItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
