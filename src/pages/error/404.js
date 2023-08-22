import React from 'react'
import { Link } from 'react-router-dom'
import './404.scss'

const Error404 = () => {
  return (
    <div className='error-404'>
      <h1>404</h1>
      <h2>No encontramos la página</h2>
      <Link to='/'>Volver</Link>
    </div>
  )
}

export default Error404
