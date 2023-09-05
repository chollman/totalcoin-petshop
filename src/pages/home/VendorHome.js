import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import PetCard from './PetCard'

const VendorHome = ({ loggedUser, allPets, allUsers }) => {
  const [toggleShowPetsAndOwners, setToggleShowPetsAndOwners] = useState(false)

  const handleShowPetsAndOwners = () => {
    setToggleShowPetsAndOwners(!toggleShowPetsAndOwners)
  }

  return (
    <Container className='section'>
      <Row className='justify-content-md-center'>
        <Col md={{ span: 6 }}>
          <h1>Logueado como {loggedUser.role}</h1>
          <div className='gap-2 d-grid'>
            <Button variant='info'>Ver pedidos</Button>
            <Button variant='info'>Ver vendedores</Button>
            <Button variant='info' onClick={handleShowPetsAndOwners}>
              Ver listado de mascotas y dueños
            </Button>
          </div>
        </Col>
      </Row>
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
