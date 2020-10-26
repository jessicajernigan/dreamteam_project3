import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { QUERY_CREATORS } from '../../utils/queries';
import { updateCreators } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import CreatrTile from '../CreatrTile/CreatrTile';

import Col from 'react-bootstrap/Col';

import './CreatrGrid.css';
import spinner from '../../assets/cool_spinner.gif';

const CreatrGrid = () => {
	// query db for creators
	const { loading, data } = useQuery(QUERY_CREATORS);
	// console.log('data from QUERY_CREATORS: ', data)

	const { creators, currentVibe } = useSelector((state) => state);
	// console.log('creators from CreatrGrid redux state: ', creators)
	const dispatch = useDispatch();

	useEffect(
		() => {
			// if there's data to be stored
			if (data) {

				// store it in the global state object
				dispatch(updateCreators(data.creators));

				// // also take each creator and save it to the IndexedDB using the helper function
				data.creators.forEach((creator) => {
					idbPromise('creators', 'put', creator);
				});
				// add else if to check if 'loading' is undefined in 'useQuery()' hook. ie no internet connection to server
			} else if (!loading) {
				// since we're offline, get all of the data from the 'creators' store
				idbPromise('creators', 'get').then((creators) => {
					// use retrieved data to set global state for offline browsing
					dispatch(updateCreators(creators));
				});
				console.log('you are offline');
			}
		},
		[ data, loading, dispatch ]
	);

	function filterCreators() {

		// filter out creators who have not posted a song.  **keep in place until we refactor User from Creator models
		const nonCreators = creators.filter((creator) => creator.songs.length > 0);

		// if (!currentVibe) {
      // 	return creators;
      // }
    // ** ditto
		if (!currentVibe) {
			return nonCreators;
		}

		// we have an array of creators.  each creator has an array of vibes.  we need to return a new array of creators, based on their array of vibes containing a certain value (currentVibe which is the vibe's _id)

		// return creators.filter((creator) =>
		// 	creator.vibes.some((vibe) => vibe._id === currentVibe)
    // );
    // ** ditto
		return nonCreators.filter((creator) =>
			creator.vibes.some((vibe) => vibe._id === currentVibe)
		);
	}

	return (
		<Col lg={12} className="CreatrGrid">
			<div className="CreatrGrid-tiles-container d-flex justify-content-center flex-wrap mx-auto">
				{creators.length ? (
					filterCreators().map((creator) => (
						<CreatrTile {...creator} key={creator._id} />
					))
				) : (
					<h3>No Creators yet...</h3>
				)}
			</div>
			{loading ? <img src={spinner} alt="loading" /> : null}
		</Col>
	);
};

export default CreatrGrid;

/* {[ ...Array(24) ].map((_, i) => (
  <CreatrTile key={i} />
))} */
