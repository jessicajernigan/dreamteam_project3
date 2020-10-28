import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { QUERY_VIBES } from '../../utils/queries';
import { UPDATE_CREATOR_VIBES } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditVibes.css';
import spinner from '../../assets/cool_spinner.gif';

// destructure vibe objects of current creator from props
const EditVibes = ({ curVibes }) => {
	// const [ allVibesIds, setAllVibesIds ] = useState([]);
	// console.log("allVibesIds", allVibesIds)
	const [ allVibes, setAllVibes ] = useState([]);
	const [ allVibesIds, setAllVibesIds ] = useState([]);
	const [ allVibesNames, setAllVibesNames ] = useState([]);
	console.log('allVibes', allVibes.vibes?.map((vibe) => console.log(vibe)));

	// map an array of the names of current vibes
	const curVibesNames = curVibes?.map(vibe => vibe.name);
	const curVibesIds = curVibes?.map(vibe => vibe._id);

  const { loading, data } = useQuery(QUERY_VIBES);
  
  const [ updateCreatorVibes] = useMutation(UPDATE_CREATOR_VIBES);

	useEffect(
		() => {
			if (data) {
				setAllVibesIds(data.vibes.map((vibe) => vibe._id));
				setAllVibesNames(data.vibes.map((vibe) => vibe.name));
				setAllVibes(data);
			}
		},
		[ data, loading ]
	);

	// MODAL FUNCTIONALITY
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const allVibesHardCoded = [
		'Rock',
		'Hip Hop',
		'Reggae',
		'Jazz',
		'Country',
		'Disco',
		'Blues'
	];

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		handleClose();
		// array-like iterable (RadioNodeList) of all checkbox els
		const vibes = e.target.elements['updatedVibes'];
		// initialize array of updated vibes
		let updatedVibes = [];
		// iterate over RadioNodeList and push the value (vibe name) of each checked box into the array
		for (let i = 0; i < vibes.length; i++) {
			vibes[i].checked && updatedVibes.push(vibes[i].value);
		}
		// need to map array of updated names to ids
    // console.log('all names: ', allVibes.vibes.map(vibe => vibe.name))
    // allVibes && updatedVibes.unshift(allVibes[0]?._id)
    console.log('updated vibes: ', updatedVibes);
    
    const mutationResponse = await updateCreatorVibes({
			variables : {
			  vibes : updatedVibes
      }
    });
    
    console.log('mutationResponse', mutationResponse);
	};

	return (
		<React.Fragment>
			{allVibes ? (
				<React.Fragment>
					<Button
						className="w-50 btn-sm bskr-btn-purple"
						variant="primary"
						onClick={handleShow}
					>
						edit your vibes
					</Button>

					<Modal
						className="EditTunesModal"
						centered
						show={show}
						onHide={handleClose}
						animation={false}
					>
						<Modal.Header closeButton>
							<Modal.Title>edit your vibes</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form onSubmit={handleFormSubmit}>
								<Form.Group>
									{/* { allVibesHardCoded.map((vibe) => (
								<div key={vibe} className="mb-3">
									<Form.Check
                    // type="checkbox"
                    name="updatedVibes"
                    label={vibe}
                    value={vibe}
										defaultChecked={curVibesNames?.includes(vibe)}
									/>
								</div>
							))} */}
									{/* can't get this to work so using hardcoded vibes.  keep getting error allVibes.map is not a function (since allVibes is undefined when rendered) */}
									{
										allVibes.vibes?.map((vibe) => (
											<div key={vibe._id} className="mb-3">
												<Form.Check
													// type="checkbox"
													name="updatedVibes"
													label={vibe.name}
													value={vibe._id}
													defaultChecked={curVibesIds?.includes(vibe._id)}
												/>
											</div>
										))
									}
								</Form.Group>
								<Button
									variant="primary btn-sm bskr-btn-purple"
									// onClick={handleClose}
									type="submit"
								>
									save
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
				</React.Fragment>
			) : null}
			{loading ? <img src={spinner} alt="loading" /> : null}
		</React.Fragment>
	);
};

export default EditVibes;
