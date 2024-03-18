import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


const App = () => {

  const [count, setCount] = useState(0)
  const[joke, setJoke] = useState([])

  useEffect(() => {
    axios.get('/api/jokes').then((res) => {
      console.log(res.data)
      setJoke(res.data)
    }).then((err) => {
      console.log(err)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="react logo" />
        <img src={viteLogo} className="App-logo" alt="vite logo" />
        <br />
        <span>{joke.length}</span>
        <p>
          <button onClick={() => setCount(count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
        {
          joke.map((joke) => {
            return (
              <div key={joke.id}>
                {joke.id}-
                {joke.joke}
              </div>
            )
          })
        }
        </p>
      </header>
    </div>
  )
}

export default App
