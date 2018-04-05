import * as React from 'react';
import * as classnames from 'classnames';
import Button from './button';

const FileButton = (props: {
  children?: any,
  accept?: string,
  single?: boolean,
  disabled?: boolean,

  onChange?: () =>  void,
  onClick?: () => void
}) => {
  const { children, accept, single, onChange, onClick, disabled } = props;
  const wrapperClass = classnames('file-button', {
    disabled: props.disabled
  });
  const inputClass = classnames('file-button-input', {
    disabled: props.disabled
  });

  return (
    <label htmlFor="load-file" className={wrapperClass}>
      <div>{children}</div>
      <input className={inputClass}
        type="file"
        id="load-file"
        multiple={single ? false : true}
        onChange={disabled ? null : onChange}
        onClick={disabled ? null : onClick}
        accept={accept}/>
    </label>
  );
};

export default FileButton;
