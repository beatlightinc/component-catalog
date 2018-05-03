import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';
// import Icon from '../widgets/icon';

const Checkbox = (props: {
  onClick?: () => void,
  checked?: boolean,
  label?: string,
  disabled?: boolean
}) => {

  const {
    onClick,
    checked,
    label,
    disabled
  } = props;

  const checkboxClass = classnames('checkbox-component-wrapper', { disabled });

  return (
      <div className={checkboxClass}>
        <span className="checkbox-label">{label}</span>
        <input type="checkbox" checked={checked} onClick={!disabled ? onClick : null} />
      </div>
  );
};

export default Checkbox;
