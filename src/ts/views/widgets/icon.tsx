import * as React from 'react';
import * as classnames from 'classnames';
import { assign } from 'lodash';
import ICONS from '../../icons/icon-constants';

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

  function mouseOver(e: any) {
    e.target.style.fill = hoverColor ? hoverColor : color;
  }

  function mouseOut(e: any) {
    e.target.style.fill = color;
  }

  return (
    <svg height={height}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
      >
      <path d={ICONS[pathName]} fill={color} onMouseOver={mouseOver} onMouseOut={mouseOut}/>
    </svg>
  );
};

export default Icon;
