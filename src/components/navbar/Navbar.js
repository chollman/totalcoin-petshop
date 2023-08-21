import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import { navbarLinks } from '../../utils/navbar-links'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './navbar.scss'

const NavbarTop = () => {
  return (
    <Container className='navbar-wrapper'>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand='lg'>
            <Navbar.Brand href='#home'>TOTALCOIN</Navbar.Brand>
            <Navbar.Toggle className='cambiame'></Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className='content'>
                <div className='link-container'>
                  {navbarLinks.map(({ id, title, url }) => {
                    return (
                      <NavLink
                        key={id}
                        to={url}
                        className={({ isActive }) =>
                          isActive ? 'active link' : 'link'
                        }
                      >
                        {title}
                      </NavLink>
                    )
                  })}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default NavbarTop
