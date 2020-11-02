import React from 'react';
import { Link } from 'react-router-dom';

import './CreatrTile.css';

const CreatrTile = ({ _id, stageName, imgUrl }) => {
	let tileStyle = {
		backgroundImage    : 'url(' + imgUrl + ')',
		position           : 'relative',
		backgroundRepeat   : 'no-repeat',
		backgroundSize     : 'cover',
		backgroundPosition : 'center'
	};
	return (
		<Link to={`/profile/${_id}`} className="CreatrTile">
			<div className="CreatrTile-tile m-2" style={tileStyle}>
				<h3>{stageName}</h3>
			</div>
		</Link>
	);
};

export default CreatrTile;
