import PropTypes from 'prop-types';
import css from 'components/feedback-options/feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css['btn-list']}>
    {options.map(option => {
      return (
        <button
          key={option}
          className={css['feedback-btn']}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
