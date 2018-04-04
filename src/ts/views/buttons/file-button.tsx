import * as React from 'react';
import * as classnames from 'classnames';

const FileButton = (props: {
  children?: any,
  accept?: string,
  single?: boolean,
  disabled?: boolean,

  onChange?: (files: File[]) =>  void,
  onClick?: (event: Event) => void
}) => {
  const { children, accept, single, onChange, onClick, disabled } = this.props;
  const wrapperClass = classnames('file-button', {
    disabled: props.disabled
  });
  const inputClass = classnames('file-button-input', {
    disabled: props.disabled
  });
  return (
    <div className={wrapperClass}>
      {children}
      <input className={inputClass}
        type="file"
        ref="ref-input"
        multiple={single ? false : true}
        onChange={disabled ? null : onChange}
        onClick={disabled ? null : onClick}
        accept={accept}/>
    </div>
  );
};

export default FileButton;
