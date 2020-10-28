import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { QUERY_VIBES } from '../../utils/queries';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditVibes.css';

// destructure vibe objects of current creator from props
const EditVibes = ({ curVibes }) => {

  // const [ allVibesIds, setAllVibesIds ] = useState([]);
  // console.log("allVibesIds", allVibesIds)
  const [ allVibes, setAllVibes ] = useState([]);
  console.log("allVibes", allVibes)
 

  // map an array of the names of current vibes 
  const curVibesNames = curVibes?.map(vibe => vibe.name);
  
  const { loading, data } = useQuery(QUERY_VIBES);

  useEffect(() => {
    if (data) {
      // data.vibes.map(vibe => vibe._id)
      // setAllVibesIds(data.vibes.map(vibe => vibe._id))
      setAllVibes(data)
    }
  }, [ data ]
  )


  // MODAL FUNCTIONALITY
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  // can i get this from global state or is it worth it for a db query?
  const alllllllVibes = [ 'Rock', 'Hip Hop', 'Reggae', 'Jazz', 'Country', 'Disco', 'Blues' ];
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handleClose();
    // array-like iterable (RadioNodeList) of all checkbox els
    const vibes = e.target.elements['updatedVibes'];
    // initialize array of updated vibes
    let updatedVibes = [];
    // iterate over RadioNodeList and push the value (vibe name) of each checked box into the array
    for ( let i = 0; i < vibes.length; i++) {
      vibes[i].checked && updatedVibes.push(vibes[i].value)
    }
    console.log('updated vibes: ', updatedVibes)
  }

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
							{allVibes.map((vibe) => (
								<div key={vibe} className="mb-3">
									<Form.Check
                    // type="checkbox"
                    name="updatedVibes"
                    label={vibe}
                    value={vibe}
										defaultChecked={curVibesNames?.includes(vibe)}
									/>
								</div>
							))}
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


			
		</React.Fragment>
	);
};

export default EditVibes;
