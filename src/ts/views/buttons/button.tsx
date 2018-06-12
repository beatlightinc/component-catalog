import * as React from 'react';
import * as classnames from 'classnames';

const Button = (props: {
  onClick?: () => void,
  disabled?: boolean,
  className?: string,
  style?: any,
  children?: any,
  size?: string, // medium
  color?: string // red, white, grey, minimal (don't use for blue(default))
}) => {

  const {
    onClick,
    disabled,
    className,
    style,
    children,
    size,
    color
  } = props;

  const buttonClass = classnames('button-component', className, size, color, {
    disabled: props.disabled
  });

  return (
      <button
        onClick={disabled ? null : onClick}
        className={buttonClass}
        style={style}
      >
        {children}
      </button>
  );
};

export default Button;
