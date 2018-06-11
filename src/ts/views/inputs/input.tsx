import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,
  iconType?: string, // Will eventually have to figure out icon logic
  value?: string,
  disabled?: boolean,
  patternString?: string,
  validationState?: boolean,
  placeholder?: string,
  maxLength?: number,
  containerStyle?: any,
  inputStyle?: any,
  round?: boolean,
  wrapperClassName?: string,
  inputClassName?: string,

  onSubmission?: () => void,
  onHandleChange: (evt: any) => void
}) => {

  const {
    inputType,
    autoFocus,
    iconType,
    onSubmission,
    onHandleChange,
    value,
    disabled,
    patternString,
    validationState,
    placeholder,
    maxLength,
    containerStyle,
    inputStyle,
    round,
    wrapperClassName,
    inputClassName
  } = props;

  // If a pattern AND a validation state get passed in the pattern takes priority. (Shouldnt ever pass it both)
  const pattern = patternString ? new RegExp(patternString) : null;
  let isValid: boolean;
  if (patternString) {
    isValid = pattern.test(value);
  }
  else if (validationState) {
    isValid = validationState;
  }
  const inputContainerClass = classnames('input-container', wrapperClassName, { disabled });

  const inputClass = classnames('input-component', inputClassName, {
    disabled,
    valid: isValid,
    invalid: isValid === false && value.length > 0,
    round
  });

  const inputIcon = <div className={`${iconType} input-icon`}/>;

  return (
      <div className={inputContainerClass} style={containerStyle}>
        <input type={inputType}
          onChange={disabled ? null : onHandleChange}
          className={inputClass}
          maxLength={150}
          disabled={disabled}
          pattern={patternString}
          value={value}
          placeholder={placeholder ? placeholder : null}
          style={inputStyle}
        />
        {iconType ? inputIcon : null}
      </div>
  );
};

export default Input;
