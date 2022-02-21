import styles from '../styles/MainCard.module.css';
import ExpandedButton from './ExpandedButton';

const EvidenceCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Evidence</h1>
      <div className={styles.evidence}>
        <div className={styles.item}>
          <p className={styles.text}>No footsteps after stepping in salt.</p>
          <ExpandedButton />
        </div>
      </div>
    </div>
  );
};

export default EvidenceCard;
