import React from 'react';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  console.log(friends);
  return friends.map(({ avatar, id, name, isOnline }) => (
    <li key={id} className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.ofline}></span>
      )}
      {/* <span className={styles.status}>{isOnline}</span> */}
      <img
        className={styles.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  ));
};
