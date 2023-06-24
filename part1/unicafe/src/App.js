import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
  const positivePercent = (good * 100) / (good + neutral + bad);
  return (
    <>
      <h1>statistics</h1>
      {total ? (
        <table>
          <tbody>
            <StatisticsLine text={"good"} value={good} />
            <StatisticsLine text={"neutral"} value={neutral} />
            <StatisticsLine text={"bad"} value={bad} />
            <StatisticsLine text={"all"} value={total} />
            <StatisticsLine text={"average"} value={average} />
            <StatisticsLine text={"positive"} value={positivePercent + "%"} />
          </tbody>
        </table>
      ) : (
        <p> No feedback given</p>
      )}
    </>
  );
};

const Button = ({ text, onClickHandler }) => {
  return <button onClick={onClickHandler}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClicked = () => {
    setGood(good + 1);
  };
  const handleNeutralClicked = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClicked = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClickHandler={handleGoodClicked} />
      <Button text={"neutral"} onClickHandler={handleNeutralClicked} />
      <Button text={"bad"} onClickHandler={handleBadClicked} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
