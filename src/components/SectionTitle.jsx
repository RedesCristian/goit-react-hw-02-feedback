import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import styles from './Notification.module.css';

class SectionTitle extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <div>
        <FeedbackOptions handleFeedback={this.handleFeedback} />
        {total === 0 ? (
          <Notification
            className={styles.notification}
            message="There is no feedback"
          />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
      </div>
    );
  }
}

export default SectionTitle;
