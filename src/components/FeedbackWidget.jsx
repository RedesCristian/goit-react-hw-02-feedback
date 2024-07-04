import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './FeedbackWidget.module.css';

class FeedbackWidget extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
    };
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={() => this.handleFeedback('good')}>
          Good
        </button>
        <button type="button" onClick={() => this.handleFeedback('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => this.handleFeedback('bad')}>
          Bad
        </button>

        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<FeedbackWidget />, document.getElementById('root'));
export default FeedbackWidget;
