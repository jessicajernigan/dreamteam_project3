import React from 'react';
import { Link } from 'react-router-dom';

import './ArtistTile.css'

const ArtistTile = () => {
	return (
		<Link to="/profile" className="ArtistTile">
			<div className="ArtistTile-tile">
				<img src="https://via.placeholder.com/300" alt=""/>
			</div>
		</Link>
	);
};

export default ArtistTile;
