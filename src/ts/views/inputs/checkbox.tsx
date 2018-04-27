import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';

const Checkbox = (props: {
  onClick?: () => void,
  checked?: boolean,
  intermediate?: boolean,
  classname?: string,
  disabled?: boolean
}) => {

  const {
    onClick,
    checked,
    classname,
    disabled,
    intermediate
  } = props;

  const wrapperStyle = classnames('checkbox-wrapper', classname);
  const checkBoxStyle = classnames('checkbox-inner-wrapper', { disabled, checked, intermediate });

  return (
      <span onClick={onClick}>
        <input type="checkbox" checked={checked} className="hidden-checkbox" />
        <span className={checkBoxStyle}></span>
      </span>
  );
};

export default Checkbox;
