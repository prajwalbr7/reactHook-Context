import {useState} from 'react'
import Context from './Context/Context'
import Header from './components/Header'
import './App.css'

const App = () => {
  const [change, setChange] = useState(false)
  return (
    <>
      <Context.Provider value={[change, setChange]}>
        <Header />
        <div>{change ? 'hello' : 'bye'}</div>
      </Context.Provider>
    </>
  )
}

export default App
