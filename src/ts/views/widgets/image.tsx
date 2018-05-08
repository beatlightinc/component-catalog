import * as React from 'react';
import * as classnames from 'classnames';

const Image = (props: {
  className?: string,
  style?: any,
  url: string,
  height?: number,
  width?: number
}) => {
  const {
    className,
    style,
    url,
    height,
    width
  } = props;

  const imageClass = classnames('image-wrapper', className);
  const customStyle = style || {
    height: height ? `${height}px` : '150px',
    width: width ? `${width}px` : '200px'
  };
  const backgroundStyle = { backgroundImage: `url(${url})` };

  return (
    <div
      className={imageClass}
      style={Object.assign(customStyle, backgroundStyle)}
      >
    </div>
  );
};

export default Image;
