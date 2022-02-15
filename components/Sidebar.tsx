import styles from '../styles/Sidebar.module.css';
import Ghost from './Ghost';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Possible Ghosts</h1>
      <Ghost />
    </div>
  );
};

export default Sidebar;
