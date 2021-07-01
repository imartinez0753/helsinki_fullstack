import React, { useState } from 'react'
const History = ({all, good, neutral, bad, average, percentage}) => {
  if (all === 0) {
    return (
      <div>
        No data currently entered.
      </div>
    )
  }
  return (
    
      <table>
        <tbody>
        <tr>
          <td>
          <Statistics text={'Good: '} />  
          </td>      
        <td>
          <Statistics value={good} />
        </td>
        </tr>
        <tr>
          <td>
          <Statistics text={'Bad: '} />
          </td>        
        <td>
          <Statistics value={bad} />
        </td>
        </tr>
        <tr>
          <td>
          <Statistics text={'Neutral: '} />  
          </td>      
        <td>
          <Statistics value={neutral} />
        </td>
        </tr>
        <tr>
          <td>
          <Statistics text={'All: '} />        
          </td>
        <td>
          <Statistics value={all} />
        </td>
        </tr>
        <tr>
          <td>
          <Statistics text={'Average: '} />        
          </td>
        <td>
          <Statistics value={average} />
        </td>
        </tr>
        <tr>
          <td>
          <Statistics text={'Percentage: '} />        
          </td>
        <td>
          <Statistics value={percentage} />
        </td>
        </tr>
        </tbody>
      </table>
    
  )
}
const Statistics = ({text, value}) => (
<div>
  {text}
  {value}
</div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)        
  const handleGoodClick = () => {
        setPercentage((good/all)*100)
        setAverage(all/3)
        setAll(all + 1)
        setGood(good + 1)
      }
  const handleNeutralCLick = () => {
    setPercentage((good/all)*100)
    setAverage(all/3)
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadCLick = () => {
    setPercentage((good/all)*100)
    setAverage(all/3)
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralCLick} text='neutral' />
      <Button handleClick={handleBadCLick} text='bad' />
      <h3>statistics</h3>
      <History all={all} good={good} bad={bad} average={average} percentage={percentage} neutral={neutral}/>
      
      
    </div>
  )
}

export default App