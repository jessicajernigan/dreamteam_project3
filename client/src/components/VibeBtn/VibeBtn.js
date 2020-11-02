import React from 'react';
import { useDispatch } from 'react-redux';

import { updateCurrentVibe } from '../../utils/actions';

import './VibeBtn.css';

const VibeBtn = ({ vibe }) => {
	const dispatch = useDispatch();

	const handleClick = (id) => {
		dispatch(updateCurrentVibe(id));
	};

	return (
		<button
			className="bskr-vibe-btn text-white py-2 rounded m-2"
			onClick={() => handleClick(vibe._id)}
		>
			{vibe.name}
		</button>
	);
};

export default VibeBtn;
