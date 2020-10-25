import React from 'react'
import { useDispatch } from 'react-redux'

import { updateCurrentVibe } from '../../utils/actions';

import './VibeBtn.css'

const VibeBtn = ({vibe}) => {

  const dispatch = useDispatch()

  const handleClick = (id) => {
    // console.log('vibe _id: ', id)
		dispatch(updateCurrentVibe(id));
	};

  return (
    <button className="btn text-white p-2 m-2"onClick={() => handleClick(vibe._id)}>
    {vibe.name}
  </button>
  )
}

export default VibeBtn
