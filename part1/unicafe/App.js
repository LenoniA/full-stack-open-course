import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Positive = (props) => {
  return (
    <tr>
      <td>positive</td> 
      <td>{(props.parts[0])*100/(props.parts[0] + props.parts[1] + props.parts[2])}%</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.parts[0] === 0 && props.parts[1] === 0 && props.parts[2] === 0) {
    return (
      <div>
        <h1>Statistics</h1>
          No feeback given
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.parts[0]} />
            <StatisticLine text="neutral" value={props.parts[1]} />
            <StatisticLine text="bad" value={props.parts[2]} />
            <StatisticLine text="all" value={props.parts[0] + props.parts[1] + props.parts[2]} />
            <StatisticLine text="average" value={(props.parts[0]*1 + props.parts[1]*0 + props.parts[2]*-1)/(props.parts[0] + props.parts[1] + props.parts[2])} />
            <Positive parts={props.parts} />
            </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" value={good} onClick={() => setGood(good + 1)} />
      <Button text="neutral" value={neutral} onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" value={bad} onClick={() => setBad(bad + 1)} />
      <Statistics parts={[good, neutral, bad]} />
    </div>
  )
}

export default App