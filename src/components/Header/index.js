import {useContext} from 'react'
import Context from '../../Context/Context'
import './index.css'

const Header = () => {
  const [change, setChange] = useContext(Context)
  const ChangeText = () => {
    setChange(prevState => !prevState)
  }
  return (
    <div className="">
      <button className="" type="button" onClick={ChangeText}>
        {change ? 'Bye' : 'Hello'}
      </button>
    </div>
  )
}
export default Header
