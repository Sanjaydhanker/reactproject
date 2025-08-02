import React from 'react'
import Navbar from './Notlogin/Navbar'
import { Outlet } from 'react-router'

function Welcomepage() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Welcomepage