import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PetCard = ({ pet, handleDeletePet }) => {
  return (
    <Card data-bs-theme='dark' className='pet-card'>
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
          <Button onClick={() => handleDeletePet(pet.id)} variant='danger'>
            Borrar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PetCard
