import React, { useState, useEffect } from 'react';
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

	const [ allVibes, setAllVibes ] = useState([]);
	// console.log('allVibes', allVibes.vibes?.map((vibe) => console.log(vibe)));

	// map an array of the ids of current vibes to set defaultChecked of checkboxes for matched ids
	const curVibesIds = curVibes?.map(vibe => vibe._id);

  // query to get all vibes
	const { loading, data } = useQuery(QUERY_VIBES);

  // initialize mutation function to update creator vibes
	const [ updateCreatorVibes ] = useMutation(UPDATE_CREATOR_VIBES);

  // update component state when data arrives from db query
	useEffect(
		() => {
			if (data) {
				setAllVibes(data);
			}
		},
		[ data, loading ]
	);

	// MODAL FUNCTIONALITY
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  // call mutation function with array of updated vibe id's
	const handleFormSubmit = async (e) => {
    e.preventDefault();
    // close modal
		handleClose();
		// array-like iterable (RadioNodeList) of all checkbox els
		const vibes = e.target.elements['updatedVibes'];
		// initialize array of updated vibes
		let updatedVibes = [];
		// iterate over RadioNodeList and push the value (vibe name) of each checked box into the array
		for (let i = 0; i < vibes.length; i++) {
			vibes[i].checked && updatedVibes.push(vibes[i].value);
		}

    // try/catch?
    try {
      const mutationResponse = await updateCreatorVibes({
        variables : {
          vibes : updatedVibes
        }
			});
			// console.log('mutationResponse', mutationResponse);
			// console.log('updated creatr: ', mutationResponse.data.updateCreatorBio);
      const updatedCreatr = mutationResponse.data.updateCreatorBio;
      console.log('mutationResponse', mutationResponse);

			window.location.reload()
			// dispatch(updateCreatorBioRedux(updatedCreatr));
		} catch (err) {
			console.error(err);
		}    

		// const mutationResponse = await updateCreatorVibes({
		// 	variables : {
		// 		vibes : updatedVibes
		// 	}
		// });

		// console.log('mutationResponse', mutationResponse);
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
                  {/* All is included until refactor of All filter on CreatrGrid */}
									{allVibes.vibes?.map((vibe) => (
									<div key={vibe._id} className="mb-3">
										<Form.Check
											// type="checkbox"
											name="updatedVibes"
											label={vibe.name}
											value={vibe._id}
											defaultChecked={curVibesIds?.includes(vibe._id)}
										/>
									</div>
									))}
								</Form.Group>
								<Button
									variant="primary btn-sm bskr-btn-purple"
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
