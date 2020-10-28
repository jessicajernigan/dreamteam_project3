import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_VIBES } from '../../utils/queries';
import { hydrateVibes } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import VibeBtn from '../VibeBtn/VibeBtn'

import './VibeMenu.css';

const VibeMenu = () => {
  	// get data from DB with Apollo
	const { loading, data: vibeData } = useQuery(QUERY_VIBES);

  const { vibes } = useSelector(state => state)
  const dispatch = useDispatch();

  // console.log('vibes: ', vibes)

  useEffect(
		() => {
			// if vibeData exists or has changed from the response of useQuery, then run dispatch()
			if (vibeData) {
        // console.log("vibeData.vibes: ", vibeData.vibes)
				// execute our dispatch function with our action object indicating the type of action and the data to set our state for vibes to
				dispatch(hydrateVibes(vibeData.vibes));
				// also write to IndexedDB
				vibeData.vibes.forEach((vibe) => {
					idbPromise('vibes', 'put', vibe);
        });
        // if app can't communicate with server, get vibes from indexedDB
			} else if (!loading) {
				idbPromise('vibes', 'get').then((vibes) => {
					dispatch(hydrateVibes(vibes));
				});
			}
		},
		[ vibeData, loading, dispatch ]
  );
  
  return (
    <div className="VibeMenu m-2">
      <h5 className="text-center">Choose your vibe</h5>
      {vibes.map((vibe) => (
        <VibeBtn key={vibe._id} vibe={vibe}  />
      ))}
    </div>
  )
}

export default VibeMenu
