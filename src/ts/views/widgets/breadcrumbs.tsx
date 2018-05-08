import * as React from 'react';
import * as classnames from 'classnames';

const BreadCrumbs = ({ path, onClick }: {
  path: string[],
  onClick: (clickedCrumbIndex: number) => void
}) => {

  const crumbs = path.map((label, i) => {
    return (
      <div key={i} className="breadcrumb">
        <span
          className={classnames('label', { 'is-active': i === path.length - 1 })}
          onClick={onClick.bind(null, i)}
        >
          {label}
        </span>

        {/* TODO: Use real icon here. */}
        {
          i === path.length - 1 ? null
          : <span className="separator">{'>'}</span>
        }
      </div>
    );
  });

  return (
    <div className="breadcrumbs">
      {/* TODO: Use real icon here maybe? These look OK though */}
      <div className="bullets">{'•••'}</div>
      { crumbs }
    </div>
  );
};

export default BreadCrumbs;
