import { useState } from 'react';
import { ButtonValue } from '../enums/ButtonValue';
import styles from '../styles/ExpandingButton.module.css';

const ExpandedButton = () => {
  const [selectedButton, setSelectedButtion] = useState(ButtonValue.maybe);

  const onButtonClick = (value: ButtonValue) => {
    setSelectedButtion(value);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.yes} ${styles.button}`}
        onClick={() => onButtonClick(ButtonValue.yes)}
      />
      <button
        type="button"
        className={`${styles.maybe} ${styles.button}`}
        onClick={() => onButtonClick(ButtonValue.maybe)}
      />
      <button
        type="button"
        className={`${styles.no} ${styles.button}`}
        onClick={() => onButtonClick(ButtonValue.no)}
      />
    </div>
  );
};

export default ExpandedButton;
