import styles from "./MessagePopUpOneBtn.module.css";
import LargeBtn from "./common/LargeBtn.js";

const MessagePopUpOneBtn = ({ text, onClose, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src="/assets/images/ic_delete.svg"
          alt="close button"
          className={styles.closeButton}
          onClick={onClose}
        />
        <p className={styles.modalContent}>{text}</p>
        <LargeBtn text="확인" onClick={onConfirm}></LargeBtn>
      </div>
    </div>
  );
};

export default MessagePopUpOneBtn;
