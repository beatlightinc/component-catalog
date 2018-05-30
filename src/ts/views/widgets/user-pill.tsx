import * as React from 'react';
import * as classnames from 'classnames';
import Pill from './pill';
import Avatar from './avatar';

const UserPill = (props: {
  type?: string
  userName?: string,
  imgSrc: string,
  removeable?: boolean,
  active?: boolean
}) => {
  const { type, userName, imgSrc, removeable, active } = props;
  return (
    <Pill type={type} removeable={removeable} className="user-pill" title={userName} active={active}>
      <Avatar wrapperClass="user-pill-avatar" imgSrc={imgSrc} height={32} width={32} circle={true}/>
    </Pill>
  );
};

export default UserPill;
