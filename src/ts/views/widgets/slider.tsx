import * as React from 'react';
import Slider from 'rc-slider';

export default ({ value, min, max, disabled, onChange }: {
  value: number,
  min: number,
  max: number,
  disabled?: boolean,
  onChange?: (newValue: number) => void
}) => {
  return (
    <div>
      <Slider
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={onChange ? onChange : null}
      />
    </div>
  );
};
