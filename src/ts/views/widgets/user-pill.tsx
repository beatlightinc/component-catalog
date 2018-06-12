import * as React from 'react';
import * as classnames from 'classnames';
import Pill from './pill';
import Avatar from './avatar';

const UserPill = (props: {
  type?: string
  userName?: string,
  imgSrc: string,
  removeable?: boolean,
  active?: boolean,
  className?: string,
  style?: any
}) => {
  const { type, userName, imgSrc, removeable, active, className, style } = props;
  const userPillClass = classnames('user-pill', className);
  return (
    <Pill
      type={type}
      removeable={removeable}
      style={style}
      className={userPillClass}
      title={userName}
      active={active}
    >
      <Avatar wrapperClass="user-pill-avatar" imgSrc={imgSrc} height={32} width={32} circle={true}/>
    </Pill>
  );
};

export default UserPill;
