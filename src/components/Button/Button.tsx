import { ReactNode, useEffect } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  style?: 'primary' | 'secondary' | 'warning';
  children: ReactNode;
  onClick: () => void;
}

function Button({ style = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn-${style}`]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
