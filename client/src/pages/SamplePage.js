import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeOneAction, typeTwoAction } from '../utils/actions';
import './Sample.css';

const SamplePage = () => {
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
					handleClick(_id);
				}}
			>
				Dispatch Action
			</h2>
		</div>
	);
};

export default SamplePage;
