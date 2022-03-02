import styles from '../styles/MainCard.module.css';
import ExpandedButton from './ExpandedButton';

const EventsCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Events</h1>
      <div className={styles.list}>
        <div className={styles.evidence}>
          <p className={styles.text}>D.O.T.S. Projector</p>
          <ExpandedButton />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>EMF Level 5</p>
          <ExpandedButton />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Fingerprints</p>
          <ExpandedButton />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Freezing Temperatures</p>
          <ExpandedButton />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Ghost Orbs</p>
          <ExpandedButton />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Ghost Writing</p>
          <ExpandedButton />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Spirit Box</p>
          <ExpandedButton />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
