import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,

  // Will eventually have to figure out icon logic
  iconType?: string,
  onSubmission?: () => void
  onHandleChange?: () => {},
  hasValidationState?: boolean,
  validationState?: boolean,
  value?: string,
  disabled?: boolean,
  pattern?: string,
  placeholder?: string,
  maxLength?: number,
  containerStyle?: any,
  inputStyle?: any
}) => {

  const {
    inputType,
    autoFocus,
    iconType,
    onSubmission,
    onHandleChange,
    hasValidationState,
    validationState,
    value,
    disabled,
    pattern,
    placeholder,
    maxLength,
    containerStyle,
    inputStyle
  } = props;

  const inputContainerClass = classnames('input-container', {
    disabled: props.disabled
  });
  const inputClass = classnames('input-component', {
    disabled: props.disabled,
    valid: hasValidationState && validationState && value.length > 0,
    invalid: hasValidationState && validationState === false && value.length > 0
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
          pattern={pattern}
          value={value}
          placeholder={placeholder ? placeholder : null}
          style={inputStyle}/>
        {iconType ? inputIcon : null}
      </div>
  );
};

export default Input;
