import * as React from 'react';
import * as classnames from 'classnames';
import iconLoader from "../../lib/icons/icon-loader";

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

  return (
    <div>
    </div>
  );
};
