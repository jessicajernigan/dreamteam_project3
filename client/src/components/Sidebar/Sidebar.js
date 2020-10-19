import React from 'react'

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Player from '../../components/Player/Player'

import './Sidebar.css'

const Sidebar = () => {
  const vibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];
  return (
    <Col lg={2} className="sidebar sticky-top">
    <InputGroup className="mb-3">
      <FormControl
        id="artist-search"
        placeholder="Search for an artist"
        aria-label="Artist search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <div id="browse">
      <h5>Browse</h5>
      {vibes.map((vibe, i) => (
        <a className="nav-link" href="#" key={i}>
          {vibe}
        </a>
      ))}
    </div>
    <div id="now-playing">
      <div id="now-playing-text">
        <p id="artist-playing">Red Hot Chili Peppers</p>
        <p id="song-playing">Californication</p>
      </div>
      <div id="audio-controller">
        <Player />
        {/* <audio controls>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
      </div>
    </div>
  </Col>
  )
}

export default Sidebar
