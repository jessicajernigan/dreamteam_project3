import React from 'react'
import { useDispatch } from 'react-redux'

import { updateCurrentVibe } from '../../utils/actions';

const VibeBtn = ({vibe}) => {

  const dispatch = useDispatch()

  const handleClick = (id) => {
    // console.log('vibe _id: ', id)
		dispatch(updateCurrentVibe(id));
	};

  return (
    <button onClick={() => handleClick(vibe._id)}>
    {vibe.name}
  </button>
  )
}

export default VibeBtn
