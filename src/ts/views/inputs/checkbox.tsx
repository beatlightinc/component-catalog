import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';

const Checkbox = (props: {
  onClick?: () => void,
  checked?: boolean,
  classname?: string
}) => {

  const {
    onClick,
    checked,
    classname
  } = props;

  const wrapperStyle = classnames('checkbox-wrapper', classname);
  const checkBoxStyle = classnames('checkbox-inner-wrapper');

  return (
      <span>
        <input type="checkbox" checked={checked} className="hidden-checkbox" />
        <span></span>
      </span>
  );
};

export default Checkbox;
