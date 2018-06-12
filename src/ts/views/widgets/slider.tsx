import * as React from 'react';
import Slider from 'rc-slider';

export default (props: {
  value: number,
  min: number,
  max: number,
  disabled?: boolean,
  className?: string,
  // Style is for the container
  style?: any,
  onChange?: (newValue: number) => void
}) => {
  const {
    value,
    min,
    max,
    disabled,
    className,
    style,
    onChange
  } = this.props;

  return (
    <div style={style}>
      <Slider
        value={value}
        className={className}
        min={min}
        max={max}
        disabled={disabled}
        onChange={onChange ? onChange : null}
      />
    </div>
  );
};
