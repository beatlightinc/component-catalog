import * as React from 'react';
import * as classnames from 'classnames';
import Switch from 'react-switch';

const ToggleSwitch = (props: {
  onClick: () => void,
  active?: boolean,
  disabled?: boolean,
  color?: string,
  children?: any,
  className?: string,
  // Style is for the wrapper
  style?: any
}) => {

  const {
    onClick,
    active,
    disabled,
    color,
    children,
    className,
    style
  } = props;

  // These give us the option to customize a bit more, but they won't override the defaults for now
  const wrapperClass = classnames('toggle-switch-wrapper');
  const handleStyle = classnames('react-switch-handle', { active });

  return (
    <div className={wrapperClass} style={style}>
      <Switch
        checked={props.active}
        className={className}
        onChange={props.onClick}
        disabled={disabled}
        onColor={color ? color : '#0076FF'}
        offColor={'#E5E5E5'}
        handleDiameter={15}
        uncheckedIcon={false}
        checkedIcon={false}
        height={17}
        width={32}
        boxShadow={'1px 1px 2px 0 rgba(0,0,0,0.13)'}
        activeBoxShadow={'1px 1px 2px 0 rgba(0,0,0,0.13)'}
      />
    </div>
  );
};

export default ToggleSwitch;
