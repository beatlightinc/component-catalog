import * as React from 'react';
import * as classnames from 'classnames';

const Pill = (props: {
  type?: string,
  removeable?: boolean,
  children?: any,
  onClick?: () => void,
  active?: boolean,
  className?: string
}) => {
  const { type, removeable, children, onClick, className, active } = props;

  const pillWrapperClass = classnames('pill', type, className, { removeable, active });

  return (
    <div className={pillWrapperClass} onClick={onClick ? onClick : null}>
      <span className="pill-title">{children}</span>
    </div>
  );
};

export default Pill;
