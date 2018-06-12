import * as React from 'react';
import * as classnames from 'classnames';
import Image from './image';

const Avatar = (props: {
  imgSrc?: string,
  height: number,
  width: number,
  circle?: boolean,
  avatarStyle?: any,
  wrapperStyle?: any,
  wrapperClass?: string,
  avatarClass?: string
}) => {

  const {
    imgSrc,
    height,
    width,
    circle,
    avatarStyle,
    wrapperStyle,
    wrapperClass,
    avatarClass
  } = props;

  const avatarWrapperClass = classnames('avatar-wrapper', wrapperClass, {
    circle
  });

  const innerWrapper = classnames('avatar', avatarClass, {
    circle
  });

  return (
    <div className={avatarWrapperClass} style={wrapperStyle}>
      <Image
        url={imgSrc}
        height={height}
        width={width}
        className={innerWrapper}
        style={avatarStyle}/>
    </div>
  );
};

export default Avatar;
