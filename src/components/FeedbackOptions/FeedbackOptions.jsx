import {Btn} from 'components/FeedbackOptions/FeedbackOptions.styled'
import PropTypes from 'prop-types'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return options.map(option => (
    <Btn type="button" key={option} onClick={onLeaveFeedback}>
      {option}
    </Btn>
  ));
};


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};