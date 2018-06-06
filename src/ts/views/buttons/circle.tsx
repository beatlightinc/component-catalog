import * as React from 'react';
import Button from './button';
import * as classnames from 'classnames';

const CircleButton = (props: {
  children?: any | undefined,
  className: string,
  style?: any,
  onClick?: () => void
}) => {
  return (
    <Button {...props}
      onClick={props.onClick}
      className={classnames('circle', props.className)}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

export default CircleButton;
