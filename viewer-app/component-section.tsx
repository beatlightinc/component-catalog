import * as React from 'react';
import * as classnames from 'classnames';

const ComponentSection = ({ children, title, className }: {
  title: string,
  children: any,
  className?: string
}) => {
  return (
    <div className={classnames('+soft-double +push-bottom-double', className)}>
      <h2 className="+push-bottom +underline">{title}</h2>
      {children}
    </div>
  );
};

export default ComponentSection;
