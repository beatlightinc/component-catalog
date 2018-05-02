import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';
// import Icon from '../widgets/icon';

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

  // const wrapperStyle = classnames('checkbox-wrapper', classname);
  // const checkBoxStyle = classnames('checkbox-inner-wrapper', { disabled, checked, intermediate });
  // const checkBoxIcon = checked ? <Icon /> : null;

  return (
      <span>
        <input type="checkbox" checked={checked} className="hidden-checkbox" />
        <span onClick={onClick}></span>
      </span>
  );
};

export default Checkbox;
