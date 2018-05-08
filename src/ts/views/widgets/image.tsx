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
  const customStyle = style || {
    height: `${height}px`,
    width: `${width}px`
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
