import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,

  // Will eventually have to figure out icon logic
  iconType?: string,
  onSubmission?: () => void
  onHandleChange?: () => {},
  validationState?: boolean,
  value?: string,
  className?: string,
  wrapperClassName?: string,
  disabled?: boolean,
  pattern?: string,
  placeholder?: string
}) => {

  const {
    inputType,
    autoFocus,
    onHandleChange,
    disabled,
    pattern,
    wrapperClassName,
    className,
    validationState,
    onSubmission,
    placeholder,
    value,
    iconType
  } = props;

  const inputContainerClass = classnames('input-container', wrapperClassName, {
    disabled: props.disabled,
  });
  const inputClass = classnames('input-component', className, {
    disabled: props.disabled,
    valid: validationState && value.length > 0,
    invalid: !validationState && value.length > 0
  });

  // TODO: Icon logic and implementation
  const inputIcon = <div>{'ICON'}</div>;

  return (
      <div className={inputContainerClass}>
        <input type={inputType}
          onChange={disabled ? null : onHandleChange}
          className={inputClass}
          maxLength={150}
          disabled={disabled}
          pattern={pattern}
          value={value}
          placeholder={placeholder ? placeholder : null}/>
        {iconType ? inputIcon : null}
      </div>
  );
};

export default Input;
