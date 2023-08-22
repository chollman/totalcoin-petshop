import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import { navbarLinks } from '../../utils/navbar-links'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from 'react-redux'
import { FaHome } from 'react-icons/fa'
import { logout } from '../../store/users/usersSlice'

import './navbar.scss'

const NavbarTop = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.users.loggedUser)

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <Container className='navbar-wrapper'>
      <Row>
        <Col>
          <Navbar
            className='justify-content-between'
            collapseOnSelect
            expand='lg'
          >
            <Navbar.Brand href='#home'>TOTALCOIN</Navbar.Brand>
            <Navbar.Toggle className='cambiame'></Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className='content'>
                <div className='link-container'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'active link' : 'link'
                    }
                  >
                    <FaHome />
                  </NavLink>
                  {!loggedUser &&
                    navbarLinks.map(({ id, title, url }) => {
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
                  {loggedUser && (
                    <NavLink
                      to='/logout'
                      className='link'
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  )}
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
