import React from 'react'

import Col from 'react-bootstrap/Col';


import VibeMenu from '../VibeMenu/VibeMenu'

import './Sidebar.css'

const Sidebar = () => {

  return (
    <Col lg={12} className="Sidebar w-100 d-flex justify-content-center text-center">
    <VibeMenu />
  </Col>
  )
}

export default Sidebar
