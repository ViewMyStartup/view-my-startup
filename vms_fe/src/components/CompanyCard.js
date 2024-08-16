import styles from "./CompanyCard.module.css";
import deleteIcon from "../assets/images/ic_minus.svg";

const CompanyCard = ({ name, category, logoSrc, onDelete }) => {
  return (
    <div className={styles.companyCard}>
      <img
        src={deleteIcon}
        alt="delete button"
        className={styles.deleteButton}
        onClick={onDelete}
      />
      <img src={logoSrc} alt={`${name} logo`} className={styles.logo} />
      <p className={styles.companyName}>{name}</p>
      <p className={styles.companyCategory}>{category}</p>
    </div>
  );
};

export default CompanyCard;
