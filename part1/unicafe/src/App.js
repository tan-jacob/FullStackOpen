import React, { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <table>
        <tbody>
        <tr>
          <td>good {good}</td>
        </tr>
        <tr>
          <td>neutral {neutral}</td>
        </tr>
        <tr>
          <td>bad {bad}</td>
        </tr>
        <tr>
          <td>average {(good + neutral + bad) / 3}</td>
        </tr>
        <tr>
          <td>positive {good / (good + neutral + bad)}</td>
        </tr>
        </tbody>
      </table>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const feedbackHeader = "give feedback"
  const statisticsHeader = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={feedbackHeader} />
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Header header={statisticsHeader} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App