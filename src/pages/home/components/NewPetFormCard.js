import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const NewPetFormCard = ({
  onPetFormSubmit,
  petName,
  petAge,
  petWeight,
  petRace,
  setPetName,
  setPetAge,
  setPetWeight,
  setPetRace,
  onSwitchPetCastratedAction,
}) => {
  return (
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
  )
}

export default NewPetFormCard
