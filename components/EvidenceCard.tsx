import styles from '../styles/MainCard.module.css';
import ExpandedButton from './ExpandedButton';

const EvidenceCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Evidence</h1>
      <div className={styles.list}>
        <div className={styles.evidence}>
          <p className={styles.text}>D.O.T.S. Projector</p>
          <ExpandedButton />
        </div>
      </div>
    </div>
  );
};

export default EvidenceCard;
