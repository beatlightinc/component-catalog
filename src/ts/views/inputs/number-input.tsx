import * as React from 'react';
import * as classnames from 'classnames';

// TODO:
// - Replace '^' with correct icons when theyre ready
// - Handle active logic for the icons
// - Handle logic for people typing in it, not sure how we want to yet.
// Dont let anything but numbers be typed? red border for invalid?

const NumberInput = (props: {
  value?: number,
  disabled?: boolean,
  max?: number,
  min?: number,
  placeholder?: string,

  handleChange: (newValue: number) => void
}) => {
  const {
    value,
    disabled,
    max,
    min,
    placeholder,
    handleChange
  } = props;

  const isValid = (max && min) && (value >= min) && (value <= max);
  const isInvalid = (max && min) && !isValid;

  const inputContainerClass = classnames('input-container number', { disabled });

  const inputClass = classnames('input-component number', {
    disabled,
    valid: isValid,
    invalid: isInvalid
  });

  const incrementButtonName = classnames('number-input-button up', { disabled });
  const decrementButtonName = classnames('number-input-button down', { disabled });

  function guardedIncrement(): void {
    const newValue = value + 1;
    if (max && min) {
      if (newValue > max) {
        return;
      }
    }
    handleChange(newValue);
  }

  function guardedDecrement(): void {
    const newValue = value - 1;
    if (max && min) {
      if (newValue < min) {
        return;
      }
    }
    handleChange(newValue);
  }

  return (
    <div className={inputContainerClass}>
      <input
        className={inputClass}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className="number-input-button-wrapper">
        <div className={incrementButtonName} onClick={disabled ? null : guardedIncrement}>
          <div className="icon-chevron-up"/>
        </div>
        <div className={decrementButtonName} onClick={disabled ? null : guardedDecrement} >
          <div className="icon-chevron-down"/>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
