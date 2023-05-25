import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf({
    option: propTypes.string,
  }),
  onLeaveFeedback: propTypes.func.isRequired,
};