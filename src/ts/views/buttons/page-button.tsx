import * as React from 'react';
import * as classnames from 'classnames';

const PageButton = (props: {
  pageNumber: number,
  onClick?: (pageNumber: number) => void,
  disabled?: boolean,
  className?: string,
  style?: any
}) => {
    const { pageNumber, onClick, disabled, className, style } = props;
    const pageButtonClass = classnames('page-button', className, {
      disabled
    });

    return (
        <div onClick={disabled ? null : () => onClick(pageNumber)}
          className={pageButtonClass}
          style={style}
        >
          {pageNumber}
        </div>
    );
};

export default PageButton;
