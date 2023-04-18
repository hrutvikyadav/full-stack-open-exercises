function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      <Content 
        p1={part1} 
        p2={part2}
        p3={part3}
      />

      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

function Header(props) {
  return(
    <h1>{props.course}</h1>
  )
}

function Part(props) {
  const { name, exercises } = props.info
  return(
    <p>{name} {exercises}</p>
  )
}

function Content(props) {
  const { p1, p2, p3 } = props
  return(
    <>
      <Part info={p1}/>
      <Part info={p2}/>
      <Part info={p3}/>
    </>
  )
}

function Total(props) {
  return(
    <p>Number of exercises {props.count} </p>
  )
}

export default App
