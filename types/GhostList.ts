import { EvidenceType } from './EvidenceType';

export interface GhostList {
  ghosts: GhostInfo[];
}

export interface GhostInfo {
  name: string;
  evidence: EvidenceType[];
  abilities: string[];
  isFast: boolean;
  maxHuntSanity: number;
  huntDelay: number;
  smudgeHuntDelay: number;
}
