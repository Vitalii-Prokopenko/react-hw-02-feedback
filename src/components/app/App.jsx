import React, { Component } from 'react';
import FeedbackOptions from '../feedback-options/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Section from '../section/Section';
import Notification from '../notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  CountTotalFeedback = () => {
    const feedbacks = Object.values(this.state);
    let totalFeedback = 0;
    for (let feedback of feedbacks) {
      totalFeedback += feedback;
    }
    return totalFeedback;
  };

  CountPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.CountTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  };

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.CountTotalFeedback();
    const positiveFeedbackPercentage =
      this.CountPositiveFeedbackPercentage().toFixed(2);

    return (
      <>
        <div
          style={{
            height: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template ...
        </div>
        <Section
          title={'Please leave feedback'}
          component={
            <FeedbackOptions
              options={feedbackOptions}
              onLeaveFeedback={this.handleClick}
            />
          }
        />
        <Section
          title={'Statistics'}
          component={
            this.CountTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )
          }
        />
      </>
    );
  }
}

export default App;
