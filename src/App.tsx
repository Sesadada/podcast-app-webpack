import './styles/styles.css'

const App = () => {
  const name = 'sere'
  return (
    <div>
      <h1>hello {name}</h1>
      <p>yes</p>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.name}</p>
    </div>
  )
}

export default App
