import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';
// import Icon from '../widgets/icon';

const Checkbox = (props: {
  onClick?: () => void,
  checked?: boolean,
  label?: string
}) => {

  const {
    onClick,
    checked,
    label
  } = props;

  return (
      <div>
        <span>{label}</span>
        <input type="checkbox" checked={checked} onClick={onClick} />
      </div>
  );
};

export default Checkbox;
