import styles from '../styles/MainCard.module.css';

const EventsCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Events</h1>
      <div className={styles.list}>
        <div className={styles.evidence}>
          <p className={styles.text}>Highest Hunt Sanity</p>
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Normal Hunt Delay</p>
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Smudge Hunt Delay</p>
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Ghost Event Types</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
