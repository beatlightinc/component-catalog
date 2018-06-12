import * as React from 'react';
import Button from './button';
import * as classnames from 'classnames';

const CircleButton = (props: {
  children?: any | undefined,
  className: string,
  style?: any,
  onClick?: () => void,
  disabled?: boolean
}) => {
  const {
    className,
    style,
    onClick,
    disabled,
    children
  } = props;

  return (
    <Button {...props}
      onClick={onClick}
      className={classnames('circle', className)}
      style={style}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CircleButton;
