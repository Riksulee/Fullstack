import React from 'react'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total total={(course.parts.map(obj => obj.exercises)).reduce((a, b) => a + b, 0)}/>
  </div>
  )
}

const Header = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

function Part(props) {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props.parts);
  return (
    <div>
      {props.parts.map((prop, index) => (
        <Part name={prop.name} exercises={prop.exercises}/>
      ))}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total: {props.total}</p>
    </div>
  )
}

export default App
