import * as React from 'react';

const ComponentSection = ({ children, title }: {
  title: string,
  children: any
}) => {
  return (
    <div className="+soft-double +push-bottom-double">
      <h2 className="+push-bottom +underline">{title}</h2>
      {children}
    </div>
  );
};

export default ComponentSection;
