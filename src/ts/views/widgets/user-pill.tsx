import * as React from 'react';
import * as classnames from 'classnames';
import Pill from './pill';

const UserPill = (props: {
  type?: string
  userName?: string,
  imgSrc?: string,
  removeable?: boolean
}) => {
  const { type, userName, imgSrc, removeable } = props;
  return (
    <Pill type={type} removeable={removeable}>
      {/* Separately styled avatar will go here. */}
      {userName}
    </Pill>
  );
};
