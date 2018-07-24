import * as React from 'react';
import * as classnames from 'classnames';

const Image = (props: {
  className?: string,
  style?: any,
  url: string,
  height: number,
  width: number
}) => {
  const {
    className,
    style,
    url,
    height,
    width
  } = props;

  const imageClass = classnames('image-wrapper', className);
  const customStyle = style || {};
  const backgroundStyle: any = {
    height: `${height}px`,
    width: `${width}px`
  };

  if (url) {
    backgroundStyle.backgroundImage = `url(${url})`;
  }

  else {
    backgroundStyle.background = '#E5E5E5';
  }

  return (
    <div
     className={imageClass}
     style={Object.assign(customStyle, backgroundStyle)}
    />
  );
};

export default Image;
