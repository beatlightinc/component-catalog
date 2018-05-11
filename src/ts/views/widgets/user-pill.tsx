import * as React from 'react';
import * as classnames from 'classnames';
import Pill from './pill';
import Avatar from './avatar';

const UserPill = (props: {
  type?: string
  userName?: string,
  imgSrc?: string,
  removeable?: boolean
}) => {
  const { type, userName, imgSrc, removeable } = props;
  return (
    <Pill type={type} removeable={removeable} className="user-pill">
      <Avatar wrapperClass="user-pill-avatar" imgSrc={imgSrc} height={32} width={32} circle={true}/>
      {userName}
    </Pill>
  );
};

export default UserPill;
