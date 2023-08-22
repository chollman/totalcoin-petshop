import { MdOutlinePets } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Home = () => {
  const loggedUser = useSelector((state) => state.users.loggedUser)
  if (loggedUser) {
    return <div>Logueado como {loggedUser.role}</div>
  }
  return (
    <div>
      <p>Por favor, registrate o iniciá sesión para poder usar la App.</p>
      <div className='home-icon'>
        <MdOutlinePets />
      </div>
    </div>
  )
}

export default Home
