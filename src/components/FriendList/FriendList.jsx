import React from 'react';
import styles from './FriendList.module.css';
import {FriendListItem} from './FriendListItem/FriendListItem';

export const FriendList = (props) => {
  return <ul className={styles.list}>
    <FriendListItem friends={props.friends}/>
  </ul>;
};
