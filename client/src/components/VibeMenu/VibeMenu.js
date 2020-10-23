import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_VIBES } from '../../utils/queries';
import { hydrateVibes } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import VibeBtn from '../VibeBtn/VibeBtn'

const VibeMenu = () => {
  	// get data from DB with Apollo
	const { loading, data: vibeData } = useQuery(QUERY_VIBES);

  const { vibes } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(
		() => {
			// if vibeData exists or has changed from the response of useQuery, then run dispatch()
			if (vibeData) {
        console.log("vibeData.vibes: ", vibeData.vibes)
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
    <div className="VibeMenu">
      <h5>Vibes</h5>
      {/* refactor to not have to pass props since we're using redux */}
      {vibes.map((vibe, i) => (
        <VibeBtn key={i} vibe={vibe} />
      ))}
    </div>
  )
}

export default VibeMenu
