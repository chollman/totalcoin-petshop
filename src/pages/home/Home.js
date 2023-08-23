import { MdOutlinePets } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { addPet, removePet } from '../../store/pets/petsSlice'
import './home.scss'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Home = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.users.loggedUser)
  const petsByUser = useSelector((state) => state.pets.list).filter(
    (pet) => pet.ownerId === loggedUser?.id,
  )
  const [petName, setPetName] = useState('')
  const [petAge, setPetAge] = useState('')
  const [petWeight, setPetWeight] = useState('')
  const [petRace, setPetRace] = useState('Perro')
  const [petCastrated, setPetCastrated] = useState(false)
  const [toggleShowPetForm, setToggleShowPetForm] = useState(false)

  const handleDeletePet = (petId) => {
    dispatch(removePet(petId))
  }

  const handleAddPet = () => {
    setToggleShowPetForm(!toggleShowPetForm)
  }

  const onSwitchPetCastratedAction = () => {
    setPetCastrated(!petCastrated)
  }

  const onFormSubmit = (e) => {
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
        <Container className='section'>
          <Row className='justify-content-md-center'>
            <Col md={{ span: 6 }}>
              <h3>Logueado como {loggedUser.role}</h3>
              <div className='gap-2 d-grid'>
                <Button variant='info'>Ver pedidos</Button>
                <Button variant='info'>Ver vendedores</Button>
                <Button variant='info'>Ver listado de mascotas y dueños</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>ASDADS</Col>
          </Row>
        </Container>
      )
    } else {
      // SINO, MUESTRO LAS OPCIONES QUE TIENE EL CLIENTE, CON SUS MASCOTAS
      return (
        <Container className='section'>
          <Row className='justify-content-md-center'>
            <Col md={{ span: 6 }}>
              <h3>Logueado como {loggedUser.role}</h3>
              <div className='gap-2 d-grid'>
                <Button variant='info'>Registrar mascota</Button>
                <Button variant='info'>Hacer pedido de combos</Button>
                <Button variant='info'>Ver histórico de pedidos</Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className='mt-4'>Mis mascotas</h3>
              <div className='pets-wrapper'>
                {petsByUser.map((pet) => (
                  <Card key={pet.id} data-bs-theme='dark' className='pet-card'>
                    <Card.Body>
                      <Card.Title>{pet.name}</Card.Title>
                      <Card.Text>
                        Edad: {pet.age} <br />
                        Raza: {pet.race} <br />
                        Peso: {pet.weight} <br />
                        Castrado/a: {pet.castrated ? 'Sí' : 'No'} <br />
                      </Card.Text>
                      <div className='gap-2 d-grid'>
                        <Button onClick={() => {}} variant='info'>
                          Pedir Combo
                        </Button>
                        <Button
                          onClick={() => handleDeletePet(pet.id)}
                          variant='danger'
                        >
                          Borrar
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
                {!toggleShowPetForm && (
                  <Card
                    data-bs-theme='dark'
                    className='pet-card add-card'
                    onClick={handleAddPet}
                  >
                    <Card.Body>
                      <Card.Text className='card-icon'>
                        <FaPlus />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}

                {toggleShowPetForm && (
                  <Card data-bs-theme='dark' className='pet-card'>
                    <Card.Body>
                      <form onSubmit={onFormSubmit}>
                        <div className='mb-1'>
                          <input
                            type='text'
                            className='form-control'
                            id='pet-name'
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            placeholder='Nombre'
                          />
                        </div>
                        <div className='mb-1'>
                          <input
                            type='number'
                            className='form-control'
                            id='pet-age'
                            value={petAge}
                            onChange={(e) => setPetAge(e.target.value)}
                            placeholder='Edad'
                          />
                        </div>
                        <div className='mb-1'>
                          <input
                            type='number'
                            className='form-control'
                            id='pet-weight'
                            value={petWeight}
                            onChange={(e) => setPetWeight(e.target.value)}
                            placeholder='Peso'
                          />
                        </div>
                        <div className='mb-1'>
                          <Form.Check
                            inline
                            label='Perro'
                            name='group1'
                            type='radio'
                            id={`inline-radio-1`}
                            value='Perro'
                            checked={petRace === 'Perro'}
                            onChange={(e) => setPetRace(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label='Gato'
                            name='group1'
                            type='radio'
                            id={`inline-radio-2`}
                            value='Gato'
                            checked={petRace === 'Gato'}
                            onChange={(e) => setPetRace(e.target.value)}
                          />
                        </div>
                        <div className='mb-1'>
                          <Form.Check
                            type='switch'
                            id='pet-castrated'
                            label='Castrado/a'
                            onChange={onSwitchPetCastratedAction}
                          />
                        </div>
                        <div className='gap-2 d-grid'>
                          <Button type='submit' variant='info'>
                            Registrar mascota
                          </Button>
                        </div>
                      </form>
                    </Card.Body>
                  </Card>
                )}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className='mt-4'>Mis pedidos</h3>
            </Col>
          </Row>
        </Container>
      )
    }
  }

  // SI NO HAY USUARIO LOGUEADO MOSTRAR HOME DEFAULT
  return (
    <Container>
      <Row>
        <Col>
          <p>Por favor, registrate o iniciá sesión para poder usar la App.</p>
          <div className='home-icon'>
            <MdOutlinePets />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
