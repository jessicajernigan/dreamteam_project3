import React from 'react';
import { Link } from 'react-router-dom';

import './CreatrTile.css';

const CreatrTile = ({ _id, stageName, imgUrl }) => {
	return (
		<Link to={`/profile/${_id}`} className="CreatrTile">
			<div className="CreatrTile-tile">
				{/* <img src="https://via.placeholder.com/300" alt="" /> */}
				<img src={imgUrl} alt="" />
        <h3>{stageName}</h3>
			</div>
		</Link>
	);
};

export default CreatrTile;
