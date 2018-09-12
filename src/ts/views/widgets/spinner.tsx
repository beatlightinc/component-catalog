import * as React from 'react';
import * as classnames from 'classnames';

const Spinner = (props: {
  className?: string,
  style?: any
}) => {
  const { className, style } = props;
  const spinnerClass = classnames('spinner', className);
  return (
    <div className={spinnerClass} style={style}>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
};

export default Spinner;
