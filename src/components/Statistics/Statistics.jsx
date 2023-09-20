import React from "react"
import { Paragraph,} from './Statistics.styled';
import PropTypes from 'prop-types'

export function Statistics({good, neutral, bad, total, positivePercentage}) {
  

 
    return (
      <div>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>PositivePercentage: {positivePercentage}%</Paragraph>
      </div>
    );
  
}


Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}