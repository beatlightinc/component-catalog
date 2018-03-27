import * as React from 'react';
import * as classnames from 'classnames';

const Input = (props: {
  inputType?: string,
  autoFocus?: boolean,
  onSubmission?: () => void
  onHandleChange: () => {},
  validationFunction?: () => boolean,
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
    validationFunction,
    onSubmission,
    placeholder,
    value
  } = props;

  const isValid = validationFunction ? validationFunction() : true;
  const inputContainerClass = classnames('input-container', wrapperClassName, {
    disabled: props.disabled
  });
  const inputClass = classnames('input-component', className, {
    disabled: props.disabled
  });

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
      </div>
  );
};

export default Input;
