import * as React from 'react';
import * as classnames from 'classnames';

const Button = (props: {
  onClick?: () => void,
  disabled?: boolean,
  className?: string,
  style?: any,
  children?: any,
  type?: string, // medium, minimal
  color?: string // red, white, grey (don't use for blue(default) or minimal)
}) => {

  const {
    onClick,
    disabled,
    className,
    style,
    children,
    type,
    color
  } = props;

  const buttonClass = classnames('button-component', className, type, color, {
    disabled: props.disabled
  });

  return (
      <button
        onClick={props.disabled ? null : props.onClick}
        className={buttonClass}>
        {children}
      </button>
  );
};

export default Button;
