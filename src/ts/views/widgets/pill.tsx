import * as React from 'react';
import * as classnames from 'classnames';

const Pill = (props: {
  type?: string,
  removeable?: boolean,
  children?: any,
  onClick?: () => void,
  className?: string
}) => {
  const { type, removeable, children, onClick, className } = props;

  const pillWrapperClass = classnames('tag', type, className, { removeable });

  return (
    <div className={pillWrapperClass}>
      <span className="pill-title">{children}</span>
    </div>
  );
};

export default Pill;
