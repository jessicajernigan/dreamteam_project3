import React from 'react';

import ArtistTile from '../ArtistTile/ArtistTile'


import Col from 'react-bootstrap/Col';

import './ArtistGrid.css'

const ArtistGrid = () => {
	return (
		<Col lg={10} className="ArtistGrid">
			<div className="ArtistGrid-tiles-container">
				{[ ...Array(24) ].map((_, i) => (
          <ArtistTile key={i} />
				))}
			</div>
		</Col>
	);
};

export default ArtistGrid;
