import { EvidenceType } from './EvidenceType';
import { GhostType } from './GhostType';

export interface GhostObject {
  name: GhostType;
  evidence: EvidenceType[];
  abilities: string[];
  isFast: boolean;
  maxHuntSanity: number;
  huntDelay: number;
  smudgeHuntDelay: number;
}
