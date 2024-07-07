import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <ul className={styles.statistics}>
        <li>
          <p className={styles.good}>Good: {good}</p>
        </li>
        <li>
          <p className={styles.neutral}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={styles.bad}>Bad: {bad}</p>
        </li>
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p className={styles.good}>Positive feedback : {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
