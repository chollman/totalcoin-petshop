import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { login } from '../../store/users/usersSlice'

const SignUp = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.users.loggedUser)
  const usersList = useSelector((state) => state.users.list)
  const [nombre, setNombre] = useState('')
  const [contrasena, setContrasena] = useState('')

  if (loggedUser) {
    return <Navigate to='/' replace />
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (nombre && contrasena) {
      const foundUser = usersList.find(
        (user) => user.name === nombre && user.password === contrasena,
      )
      if (foundUser) {
        dispatch(login(foundUser))
      } else {
        alert('Usuario o contraseña incorrectos')
      }
    }
  }

  return (
    <Container>
      <Row>
        <Col
          md={{ span: 6, offset: 3 }}
          className='card my_login_card'
          data-bs-theme='dark'
        >
          <Col className='card-body '>
            <form onSubmit={onFormSubmit}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Nombre
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Contraseña
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
