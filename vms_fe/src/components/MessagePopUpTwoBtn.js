import styles from "./MessagePopUpTwoBtn.module.css";
import LargeBtn from "./common/LargeBtn.js";
import OutlineBtn from "./common/OutlineBtn.js";
import closeButton from "../assets/images/ic_delete.svg";

const MessagePopUpTwoBtn = ({ text, onClose, onConfirm, onCancel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src={closeButton}
          alt="close button"
          className={styles.closeButton}
          onClick={onClose}
        />
        <p className={styles.modalContent}>{text}</p>
        <div className={styles.buttonContainer}>
          <OutlineBtn text="취소" onClick={onCancel}></OutlineBtn>
          <LargeBtn text="확인" onClick={onConfirm}></LargeBtn>
        </div>
      </div>
    </div>
  );
};

export default MessagePopUpTwoBtn;
