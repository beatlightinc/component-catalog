import * as React from 'react';
import Button from './button';
import * as classnames from 'classnames';

const CircleButton = (props: {
  children?: any | undefined,
  className: string
}) => {
  return (
    <Button {...props} className={classnames('circle', props.className)}>
      {props.children}
    </Button>
  );
};

export default CircleButton;
