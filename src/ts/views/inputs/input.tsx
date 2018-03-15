import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,
  onHandleChange: () => {},
  disabled?: boolean,
  pattern?: string
}) => {
  const inputClass = classnames('input', {
    disabled: props.disabled
  });
  return (
      <div className={inputClass}>
        <input type={props.inputType}
          onChange={props.disabled ? null : props.onHandleChange}
          maxLength={150}
          disabled={props.disabled}
          pattern={props.pattern}/>
      </div>
  );
};

export default Input;
