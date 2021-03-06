import * as React from 'react';
import * as classnames from 'classnames';

const ProgressDots = (props: {
  currentStep?: number,
  totalSteps: number,
  className?: string,
  // Style is for the dots themselves
  style?: any

  stepOnClick?: (step: number) => void;
}) => {
  const {
    currentStep,
    totalSteps,
    stepOnClick,
    className,
    style
  } = props;

  const dotElements = [];
  for (let i = 0; i < totalSteps; i++) {
    const dotClass = classnames('dot', {
      active: i === currentStep,
      clickable: i !== currentStep,
      final: i === totalSteps - 1
    });
    dotElements.push(
      <div
        className={dotClass}
        key={i}
        onClick={i === currentStep ? null : () => stepOnClick(i)}
        style={style}
      />
    );
  }

  const containerClass = classnames('progress-dots-wrapper', className);

  return (
    <div className="progress-dots-wrapper">
      { dotElements }
    </div>
  );
};

export default ProgressDots;
