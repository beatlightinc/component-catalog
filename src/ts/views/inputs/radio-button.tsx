import * as React from 'react';
import * as classnames from 'classnames';

const RadioButton = (props: {
  activeLabel?: string,
  label?: string,
  wrapperClassName?: string,
  style?: any,
  disabled?: boolean,

  onClick: (key: number | string) => void
}) => {
  const {
    activeLabel,
    label,
    wrapperClassName,
    disabled,
    onClick,
    style
  } = props;

  const checked = label === activeLabel;

  const wrapperClass = classnames('radio-button-wrapper', wrapperClassName, { disabled });
  const labelClass = classnames('label', { checked, disabled });
  const outerCircleClass = classnames('outer-circle', { checked, disabled });
  const innerCircleClass = classnames('inner-circle', { checked, disabled });

  return (
    <div className={wrapperClass}
      onClick={disabled ? null : () => onClick(label)}
      style={style}
    >
      <div className={outerCircleClass}>
        <div className={innerCircleClass} />
      </div>
      <div className="label">
        {`${label}`}
      </div>
    </div>
  );
};

export default RadioButton;
