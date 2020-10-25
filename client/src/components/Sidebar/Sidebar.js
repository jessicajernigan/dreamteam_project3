import React from 'react'

import Col from 'react-bootstrap/Col';


import VibeMenu from '../VibeMenu/VibeMenu'

import './Sidebar.css'

const Sidebar = () => {

  return (
    <Col lg={2} className="Sidebar">
    <VibeMenu />
  </Col>
  )
}

export default Sidebar
