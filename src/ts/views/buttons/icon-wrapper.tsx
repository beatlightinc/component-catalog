import * as React from 'react';
import * as classnames from 'classnames';

const IconWrapper = (props: {
  // small, med, large
  size?: string,
  // red, grey, white (blue will be deault)
  color?: string,
  round?: boolean,
  children?: any,
  className?: any,
  isActive?: boolean,
  disabled?: boolean

  onClick?: () => void
}) => {

  const {
    size,
    color,
    round,
    children,
    onClick,
    className,
    disabled,
    isActive
  } = props;

  const iconWrapperClass = classnames('icon-wrapper-class', size, color, className, {
    round,
    disabled,
    active: isActive
  });

  return (
    <div
      className={iconWrapperClass}
      onClick={onClick ? onClick : null}>
      {children}
    </div>
  );
};

export default IconWrapper;
