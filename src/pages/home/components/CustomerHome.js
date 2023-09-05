import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { FaPlus } from 'react-icons/fa'
import PetCard from './PetCard'
import NewPetFormCard from './NewPetFormCard'
import OrderItem from './OrderItem'

const CustomerHome = ({
  loggedUser,
  petsByUser,
  ordersByUser,
  handleAddPet,
  handlePedirCombo,
  handleDeletePet,
  onSwitchPetCastratedAction,
  onPetFormSubmit,
  toggleShowPetForm,
  petName,
  petAge,
  petWeight,
  petRace,
  setPetName,
  setPetAge,
  setPetWeight,
  setPetRace,
}) => {
  return (
    <Container className='section'>
      <Row className='justify-content-md-center'>
        <Col md={{ span: 6 }}>
          <h1>Logueado como {loggedUser.role}</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className='mt-4'>Mis mascotas</h3>
          <div className='pets-wrapper'>
            {/* MUESTRO LA LISTA DE MASCOTAS PARA EL USUARIO LOGUEADO */}
            {petsByUser.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                handlePedirCombo={handlePedirCombo}
                handleDeletePet={handleDeletePet}
              />
            ))}

            {/* AGREGO UN BOTON PARA PODER REGISTRAR NUEVAS MASCOTAS */}
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
              <NewPetFormCard
                onPetFormSubmit={onPetFormSubmit}
                petName={petName}
                petAge={petAge}
                petWeight={petWeight}
                petRace={petRace}
                setPetName={setPetName}
                setPetAge={setPetAge}
                setPetWeight={setPetWeight}
                setPetRace={setPetRace}
                onSwitchPetCastratedAction={onSwitchPetCastratedAction}
              />
            )}
          </div>
        </Col>
      </Row>

      {/* MUESTRO LA LISTA DE PEDIDOS SI HAY GENERADOS POR EL CLIENTE LOGUEADO  */}
      {ordersByUser?.length > 0 && (
        <Row>
          <Col>
            <h3 className='mt-4'>Mis pedidos</h3>
            <div className='orders-list'>
              {ordersByUser.map((order, index) => (
                <OrderItem
                  key={order.id}
                  pets={petsByUser}
                  order={order}
                  index={index}
                />
              ))}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default CustomerHome
