import React from 'react'

const Header = (props) => {
  console.log(props);
  return (
    <>
    <h3> Welcome to {props.course} </h3>
    </>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = () => {
  const part= [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
    <div>
      <Part part={part[0].name} exercises={part[0].exercises} />
      <Part part={part[1].name} exercises={part[1].exercises} />
      <Part part={part[2].name} exercises={part[2].exercises} />
    </div>
    </>
  )
}
const Total = (props) => {
  console.log(props)
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
  const part= [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content />     
      <Total total={part[0].exercises + part[1].exercises + part[2].exercises} />
    </div>
  )
}

export default App