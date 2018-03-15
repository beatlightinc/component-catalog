import * as React from 'react';

const Input = (props: {
  inputType: string,
  autoFocus?: boolean,
  inputValue: string,
  onHandleChange: () => {},
  disabled?: boolean,
  pattern?: string
}) => {
  return (
      <div>
        <input type={props.inputType}
          value={props.inputValue}
          onChange={props.onHandleChange}
          maxLength={150}
          disabled={props.disabled}
          pattern={props.pattern}/>
      </div>
  );
};

export default Input;
