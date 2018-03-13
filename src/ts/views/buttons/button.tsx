import * as React from 'react';

const Button = (props: {
  buttonText: string,
  onClick?: () => void
}) => {
    return (
        <button onClick={props.onClick}>{props.buttonText}</button>
    );
};

export default Button;
