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
  return (
    <Button {...props}
      onClick={props.onClick}
      className={classnames('circle', props.className)}
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default CircleButton;
