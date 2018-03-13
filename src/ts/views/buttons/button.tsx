import * as React from 'react';

const Button = (props: {
  buttonText: string
}) => {
    return (
        <div>{props.buttonText}</div>
    );
};

export default Button;
