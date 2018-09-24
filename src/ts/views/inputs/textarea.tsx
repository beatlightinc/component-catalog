import * as React from 'react';
import * as classnames from 'classnames';

const Textarea = (props: {
  value?: string,
  disabled?: boolean,
  placeholder?: string,
  maxLength?: number,
  fixedSize?: boolean,
  className?: string,
  style?: any,

  onSubmission?: () => void,
  onHandleChange: () => {}
}) => {

  const {
    value,
    disabled,
    placeholder,
    maxLength,
    fixedSize,
    onSubmission,
    onHandleChange,
    className,
    style
  } = props;

  const inputContainerClass = classnames('input-container', className, { disabled });
  const textareaClassname = classnames('input-component', {
    disabled,
    fixedSize
  });

  return (
      <div className={inputContainerClass}>
        <textarea
          className={textareaClassname}
          disabled={disabled}
          maxLength={maxLength || 150}
          onChange={disabled ? null : onHandleChange}
          placeholder={placeholder ? placeholder : null}
          value={value}
          style={style}
        />
      </div>
  );
};

export default Textarea;
