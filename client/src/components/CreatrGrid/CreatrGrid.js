import React from 'react';
import { useSelector } from 'react-redux';

import CreatrTile from '../CreatrTile/CreatrTile';

import Col from 'react-bootstrap/Col';

import './CreatrGrid.css';

const CreatrGrid = () => {

  

  const { creators } = useSelector(state => state);

	return (
		<Col lg={12} className="CreatrGrid">
			<div className="CreatrGrid-tiles-container">
				{creators.map((creator) => <CreatrTile {...creator} key={creator._id} />)}
				{/* {[ ...Array(24) ].map((_, i) => (
          <CreatrTile key={i} />
				))} */}
			</div>
		</Col>
	);
};

export default CreatrGrid;
