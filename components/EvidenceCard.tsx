import { Dispatch, SetStateAction } from 'react';
import styles from '../styles/MainCard.module.css';
import { ButtonValue } from '../types/ButtonValue';
import { EvidenceType } from '../types/EvidenceType';
import ExpandedButton from './ExpandedButton';

interface EvidenceCardProps {
  possibleEvidence: EvidenceType[];
  setPossibleEvidence: Dispatch<SetStateAction<EvidenceType[]>>;
}

const EvidenceCard = ({ possibleEvidence, setPossibleEvidence }: EvidenceCardProps) => {
  const handleClick = (evidenceType: EvidenceType, buttonValue: ButtonValue) => {
    if (buttonValue === ButtonValue.yes && !possibleEvidence.includes(evidenceType)) {
      setPossibleEvidence([...possibleEvidence, evidenceType]);
    } else if (
      (buttonValue === ButtonValue.no || buttonValue === ButtonValue.maybe) &&
      possibleEvidence.includes(evidenceType)
    ) {
      setPossibleEvidence(possibleEvidence.filter((evidence) => evidence !== evidenceType));
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Evidence</h1>
      <div className={styles.list}>
        <div className={styles.evidence}>
          <p className={styles.text}>D.O.T.S. Projector</p>
          <ExpandedButton evidenceType={EvidenceType.DotsProjector} handleClick={handleClick} />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>EMF Level 5</p>
          <ExpandedButton evidenceType={EvidenceType.EMFLevel5} handleClick={handleClick} />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Fingerprints</p>
          <ExpandedButton evidenceType={EvidenceType.Fingerprints} handleClick={handleClick} />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Freezing Temperatures</p>
          <ExpandedButton
            evidenceType={EvidenceType.FreezingTemperatures}
            handleClick={handleClick}
          />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Ghost Orbs</p>
          <ExpandedButton evidenceType={EvidenceType.GhostOrbs} handleClick={handleClick} />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Ghost Writing</p>
          <ExpandedButton evidenceType={EvidenceType.GhostWriting} handleClick={handleClick} />
        </div>

        <div className={styles.evidence}>
          <p className={styles.text}>Spirit Box</p>
          <ExpandedButton evidenceType={EvidenceType.SpiritBox} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default EvidenceCard;
