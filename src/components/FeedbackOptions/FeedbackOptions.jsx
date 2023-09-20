import {Btn} from 'components/FeedbackOptions/FeedbackOptions.styled'
import PropTypes from 'prop-types'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsName = Object.keys(options);

  return optionsName.map(option => (
    <Btn type="button" key={option} onClick={onLeaveFeedback}>
      {option}
    </Btn>
  ));
};


FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func,
};