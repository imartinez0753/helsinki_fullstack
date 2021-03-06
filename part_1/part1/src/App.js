// import React from 'react'



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

// const Hello = ({ name, age}) => {
//   console.log(name, age)
//   console.log(new Date().getFullYear() - age)
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Ian'
//   const age = 32

//   return (
//     <div>
//       <h1>Greetings</h1>
//       {/* <Hello name="Maya" age={26 + 10} /> */}
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

//-------------------------------------------------------------------------
// import React, { useState } from 'react'

//=============================================================
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//     console.log('rendering...', counter)
    
//   return (
//     <div>{counter}</div>
//   )
// }
//-----------------------------------------------------------
// const Display = ({counter}) => 
//     <div>{counter}</div>

// const Button =({handleClick, text}) => (
//     <button onClick={handleClick}>
//     {text}
//     </button>
// )

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)
 
  

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button handleClick={increaseByOne}
//       text='plus'
//       />
//       <Button handleClick={decreaseByOne}
//       text='minus'
//       />
//       <Button handleClick={setToZero}
//       text='zero'
//       />
//     </div>
//   )
// }
//================================================================
import React, { useState } from 'react'
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     setClicks({ ...clicks, left: clicks.left + 1})
//   }

//   const handleRightClick = () => {
//     setClicks({ ...clicks, right: clicks.right + 1})
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button> 
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
//-----------------------------------------------------------------
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
export default App
