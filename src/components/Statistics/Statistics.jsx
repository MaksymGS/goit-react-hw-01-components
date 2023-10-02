import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  console.log(title);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(item => (
          <li
            style={{
              backgroundColor: getRandomColor(),
            }}
            key={item.id}
            className={css.item}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
