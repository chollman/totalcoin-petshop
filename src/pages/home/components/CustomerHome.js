import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { FaPlus } from 'react-icons/fa'
import { AiFillCheckSquare } from 'react-icons/ai'
import PetCard from './PetCard'
import NewPetFormCard from './NewPetFormCard'

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

      {ordersByUser?.length > 0 && (
        <Row>
          <Col>
            <h3 className='mt-4'>Mis pedidos</h3>
            <div className='orders-list'>
              {ordersByUser.map((order, index) => {
                const pet = petsByUser.find((pet) => order.petId === pet.id)
                if (!pet) {
                  return
                }
                return (
                  <div className='order' key={order.id}>
                    <div>{index + 1}.</div>
                    <div>{order.date}</div>
                    <div>
                      Combo para {pet?.race}: {pet?.name} de {order.amount} kg
                      de comida y {order.complement1 + order.complement2}{' '}
                      complementos dietarios
                    </div>
                    <div
                      className={
                        order.delivered
                          ? 'order-status delivered'
                          : 'order-status'
                      }
                    >
                      <AiFillCheckSquare />
                    </div>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default CustomerHome
