import * as React from 'react';
import * as classnames from 'classnames';

const RadioButton = (props: {
  activeLabel?: string,
  label?: string,
  wrapperClassName?: string,
  disabled?: boolean,

  onClick: (key: number | string) => void
}) => {
  const {
    activeLabel,
    label,
    wrapperClassName,
    disabled,
    onClick
  } = props;

  const checked = label === activeLabel;

  const wrapperClass = classnames('radio-button-wrapper', wrapperClassName, { disabled });
  const labelClass = classnames('label', { checked, disabled });
  const outerCircleClass = classnames('outer-circle', { checked, disabled });
  const innerCircleClass = classnames('inner-circle', { checked, disabled }); 

  return (
    <div className={wrapperClass} onClick={disabled ? null : () => onClick(label)}>
      <div className={outerCircleClass}>
        <div className={innerCircleClass} />
      </div>
      <div className="label">
        {`${label}`}
      </div>
    </div>
  );
}

export default RadioButton;
