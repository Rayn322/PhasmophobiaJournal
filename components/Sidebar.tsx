import { EvidenceType } from '../types/EvidenceType';
import { GhostType } from '../types/GhostType';
import styles from '../styles/Sidebar.module.css';
import Ghost from './Ghost';
import ghostsJson from '../ghosts.json';
import { GhostInfo, GhostList } from '../types/GhostList';

interface SidebarProps {
  possibleEvidence: EvidenceType[];
  confirmedEvidence: EvidenceType[];
}

const Sidebar = ({ possibleEvidence, confirmedEvidence }: SidebarProps) => {
  const getPossibleGhosts = () => {
    const data: GhostList = JSON.parse(JSON.stringify(ghostsJson));
    const possibleGhosts: string[] = [];

    data.ghosts.forEach((ghost: GhostInfo) => {
      // check if every possible evidence is included in the ghost's evidence
      if (possibleEvidence.every((evidence: EvidenceType) => ghost.evidence.includes(evidence))) {
        possibleGhosts.push(ghost.name);
      }
    });

    return possibleGhosts;
  };

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Possible Ghosts</h1>
      {getPossibleGhosts().map((ghost) => <Ghost key={ghost} type={ghost} />)}
    </div>
  );
};

export default Sidebar;
