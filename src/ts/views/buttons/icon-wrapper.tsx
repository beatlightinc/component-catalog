import * as React from 'react';
import * as classnames from 'classnames';

const IconWrapper = (props: {
  // small, med, large
  size?: string,
  // red, grey, white (blue will be deault)
  color?: string,
  round?: boolean,
  children?: any,
  className?: any

  onClick?: () => void
}) => {
  const {
    size,
    color,
    round,
    children,
    onClick,
    className
  } = props;

  const iconWrapperClass = classnames('icon-wrapper-class', size, className, {
    round
  });

  return (
    <div
      className={iconWrapperClass}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default IconWrapper;
