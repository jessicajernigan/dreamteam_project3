import React from 'react'
import { useSelector } from 'react-redux'

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Player from '../../components/Player/Player'

import VibeBtn from '../VibeBtn/VibeBtn'

import './Sidebar.css'

const Sidebar = () => {
  // const vibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];

  const { vibes } = useSelector(state => state)

  return (
    <Col lg={2} className="Sidebar sticky-top">
    <InputGroup className="mb-3">
      <FormControl
        className="Sidebar-artist-search"
        placeholder="Search for an artist"
        aria-label="Artist search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <div className="Sidebar-browse">
      <h5>Browse</h5>
      {/* refactor to not have to pass props since we're using redux */}
      {vibes.map((vibe, i) => (
        <VibeBtn key={i} vibe={vibe} />
      ))}
    </div>
    <div className="Sidebar-now-playing">
      <div className="Sidebar-now-playing-text">
        <p>Red Hot Chili Peppers</p>
        <p>Californication</p>
      </div>
      <div className="Sidebar-audio-controller">
        <Player />
      </div>
    </div>
  </Col>
  )
}

export default Sidebar
