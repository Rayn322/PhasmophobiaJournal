import { useState } from 'react';
import { ButtonValue } from '../types/ButtonValue';
import styles from '../styles/ThreeButtons.module.css';
import { EvidenceType } from '../types/EvidenceType';

interface ExpandedButtonProps {
  evidenceType?: EvidenceType;
  handleClick?: (evidenceType: EvidenceType, buttonValue: ButtonValue) => void;
}

const ExpandedButton = ({ evidenceType, handleClick }: ExpandedButtonProps) => {
  const [selectedButton, setSelectedButtion] = useState(ButtonValue.maybe);

  // maybe improve usage of evidenceType to improve reusability
  const onButtonClick = (value: ButtonValue) => {
    setSelectedButtion(value);
    if (handleClick && evidenceType) {
      handleClick(evidenceType, value);
    }
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.yes} ${styles.button} ${
          selectedButton === ButtonValue.yes && styles.selected
        }`}
        onClick={() => onButtonClick(ButtonValue.yes)}
      />
      <button
        type="button"
        className={`${styles.maybe} ${styles.button} ${
          selectedButton === ButtonValue.maybe && styles.selected
        }`}
        onClick={() => onButtonClick(ButtonValue.maybe)}
      />
      <button
        type="button"
        className={`${styles.no} ${styles.button} ${
          selectedButton === ButtonValue.no && styles.selected
        }`}
        onClick={() => onButtonClick(ButtonValue.no)}
      />
    </div>
  );
};

export default ExpandedButton;
