import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  const handleGoodClick = () => {
        setGood(good + 1)
      }
  const handleNeutralCLick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadCLick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralCLick} text='neutral' />
      <Button handleClick={handleBadCLick} text='bad' />
      <h3>statistics</h3>
      {'good: ' + good + ' '}
      {'neutral: ' + neutral + ' '}
      {'bad: ' + bad}
    </div>
  )
}

export default App