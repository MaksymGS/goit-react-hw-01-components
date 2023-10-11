import React from 'react';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ amount, currency, id, type }) => (
        <tbody className={styles.tableBody} key={id}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
