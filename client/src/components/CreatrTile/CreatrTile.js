import React from 'react';
import { Link } from 'react-router-dom';

import './CreatrTile.css';

const CreatrTile = ({ bandName, imgUrl }) => {
	return (
		<Link to="/profile" className="CreatrTile">
			<div className="CreatrTile-tile">
				{/* <img src="https://via.placeholder.com/300" alt="" /> */}
				<img src={imgUrl} alt="" />
        <h3>{bandName}</h3>
			</div>
		</Link>
	);
};

export default CreatrTile;
