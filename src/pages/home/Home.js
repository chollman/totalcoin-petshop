import { MdOutlinePets } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  const loggedUser = useSelector((state) => state.users.loggedUser)
  if (loggedUser) {
    if (loggedUser.role === 'vendedor') {
      return (
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={{ span: 6 }}>
              <h3>Logueado como {loggedUser.role}</h3>
              <div className='gap-2 d-grid'>
                <Button variant='info'>Ver pedidos</Button>
                <Button variant='info'>Ver vendedores</Button>
                <Button variant='info'>Ver listado de mascotas y dueños</Button>
                <Button variant='info'>Crear vendedor</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container>
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
        </Container>
      )
    }
  }
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
