import * as React from 'react';
import * as classnames from 'classnames';
import { assign } from 'lodash';
import * as ICONS from '../../icons/icon-constants.json';

const Icon = (props: {
  pathName: string,
  size: string,
  className?: string,
  style?: any,
  color?: string,
  hoverColor?: string,
  onClick?: () => void
}) => {

  const {
    pathName,
    size,
    className,
    style,
    color,
    hoverColor
  } = props;

  let height;
  let width;
  switch (size) {
    case 'min':
      height = 16;
      width = 16;
      break;
    case 'reg':
      height = 24;
      width = 24;
      break;
    case 'big':
      height = 32;
      width = 32;
      break;
    default:
      break;
  }

  return (
    <svg height={height}
      width={width}
      fill={color}
      >
      <path d={pathName}/>
    </svg>
  );
};

export default Icon;
