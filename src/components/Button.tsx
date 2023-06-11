import { ReactNode, useEffect } from 'react';

interface ButtonProps {
  style?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  children: ReactNode;
  onClick: () => void;
}

function Button({ style = 'primary', children, onClick }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${style}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
