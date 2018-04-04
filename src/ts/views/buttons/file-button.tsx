import * as React from 'react';
import * as classnames from 'classnames';

const FileButton = (props: {
  children?: any,
  accept?: string,
  single?: boolean,

  onChange?: (files: File[]) =>  void,
  onClick?: (event: Event) => void
}) => {
  const { children, accept, single, onChange, onClick } = this.props;
  return (
    <div>
      {children}
    </div>
  );
};
