import { MouseEvent, useState } from 'react';
import { ButtonValue } from '../types/ButtonValue';
import styles from '../styles/ThreeButtons.module.css';

const ExpandingButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedButton, setSelectedButtion] = useState(ButtonValue.maybe);

  const onHoverStart = (event: MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
  };

  const onHoverEnd = (event: MouseEvent<HTMLDivElement>) => {
    setIsHovering(false);
  };

  const onButtonClick = (value: ButtonValue) => {
    setSelectedButtion(value);
    setIsHovering(false);
  };

  return (
    <div className={styles.container}>
      <div onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
        {(selectedButton === ButtonValue.yes || isHovering) && (
          <button
            type="button"
            className={`${styles.yes} ${styles.button}`}
            onClick={() => onButtonClick(ButtonValue.yes)}
          />
        )}
        {(selectedButton === ButtonValue.maybe || isHovering) && (
          <button
            type="button"
            className={`${styles.maybe} ${styles.button}`}
            onClick={() => onButtonClick(ButtonValue.maybe)}
          />
        )}
        {(selectedButton === ButtonValue.no || isHovering) && (
          <button
            type="button"
            className={`${styles.no} ${styles.button}`}
            onClick={() => onButtonClick(ButtonValue.no)}
          />
        )}
      </div>
    </div>
  );
};

export default ExpandingButton;
