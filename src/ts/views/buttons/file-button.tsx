import * as React from 'react';
import * as classnames from 'classnames';
import Button from './button';

const FileButton = (props: {
  inputID: string,
  children?: any,
  accept?: string,
  single?: boolean,
  disabled?: boolean,

  onChange?: () =>  void,
  onClick?: () => void
}) => {
  const {
    children,
    accept,
    single,
    onChange,
    onClick,
    disabled,
    inputID
  } = props;

  const wrapperClass = classnames('file-button', {
    disabled: props.disabled
  });
  const inputClass = classnames('file-button-input', {
    disabled: props.disabled
  });

  return (
    <label htmlFor={inputID} className={wrapperClass}>
      <div>{children}</div>
      <input className={inputClass}
        type="file"
        id={inputID}
        multiple={single ? false : true}
        onChange={disabled ? null : onChange}
        onClick={disabled ? null : onClick}
        accept={accept}/>
    </label>
  );
};

export default FileButton;
