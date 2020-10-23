import React from 'react';
import { useSelector } from 'react-redux';

import CreatrTile from '../CreatrTile/CreatrTile';

import Col from 'react-bootstrap/Col';

import './CreatrGrid.css';

const CreatrGrid = () => {

  const { creators, currentVibe } = useSelector(state => state);

    
	function filterCreators() {
    console.log('current vibe: ', currentVibe)

		if (!currentVibe) {
			return creators;
		}

    // we have an array of creators.  each creator has an array of vibes.  we need to return a new array of creators, based on their array of vibes containing a certain value (currentVibe which is the vibe's _id)
    
		// return creators.filter((creator) => creator.vibes.some(vibe => vibe === 'Reggae'))
		return creators.filter((creator) => creator.vibes.some(vibe => vibe === currentVibe))
	}

	return (
		<Col lg={10} className="CreatrGrid">
			<div className="CreatrGrid-tiles-container">
				{filterCreators().map((creator) => <CreatrTile {...creator} key={creator._id} />)}
				{/* {[ ...Array(24) ].map((_, i) => (
          <CreatrTile key={i} />
				))} */}
			</div>
		</Col>
	);
};

export default CreatrGrid;
