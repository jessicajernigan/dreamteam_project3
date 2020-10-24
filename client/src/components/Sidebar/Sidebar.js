import React from 'react'

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Player from '../../components/Player/Player'
import VibeMenu from '../VibeMenu/VibeMenu'

import './Sidebar.css'

const Sidebar = () => {

  return (
    <Col lg={2} className="Sidebar sticky-top">
    {/* <InputGroup className="mb-3">
      <FormControl
        className="Sidebar-artist-search"
        placeholder="Search for an artist"
        aria-label="Artist search"
        aria-describedby="basic-addon1"
      />
    </InputGroup> */}
    <VibeMenu />
    {/* <div className="Sidebar-now-playing">
      <div className="Sidebar-now-playing-text">
        <p>Red Hot Chili Peppers</p>
        <p>Californication</p>
      </div>
      <div className="Sidebar-audio-controller">
        <Player />
      </div>
    </div> */}
  </Col>
  )
}

export default Sidebar
