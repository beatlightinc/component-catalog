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
    <Button className={wrapperClass} disabled={disabled}>
      {children}
      <input className={inputClass}
        type="file"
        multiple={single ? false : true}
        onChange={disabled ? null : onChange}
        onClick={disabled ? null : onClick}
        accept={accept}/>
    </Button>
  );
};

export default FileButton;
