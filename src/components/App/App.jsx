import { useState } from "react"
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";



export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateValueHandler = e => {
  const { textContent } = e.currentTarget;
  
  switch (textContent) {
    case 'good':
      setGood(prevState => prevState + 1);
      break;

    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;

    case 'bad':
      setBad(prevState => prevState + 1);
      break;
    
    default:
      return;
  }
};

  const countTotalFeedback = () => {
    return (good + neutral + bad)
  };
  
  const countPositiveFeedbackPercentage = () => {
    const result = (good / countTotalFeedback()) * 100;
    if (!result) {
      return 0;
    }
    return Math.floor(result);
  };
    
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={stateValueHandler}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   stateValueHandler = e => {
//     const { textContent } = e.currentTarget;
//     this.setState(prevState => {
//       return { [textContent]: prevState[textContent] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state
//     return (good + neutral + bad)
//   };

  // countPositiveFeedbackPercentage = () => {
  //   const result = ((this.state.good / this.countTotalFeedback()) * 100)
  //   if (!result) {
  //     return 0;
  //   }
  //   return Math.floor(result);
  // };

//   render() {
//     const { good, neutral, bad } = this.state
//     const total = this.countTotalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.stateValueHandler}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }