import React from 'react';

import Col from 'react-bootstrap/Col';

import VibeBtn from '../VibeBtn/VibeBtn';
import Player from '../Player/Player';

import './SidebarMob.css';

const SidebarMob = () => {
	const vibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];
	return (
		<React.Fragment>
			<Col lg={12} className="SidebarMob">
				<input
					className="SidebarMob-artist-search-mobile form-control"
					type="text"
					placeholder="Search for an artist"
					aria-label="Search"
				/>
				<div className="SidebarMob-browse-mobile">
					{vibes.map((vibe, i) => <VibeBtn key={i} vibe={vibe} />)}
				</div>
			</Col>

			{/* is there a way to refactor this so it's not repeating what's in the Sidebar? -- DRY */}
			<div className="SidebarMob-now-playing-mobile">
				<div>
					<p>Red Hot Chili Peppers</p>
					<p>Californication</p>
				</div>
				<div className="mt-2">
					<Player />
				</div>
			</div>
		</React.Fragment>
	);
};

export default SidebarMob;
