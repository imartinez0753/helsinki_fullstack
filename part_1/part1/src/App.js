import React from 'react'

const Header = (props) => {
  return (
    <>
    <h3> Welcome to {props.course} </h3>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <p>
      {props.part1} {props.exercises1} {props.part2} {props.exercise2} {props.part3} {props.exercises3}
    </p>
    </>
  )
}
const Total = (props) => {
  return (
    <>
    <p>
      Total number of exercises is {props.total}
    </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercise2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App