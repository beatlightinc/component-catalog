import * as React from 'react';
import * as classnames from 'classnames';

const Modal = (props: {
  children?: any,
  showing?: boolean,
  wrapperClassName?: string,
  style?: any,

  onClose: () => void
}) => {
  const {
    children,
    showing,
    wrapperClassName,
    onClose,
    style
  } = props;

  const wrapperClass = classnames('modal-wrapper', wrapperClassName, { showing });

  // TODO: X to icon
  return (
    <div className={wrapperClass} style={style}>
      <div className="modal">
        <div className="icon-x close-button" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
