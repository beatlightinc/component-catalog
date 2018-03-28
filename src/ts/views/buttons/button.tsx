import * as React from 'react';
import * as classnames from 'classnames';

const Button = (props: {
  onClick?: () => void,
  disabled?: boolean,
  className?: string,
  style?: any,
  children?: any[]
}) => {

  const {
    onClick,
    disabled,
    className,
    style,
    children
  } = props;

  const buttonClass = classnames('button-component', className, {
    disabled: props.disabled
  });

  // TODO: Eventually wire in logic for icons or children

  return (
      <button onClick={props.disabled ? null : props.onClick}
        className={buttonClass}>
        {children}
      </button>
  );
};

export default Button;
