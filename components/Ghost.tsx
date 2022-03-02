import { GhostType } from '../enums/GhostType';
import styles from '../styles/GhostCard.module.css';
import ExpandedButton from './ExpandedButton';

const Ghost = ({ type }: { type: GhostType }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{type}</h1>
      <div className={styles.evidence}>
        <ExpandedButton />
        <p className={styles.text}>No footsteps after stepping in salt.</p>
      </div>
    </div>
  );
};

export default Ghost;
