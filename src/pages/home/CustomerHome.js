import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaPlus } from 'react-icons/fa'
import { AiFillCheckSquare } from 'react-icons/ai'
import PetCard from './PetCard'

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
            {petsByUser.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                handlePedirCombo={handlePedirCombo}
                handleDeletePet={handleDeletePet}
              />
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
                  <form onSubmit={onPetFormSubmit}>
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

      {ordersByUser?.length > 0 && (
        <Row>
          <Col>
            <h3 className='mt-4'>Mis pedidos</h3>
            <div className='my-orders-list'>
              {ordersByUser.map((order, index) => {
                const pet = petsByUser.find((pet) => order.petId === pet.id)
                return (
                  <div className='order' key={order.id}>
                    <div>{index + 1}.</div>
                    <div>{order.date}</div>
                    <div>
                      Combo para {pet.race}: {pet.name} de {order.amount} kg de
                      comida y {order.complement1 + order.complement2}{' '}
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
