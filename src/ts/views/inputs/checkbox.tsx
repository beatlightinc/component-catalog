import * as React from 'react';
import * as classnames from 'classnames';

const Checkbox = (props: {
  onClick?: () => void,
  checked?: boolean,
  indeterminate?: boolean,
  label?: string,
  disabled?: boolean,
  className?: string,
  style?: any
}) => {

  const {
    onClick,
    checked,
    indeterminate,
    label,
    disabled,
    className,
    style
  } = props;

  const checkboxClass = classnames('checkbox-component-wrapper', className, { disabled });

  return (
      <div className={checkboxClass}
        style={style}
      >
        <div className={classnames('psuedo-box', { checked: checked || indeterminate })}>
          <div
            className={classnames('checkbox', { checked: checked || indeterminate })}
            onClick={disabled ? null : onClick}
          >
            { checked && !indeterminate ? <span className="checkbox-icon icon-check" /> : null }
            { indeterminate ? <span className="checkbox-icon icon-minus" /> : null }
          </div>
        </div>
        <span className="checkbox-label">{label}</span>
      </div>
  );
};

export default Checkbox;
