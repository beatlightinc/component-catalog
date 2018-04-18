import * as React from 'react';
import * as classnames from 'classnames';

const Textarea = (props: {
  value?: string,
  disabled?: boolean,
  placeholder?: string,
  maxLength?: number,
  fixedSize?: boolean,

  onSubmission?: () => void,
  onHandleChange?: () => {}
}) => {

  const {
    value,
    disabled,
    placeholder,
    maxLength,
    fixedSize,
    onSubmission,
    onHandleChange,
  } = props;

  const inputContainerClass = classnames('input-container', { disabled });


  // TODO go over when we want the input to show is validity state vs active state.
  const textareaClassname = classnames('input-component', {
    disabled,
    fixedSize
  });

  // TODO: Icon logic and implementation
  const inputIcon = <div>{'ICON'}</div>;

  return (
      <div className={inputContainerClass}>
        <textarea
          className={textareaClassname}
          disabled={disabled}
          maxLength={150}
          onChange={disabled ? null : onHandleChange}
          placeholder={placeholder ? placeholder : null}
          value={value}
        />
      </div>
  );
};

export default Textarea;
