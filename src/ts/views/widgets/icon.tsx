import * as React from 'react';
import * as classnames from 'classnames';
import { assign } from 'lodash';
import * as ICONS from '../../icons/icon-constants.json';

const Icon = (props: {
  name: string,
  size: string,
  className?: string,
  style?: any,
  color?: string,
  hoverColor?: string,
  onClick?: () => void
}) => {

  const {
    name,
    size,
    className,
    style,
    color,
    hoverColor,
    onClick
  } = props;

  const iconPath = `ic-${size}-${name}`;

  let pixelSize;
  switch (size) {
    case 'min':
      pixelSize = 16;
      break;

    case 'reg':
      pixelSize = 40;
      break;

    case 'big':
      pixelSize = 80;
      break;

    case  'mob':
      pixelSize = 25;
      break;

    default:
      pixelSize = 16;
  }

  const customStyle = style || {};
  const iconClassName = classnames('icon', className);
  const iconStyle = assign({}, {
    display: 'inline-block',
    vericalAlign: 'middle',
    position: 'relative',
    width: pixelSize,
    height: pixelSize
  }, customStyle);

  return (
    <div
      className={iconClassName}
      style={iconStyle}
      onClick={onClick}
      ref="wrapper"
    />
  );
};

export default Icon;
