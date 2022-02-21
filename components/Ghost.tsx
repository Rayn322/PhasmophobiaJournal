import { GhostType } from '../enums/GhostType';
import styles from '../styles/Ghost.module.css';
import ExpandingButton from './ExpandingButton';

const Ghost = ({ type }: { type: GhostType }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{type}</h1>
      <div className={styles.evidence}>
        <ExpandingButton />
        <p className={styles.text}>No footsteps after stepping in salt.</p>
      </div>
    </div>
  );
};

export default Ghost;
