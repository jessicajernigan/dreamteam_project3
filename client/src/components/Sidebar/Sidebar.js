import React from 'react'

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Player from '../../components/Player/Player'
import VibeMenu from '../VibeMenu/VibeMenu'
import VibeBtn from '../VibeBtn/VibeBtn';

import './Sidebar.css'

const Sidebar = () => {
  const vibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];
  return (
    <Col lg={12} className="Sidebar-Top">
        <VibeMenu />
				{/* <div className="SidebarMob-browse-mobile">
					{vibes.map((vibe, i) => <VibeBtn key={i} vibe={vibe} />)}
				</div> */}
    </Col>
  )
}

export default Sidebar
