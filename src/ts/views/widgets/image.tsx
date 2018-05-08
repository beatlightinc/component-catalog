import * as React from 'react';
import * as classnames from 'classnames';

const Image = (props: {
  className?: string,
  style?: any,
  url: string
}) => {
  const {
    className,
    style,
    url
  } = props;

  const imageClass = classnames('image-component', className);
  const customStyle = style || {};
  let backgroundStyle = {};

  if (url !== null) {
    backgroundStyle = { backgroundImage: `url(${url})` };
  }

  return (
    <div
      className={imageClass}
      style={Object.assign(customStyle, backgroundStyle)}
      >
    </div>
  );
};

export default Image;
