import React from 'react';

import Col from 'react-bootstrap/Col';

import VibeBtn from '../VibeBtn/VibeBtn';
import Player from '../../components/Player/Player';

import './SidebarMobile.css';

const SidebarMobile = () => {
	const vibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];
	return (
		<React.Fragment>
			<Col lg={12} className="SidebarMobile">
				<input
					className="SidebarMobile-artist-search-mobile form-control"
					type="text"
					placeholder="Search for an artist"
					aria-label="Search"
				/>
				<div className="SidebarMobile-browse-mobile">
					{vibes.map((vibe, i) => <VibeBtn key={i} vibe={vibe} />)}
				</div>
			</Col>

			{/* is there a way to refactor this so it's not repeating what's in the Sidebar? -- DRY */}
			<div className="SidebarMobile-now-playing-mobile">
				<div>
					<p>Red Hot Chili Peppers</p>
					<p>Californication</p>
				</div>
				<div className="mt-2">
					<Player />
					{/* <audio controls>
							<source src="horse.ogg" type="audio/ogg" />
							<source src="horse.mp3" type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default SidebarMobile;
