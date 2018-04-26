import * as React from 'react';
import * as classnames from 'classnames';
import Switch from 'react-switch';

const ToggleSwitch = (props: {
  onClick?: () => void,
  active?: boolean,
  disabled?: boolean,
  color?: string,
  children?: any,
  className?: string
}) => {

  const {
    onClick,
    active,
    disabled,
    color,
    children,
    className
  } = props;

  const wrapperClass = classnames('toggle-switch-wrapper', className);
  const handleStyle = classnames('react-switch-handle', { active });

  return (
    <div className={wrapperClass}>
      <Switch
        checked={props.active}
        onChange={props.onClick}
        disabled={disabled}
        onColor={color ? color : '#0076FF'}
        offColor={'#E5E5E5'}
        handleDiameter={16}
        height={16}
        width={32}
        boxShadow={'1px 1px 2px 0 rgba(0,0,0,0.13)'}
        activeBoxShadow={'1px 1px 2px 0 rgba(0,0,0,)'}
      />
    </div>
  );
};

export default ToggleSwitch;
