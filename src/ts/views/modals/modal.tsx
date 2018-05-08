import * as React from 'react';
import * as classnames from 'classnames';

const Modal = (props: {
  children?: any,
  showing?: boolean,
  wrapperClassName?: string,

  onClose: () => void
}) => {
  const {
    children,
    showing,
    wrapperClassName,
    onClose
  } = props;

  const wrapperClass = classnames('modal-wrapper', wrapperClassName, { showing });

  // TODO: X to icon
  return (
    <div className={wrapperClass}>
      <div className="modal">
        <div className="close-button" onClick={onClose}>
          {'X'}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
