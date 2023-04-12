function App() {
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

      <Content 
        p1={{ part: part1, exCount: exercises1 }} 
        p2={{ part: part2, exCount: exercises2 }}
        p3={{ part: part3, exCount: exercises3 }}
      />

      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

function Header(props) {
  return(
    <h1>{props.course}</h1>
  )
}

function Part(props) {
  const { part, exCount } = props.info
  return(
    <p>{part} {exCount}</p>
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
