import * as React from 'react';
import * as classnames from 'classnames';

const PageButton = (props: {
  pageNumber: number,
  onClick?: () => void,
  disabled?: boolean,
  className?: string
}) => {
    const { pageNumber, onClick, disabled, className } = props;
    const pageButtonClass = classnames('page-button', className, {
      disabled
    });
    return (
        <button onClick={disabled ? null : onClick}
          className={pageButtonClass}>
          {pageNumber}
        </button>
    );
};

export default PageButton;
