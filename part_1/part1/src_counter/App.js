import React from 'react'



// const Header = (props) => {
//   console.log(props);
//   return (
//     <>
//     <h3> Welcome to {props.course} </h3>
//     </>
//   )
// }

// const Part = (props) => {
//   return(
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }

// const Content = () => {
//   const part= [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   return (
//     <>
//     <div>
//       <Part part={part[0].name} exercises={part[0].exercises} />
//       <Part part={part[1].name} exercises={part[1].exercises} />
//       <Part part={part[2].name} exercises={part[2].exercises} />
//     </div>
//     </>
//   )
// }
// const Total = (props) => {
//   console.log(props)
//   return (
//     <>
//     <p>
//       Total number of exercises is {props.total}
//     </p>
//     </>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }


//   return (
//     <div>
//       <Header course={course.name} />
//       <Content />     
//       <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
//     </div>
//   )
// }
// -----------------------------------------------------------------------------------------------------------

const Hello = ({ name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      {/* <Hello name="Maya" age={26 + 10} /> */}
      <Hello name={name} age={age} />
    </div>
  )
}


export default App