import React from 'react';
import { Link } from 'react-router-dom';

import './CreatrTile.css';

const CreatrTile = ({ _id, name, imgUrl }) => {
	return (
		<Link to={`/profile/${_id}`} className="CreatrTile">
			<div className="CreatrTile-tile">
				{/* <img src="https://via.placeholder.com/300" alt="" /> */}
				<img src={imgUrl} alt="" />
        <h3>{name}</h3>
			</div>
		</Link>
	);
};

export default CreatrTile;
