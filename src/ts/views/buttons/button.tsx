import * as React from 'react';

const Button = (props: {
  buttonText: string,
  onClick?: () => void,
  disabled?: boolean,
  className?: string
}) => {
    return (
        <button onClick={props.disabled ? null : props.onClick}
          className={props.className}>
          {props.buttonText}
        </button>
    );
};

export default Button;
