import React, { useEffect, useRef } from "react";
import styles from "./DropdownForEdit.module.css";

function DropdownForEdit({ position, onClose, onEdit, onDelete, toggleRef }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        (!toggleRef || !toggleRef.current.contains(event.target))
      ) {
        onClose(); // 모달 닫기
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, toggleRef]);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdownContainer}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: 1000,
      }}
    >
      <ul className={styles.dropdownMenu}>
        <li className={styles.menuItem} onClick={onEdit}>
          수정하기
        </li>
        <li className={styles.menuItem} onClick={onDelete}>
          삭제하기
        </li>
      </ul>
    </div>
  );
}

export default DropdownForEdit;
