import { EvidenceType } from '../types/EvidenceType';
import { GhostType } from '../types/GhostType';
import styles from '../styles/Sidebar.module.css';
import Ghost from './Ghost';
import ghostsJson from '../ghosts.json';

interface SidebarProps {
  possibleEvidence: EvidenceType[];
  confirmedEvidence: EvidenceType[];
}

const Sidebar = ({ possibleEvidence, confirmedEvidence }: SidebarProps) => {

  const getPossibleGhosts = () => {
    const possibleGhosts: GhostType[] = [];
    return possibleGhosts;
  }

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Possible Ghosts</h1>
      <Ghost type={GhostType.Banshee} />
      <Ghost type={GhostType.Demon} />
      <Ghost type={GhostType.Hantu} />
      <Ghost type={GhostType.Yokai} />
      <Ghost type={GhostType.Revenant} />
      <Ghost type={GhostType.Jinn} />
    </div>
  );
};

export default Sidebar;
