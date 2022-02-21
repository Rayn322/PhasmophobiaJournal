import { useState } from 'react';
import { ButtonValue } from '../enums/ButtonValue';
import styles from '../styles/ThreeButtons.module.css';

const ExpandedButton = () => {
  const [selectedButton, setSelectedButtion] = useState(ButtonValue.maybe);

  const onButtonClick = (value: ButtonValue) => {
    setSelectedButtion(value);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.yes} ${styles.button} ${selectedButton === ButtonValue.yes && styles.selected}`}
        onClick={() => onButtonClick(ButtonValue.yes)}
      />
      <button
        type="button"
        className={`${styles.maybe} ${styles.button} ${selectedButton === ButtonValue.maybe && styles.selected}`}
        onClick={() => onButtonClick(ButtonValue.maybe)}
      />
      <button
        type="button"
        className={`${styles.no} ${styles.button} ${selectedButton === ButtonValue.no && styles.selected}`}
        onClick={() => onButtonClick(ButtonValue.no)}
      />
    </div>
  );
};

export default ExpandedButton;
