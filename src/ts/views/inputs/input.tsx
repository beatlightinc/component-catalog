import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,
  inputValue: string,
  onHandleChange: () => {},
  disabled?: boolean,
  pattern?: string
}) => {
  const buttonClass = classnames('button', {
    disabled: props.disabled
  });
  return (
      <div className={buttonClass}>
        <input type={props.inputType}
          value={props.inputValue}
          onChange={props.disabled ? null : props.onHandleChange}
          maxLength={150}
          disabled={props.disabled}
          pattern={props.pattern}/>
      </div>
  );
};

export default Input;
