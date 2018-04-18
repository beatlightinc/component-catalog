import * as React from 'react';
import * as classnames from 'classnames';
import IconLoader from '../../lib/icons/icon-loader';

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

  });

  return (
    <div>
    </div>
  );
};
