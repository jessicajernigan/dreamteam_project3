import React from 'react'

import Col from 'react-bootstrap/Col';
import Player from '../../components/Player/Player'

import './SidebarMobile.css'

const SidebarMobile = () => {
  const vibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];
  return (
    <React.Fragment>
      <Col lg={12} className="sidebar-mobile">
					<input
						id="artist-search-mobile"
						className="form-control"
						type="text"
						placeholder="Search for an artist"
						aria-label="Search"
					/>
					<div id="browse-mobile">
						{vibes.map((vibe) => (
							<a className="nav-link" href="#" key={vibe}>
								{vibe}
							</a>
						))}
					</div>
				</Col>

        {/* is there a way to refactor this so it's not repeating what's in the Sidebar? -- DRY */}
				<div id="now-playing-mobile">
					<div id="now-playing-text">
						<p id="artist-playing">Red Hot Chili Peppers</p>
						<p id="song-playing">Californication</p>
					</div>
					<div id="audio-controller" className="mt-2">
            <Player  />
						{/* <audio controls>
							<source src="horse.ogg" type="audio/ogg" />
							<source src="horse.mp3" type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio> */}
					</div>
				</div>
    </React.Fragment>
  )
}

export default SidebarMobile
