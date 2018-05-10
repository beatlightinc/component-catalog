import * as React from 'react';

const ButtonGroup = ({ children }: {
  children: any
}) => {
  return (
    <div className="button-group">
      {children}
    </div>
  );
};

export default ButtonGroup;
