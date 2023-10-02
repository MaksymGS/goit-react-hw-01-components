import React from 'react';
import styles from './FriendList.module.css';
import {FriendListItem} from './FriendListItem/FriendListItem';

export const FriendList = (props) => {
    console.log(props.friends);
  return <ul className={styles.list}>
    <FriendListItem friends={props.friends}/>
  </ul>;
};
