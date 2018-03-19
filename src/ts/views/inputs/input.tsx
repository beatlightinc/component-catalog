import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,
  onHandleChange: () => {},
  disabled?: boolean,
  pattern?: string
}) => {
  const inputContainerClass = classnames('input-container', {
    disabled: props.disabled
  });
  const inputClass = classnames('input', {
    disabled: props.disabled
  });
  return (
      <div className={inputContainerClass}>
        <input type={props.inputType}
          onChange={props.disabled ? null : props.onHandleChange}
          className={inputClass}
          maxLength={150}
          disabled={props.disabled}
          pattern={props.pattern}/>
      </div>
  );
};

export default Input;
