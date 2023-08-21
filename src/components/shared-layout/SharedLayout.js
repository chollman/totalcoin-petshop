import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarTop } from '../../components'

const SharedLayout = (props) => {
  return (
    <div>
      <NavbarTop />
      <Outlet />
    </div>
  )
}

export default SharedLayout
