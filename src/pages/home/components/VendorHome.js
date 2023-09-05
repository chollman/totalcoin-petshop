import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import PetCard from './PetCard'
import Card from 'react-bootstrap/Card'
import OrderItem from './OrderItem'

const VendorHome = ({
  loggedUser,
  allPets,
  allUsers,
  allOrders,
  handleChangeRol,
  handleDeliveryClicked,
}) => {
  const [toggleShowPetsAndOwners, setToggleShowPetsAndOwners] = useState(false)
  const [toggleShowUsers, setToggleShowUsers] = useState(false)
  const [toggleShowOrders, setToggleShowOrders] = useState(true)

  const handleShowPetsAndOwners = () => {
    setToggleShowPetsAndOwners(!toggleShowPetsAndOwners)
  }
  const handleShowUsers = () => {
    setToggleShowUsers(!toggleShowUsers)
  }
  const handleShowOrders = () => {
    setToggleShowOrders(!toggleShowOrders)
  }

  return (
    <Container className='section'>
      <Row className='justify-content-md-center'>
        <Col md={{ span: 6 }}>
          <h1>Logueado como {loggedUser.role}</h1>
          <div className='gap-2 d-grid'>
            <Button variant='info' onClick={handleShowOrders}>
              Ver pedidos
            </Button>
            <Button variant='info' onClick={handleShowUsers}>
              Ver vendedores
            </Button>
            <Button variant='info' onClick={handleShowPetsAndOwners}>
              Ver listado de mascotas y dueños
            </Button>
          </div>
        </Col>
      </Row>

      {toggleShowOrders && (
        <Row>
          <Col>
            <h3>Ordenes generadas</h3>
            <Row className='vendors-orders-list orders-list'>
              {allOrders.map((order, index) => (
                <OrderItem
                  key={order.id}
                  pets={allPets}
                  users={allUsers}
                  order={order}
                  index={index}
                  handleDeliveryClicked={handleDeliveryClicked}
                />
              ))}
            </Row>
          </Col>
        </Row>
      )}

      {toggleShowUsers && (
        <Row>
          <Col>
            <h3>Usuarios y vendedores</h3>
            <Row className='vendor-customer-list'>
              {allUsers.map((user) => (
                <React.Fragment key={user.id}>
                  {loggedUser?.id !== user.id && (
                    <Col md={6}>
                      <Card data-bs-theme='dark'>
                        <Card.Body>
                          <div>Nombre: {user.name}</div>
                          <div>Rol: {user.role}</div>
                          <Col
                            md={{ span: 6, offset: 6 }}
                            className='gap-2 d-grid'
                          >
                            <Button
                              onClick={() => handleChangeRol(user.id)}
                              variant='info'
                            >
                              Cambiar Rol
                            </Button>
                          </Col>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                </React.Fragment>
              ))}
            </Row>
          </Col>
        </Row>
      )}

      {toggleShowPetsAndOwners && (
        <Row>
          <Col>
            <h3>Mascotas y dueños</h3>
            <div className='vendor-pets-list pets-wrapper'>
              {allPets.map((pet) => {
                const owner = allUsers.find((user) => user.id === pet.ownerId)
                return <PetCard key={pet.id} pet={pet} owner={owner} />
              })}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default VendorHome
