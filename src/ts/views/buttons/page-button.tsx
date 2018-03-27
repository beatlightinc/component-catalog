import * as React from 'react';
import * as classnames from 'classnames';

const PageButton = (props: {
  buttonNumber: number,
  onClick?: () => void,
  disabled?: boolean,
  className?: string
}) => {
    const { buttonNumber, onClick, disabled, className } = props;
    const pageButtonClass = classnames('page-button', className);
    return (
        <button onClick={disabled ? null : onClick}
          className={pageButtonClass}>
          {buttonNumber}
        </button>
    );
};

export default PageButton;
