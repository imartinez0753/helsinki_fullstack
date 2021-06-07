import React from 'react'
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old. </p>
    </div>
  )
}

const App = () => {
  const name = "Ian"
  const age = 32
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Amalia" age={20 + 10} />
    </>
  )
}
export default App