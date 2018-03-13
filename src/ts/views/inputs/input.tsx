import * as React from 'react';

const Input = (props: {
  inputType: string
}) => {
  return (
      <div>
        <div>{'Generic input component'}</div>
        <input type={props.inputType} />
      </div>
  );
};

export default Input;
