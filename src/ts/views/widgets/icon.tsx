import * as React from 'react';
import * as classnames from 'classnames';
import { assign } from 'lodash';
import * as ICONS from '../../icons/icon-constants.json';

const Icon = (props: {
  pathName: any,
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
    e.target.fillColor = hoverColor ? hoverColor : color;
  }

  function mouseOut(e: any) {
    e.target.fillColor = color;
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
