import React from 'react';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.ofline}></span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
