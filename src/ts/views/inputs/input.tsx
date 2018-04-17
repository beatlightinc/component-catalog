import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,

  // Will eventually have to figure out icon logic
  iconType?: string,
  onSubmission?: () => void
  onHandleChange?: () => {},
  value?: string,
  disabled?: boolean,
  patternString?: string,
  validationState?: boolean,
  placeholder?: string,
  maxLength?: number,
  containerStyle?: any,
  inputStyle?: any,
  round?: boolean
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
    round
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
  const inputContainerClass = classnames('input-container', {
    disabled: props.disabled
  });


  // TODO go over when we want the input to show is validity state vs active state.
  const inputClass = classnames('input-component', {
    disabled: props.disabled,
    valid: isValid && value.length > 0,
    invalid: isValid === false && value.length > 0,
    round: props.round
  });

  // TODO: Icon logic and implementation
  const inputIcon = <div>{'ICON'}</div>;

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
          style={inputStyle}/>
        {iconType ? inputIcon : null}
      </div>
  );
};

export default Input;
