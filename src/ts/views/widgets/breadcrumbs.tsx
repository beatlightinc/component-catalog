import * as React from 'react';
import * as classnames from 'classnames';

const BreadCrumbs = ({ path, onClick, className, style }: {
  className?: string,
  style?: any,
  path: string[],
  onClick?: (clickedCrumbIndex: number) => void
}) => {

  const breadCrumbClass = classnames('breadcrumb', className);

  const crumbs = path.map((label, i) => {
    return (
      <div key={i} className={breadCrumbClass}
        style={style}
      >
        <span
          className={classnames('label', { 'is-active': i === path.length - 1 })}
          onClick={onClick ? onClick.bind(null, i) : null}
        >
          {label}
        </span>
        {
          i === path.length - 1 ? null
          : <span className="icon-chevron-right separator"/>
        }
      </div>
    );
  });

  return (
    <div className="breadcrumbs">
      <div className="icon-more-horizontal bullets"/>
      { crumbs }
    </div>
  );
};

export default BreadCrumbs;
