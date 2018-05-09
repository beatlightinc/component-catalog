import * as React from 'react';

const ComponentSection = ({ children, title }: {
  title: string,
  children: any
}) => {
  return (
    <div style={{ padding: '8px', marginBottom: '16px' }}>
      <h2 className="+push-bottom" style={{ textDecoration: 'underline' }}>{title}</h2>
      {children}
    </div>
  );
};

export default ComponentSection;
