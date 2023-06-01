import "./styles/styles.css"

const App = () => {

  return (
    <div>
        <h1>hello</h1>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.name}</p>
    </div>
  )
}

export default App