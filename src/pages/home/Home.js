import { MdOutlinePets } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { addPet, removePet } from '../../store/pets/petsSlice'
import { addOrder } from '../../store/orders/ordersSlice'
import './home.scss'
import { useState } from 'react'
import CustomerHome from './CustomerHome'
import VendorHome from './VendorHome'

const Home = () => {
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.users.list)
  const loggedUser = useSelector((state) => state.users.loggedUser)
  const allPets = useSelector((state) => state.pets.list)
  const petsByUser = useSelector((state) => state.pets.list).filter(
    (pet) => pet.ownerId === loggedUser?.id,
  )
  const ordersByUser = useSelector((state) => state.orders.list).filter(
    (order) => order.customerId === loggedUser?.id,
  )
  const [petName, setPetName] = useState('')
  const [petAge, setPetAge] = useState('')
  const [petWeight, setPetWeight] = useState('')
  const [petRace, setPetRace] = useState('Perro')
  const [petCastrated, setPetCastrated] = useState(false)
  const [toggleShowPetForm, setToggleShowPetForm] = useState(false)

  const handlePedirCombo = (pet) => {
    dispatch(
      addOrder({
        pet: pet,
        user: loggedUser,
      }),
    )
  }

  const handleDeletePet = (petId) => {
    dispatch(removePet(petId))
  }

  const handleAddPet = () => {
    setToggleShowPetForm(!toggleShowPetForm)
  }

  const onSwitchPetCastratedAction = () => {
    setPetCastrated(!petCastrated)
  }

  const onPetFormSubmit = (e) => {
    e.preventDefault()
    if (petName && petAge && petWeight && petRace) {
      dispatch(
        addPet({
          name: petName,
          age: petAge,
          weight: petWeight,
          race: petRace,
          castrated: petCastrated,
          ownerId: loggedUser?.id,
        }),
      )
      setPetName('')
      setPetAge('')
      setPetWeight('')
      setPetRace('Perro')
      setPetCastrated(false)
      setToggleShowPetForm(!toggleShowPetForm)
    }
  }

  if (loggedUser) {
    if (loggedUser.role === 'vendedor') {
      // SI EL USUARIO LOGUEADO TIENE ROL DE VENDEDOR MUESTRO LAS OPCIONES QUE TIENE DICHO ROL
      return (
        <VendorHome
          loggedUser={loggedUser}
          allPets={allPets}
          allUsers={allUsers}
        />
      )
    } else {
      // SINO, MUESTRO LAS OPCIONES QUE TIENE EL CLIENTE, CON SUS MASCOTAS
      return (
        <CustomerHome
          loggedUser={loggedUser}
          petsByUser={petsByUser}
          ordersByUser={ordersByUser}
          handleAddPet={handleAddPet}
          handlePedirCombo={handlePedirCombo}
          handleDeletePet={handleDeletePet}
          onSwitchPetCastratedAction={onSwitchPetCastratedAction}
          onPetFormSubmit={onPetFormSubmit}
          toggleShowPetForm={toggleShowPetForm}
          petName={petName}
          petAge={petAge}
          petWeight={petWeight}
          petRace={petRace}
          setPetName={setPetName}
          setPetAge={setPetAge}
          setPetWeight={setPetWeight}
          setPetRace={setPetRace}
        />
      )
    }
  }

  // SI NO HAY USUARIO LOGUEADO MOSTRAR HOME DEFAULT
  return (
    <Container>
      <Row>
        <Col>
          <p style={{ textAlign: 'center' }}>
            Por favor, registrate o iniciá sesión para poder usar la App.
          </p>
          <div className='home-icon'>
            <MdOutlinePets />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
