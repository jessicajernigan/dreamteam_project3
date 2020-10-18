import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeOneAction, typeTwoAction } from '../../utils/actions';
import './Sample.css';

const Sample = () => {
	// get Global state from Redux
	const state = useSelector((state) => state);
	console.log(state);

	const dispatch = useDispatch();

	const handleClick = (id) => {
		dispatch(typeOneAction(id));
	};

	return (
		<div>
			<h2
				onClick={() => {
					handleClick();
				}}
			>
				Sample Component
			</h2>
		</div>
	);
};

export default Sample;
