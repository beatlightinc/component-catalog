import * as React from 'react';
import * as classnames from 'classnames';

const ButtonGroup = ({ children, className, style }: {
  children: any,
  className?: string,
  style?: any
}) => {
  const wrapperClass = classnames('button-group', className);

  return (
    <div className={wrapperClass} style={style}>
      {children}
    </div>
  );
};

export default ButtonGroup;
