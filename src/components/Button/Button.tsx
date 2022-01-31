import * as React from 'react';
import styles from './Button.style.scss';

type ButtonProps = {
  text?: string;
};

function Button({ text }: ButtonProps) {
  return (
    <button type="button" className={styles.button} data-testid={text}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Submit',
};

export default Button;
