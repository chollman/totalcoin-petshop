import { MdOutlinePets } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { removePet } from '../../store/pets/petsSlice'

const Home = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.users.loggedUser)
  const petsByUser = useSelector((state) => state.pets.list).filter(
    (pet) => pet.ownerId === loggedUser?.id,
  )

  const handleDeletePet = (petId) => {
    dispatch(removePet(petId))
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

          {petsByUser.length > 0 && (
            <Row>
              <Col>
                <h3 className='mt-4'>Mis mascotas</h3>
                {petsByUser.map((pet) => (
                  <Card
                    key={pet.id}
                    data-bs-theme='dark'
                    style={{
                      width: '18rem',
                      display: 'inline-block',
                      margin: '8px',
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{pet.name}</Card.Title>
                      <Card.Text>
                        Edad: {pet.age} <br />
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
              </Col>
            </Row>
          )}
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
