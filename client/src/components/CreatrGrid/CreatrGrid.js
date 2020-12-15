import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'

import { QUERY_CREATORS } from '../../utils/queries'
import { updateCreators } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers'

import CreatrTile from '../CreatrTile/CreatrTile'

import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

import './CreatrGrid.css'

const CreatrGrid = () => {
	// query db for creators
	const { loading, data } = useQuery(QUERY_CREATORS)

	const { creators, currentVibe } = useSelector((state) => state)

	const dispatch = useDispatch()

	useEffect(
		() => {
			// if there's data to be stored
			if (data) {
				// store it in the global state object
				dispatch(updateCreators(data.creators))

				// // also take each creator and save it to the IndexedDB using the helper function
				data.creators.forEach((creator) => {
					idbPromise('creators', 'put', creator)
				})
				// add else if to check if 'loading' is undefined in 'useQuery()' hook. ie no internet connection to server
			} else if (!loading) {
				// since we're offline, get all of the data from the 'creators' store
				idbPromise('creators', 'get').then((creators) => {
					// use retrieved data to set global state for offline browsing
					dispatch(updateCreators(creators))
				})
				console.log('you are offline')
			}
		},
		[ data, loading, dispatch ]
	)

  // filter creators by vibe
	function filterCreators() {
		// filter out creators who have not posted a song yet, so they will not display on grid.  **keep in place until we refactor User from Creator models
		const actualCreators = creators.filter((creator) => creator.songs.length > 0)

		// if (!currentVibe) {
		// 	return creators;
		// }
		// ** ditto
		if (!currentVibe) {
			return actualCreators
		}

		// we have an array of creators.  each creator has an array of vibes.  we need to return a new array of creators, based on their array of vibes containing a certain value (currentVibe which is the vibe's _id)

		// return creators.filter((creator) =>
		// 	creator.vibes.some((vibe) => vibe._id === currentVibe)
		// );
		// ** ditto
		return actualCreators.filter((creator) =>
			creator.vibes.some((vibe) => vibe._id === currentVibe)
		)
	}

	return (
		<Col lg={12} className='CreatrGrid'>
			{loading ? (
				<Spinner
					animation='border'
					role='status'
					style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }}
				>
					<span className='sr-only'>Loading...</span>
				</Spinner>
			) : (
				<div className='CreatrGrid-tiles-container d-flex justify-content-center flex-wrap mx-auto'>
					{creators.length ? (
						filterCreators().map((creator) => (
							<CreatrTile {...creator} key={creator._id} />
						))
					) : (
						<h3>No Creators yet...</h3>
					)}
				</div>
			)}
		</Col>
	)
}

export default CreatrGrid
