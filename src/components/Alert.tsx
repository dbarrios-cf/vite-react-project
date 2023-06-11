import { ReactNode, useEffect } from 'react';

interface AlertProps {
  children: ReactNode;
  style?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  isDismissable?: boolean;
  onClose?: () => void;
}

function Alert({
  children,
  style = 'primary',
  isDismissable = false,
  onClose
}: AlertProps) {
  return (
    <>
      <div
        className={`alert alert-${style}${
          isDismissable ? ' alert-dismissible fade show' : ''
        }`}
      >
        {isDismissable ? (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onClose}
          ></button>
        ) : (
          ''
        )}
        {children}
      </div>
    </>
  );
}

export default Alert;
