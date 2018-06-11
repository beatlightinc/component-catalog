import * as React from 'react';
import * as classnames from 'classnames';

const Pill = (props: {
  title?: string,
  type?: string,
  removeable?: boolean,
  children?: any,
  onClick?: () => void,
  active?: boolean,
  className?: string,
  style?: any
}) => {
  const { type, removeable, children, onClick, className, active, title, style } = props;

  const pillWrapperClass = classnames('pill', type, className, { removeable, active });
  const removeIcon = <span className="icon-x"></span>;

  return (
    <div className={pillWrapperClass}
      onClick={onClick ? onClick : null}
      style={style}
    >
      {children}
      <span className="pill-title">{title}</span>
      { removeable ? <div className="icon-section">{removeIcon}</div> : null }
    </div>
  );
};

export default Pill;
