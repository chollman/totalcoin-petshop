import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const VendorHome = ({ loggedUser }) => {
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
}

export default VendorHome
