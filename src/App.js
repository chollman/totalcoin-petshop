import './App.scss'
import { SharedLayout } from './components'
import { MdOutlinePets } from 'react-icons/md'

function App() {
  return (
    <div className='App'>
      <h1>Autoservicio Veterinaria</h1>
      <SharedLayout />
      <div className='home-icon'>
        <MdOutlinePets />
      </div>
    </div>
  )
}

export default App
