import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className={styles.container}>
      <h2>Please leave feedback</h2>
      <div className={styles.btnSpace}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => handleFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => handleFeedback('bad')}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
