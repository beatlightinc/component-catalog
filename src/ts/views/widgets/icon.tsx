import * as React from 'react';
import * as classnames from 'classnames';
import IconLoader from '../../lib/icons/icon-loader';
import { assign } from 'lodash';

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
  IconLoader.load(iconPath).then((svg: any) => {
    const wrapperElement = this.refs.wrapper.value;
    wrapperElement.innerHTML = '';
    wrapperElement.appendChild(svg);
    wrapperElement.querySelector('svg *').getAttribute('fill', color);

    if (size === 'mob') {
      wrapperElement.querySelector('svg').getAttribute('width', 25);
      wrapperElement.querySelector('svg').getAttribute('height', 25);
    }

    // Do the hover dance
    if (hoverColor) {
      const onHover = () => wrapperElement.querySelector('svg *').getAttribute('fill', hoverColor);
      const offHover = () => wrapperElement.querySelector('svg *').getAttribute('fill', color);
      // This might need mouseover instead of hover, trying to get rid of jQuery is hard work! :)
      wrapperElement.parentNode.hover(onHover, offHover);
    }
  });

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
