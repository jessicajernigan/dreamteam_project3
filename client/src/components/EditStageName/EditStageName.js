import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_CREATOR_BIO } from '../../utils/mutations';
// import { QUERY_CREATORS } from '../../utils/queries';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditStageName.css';

const EditStageName = ({ curBio }) => {
	// MODAL FLAG
	const [ show, setShow ] = useState(false);

	const [ formState, setFormState ] = useState(curBio);
	// const { refetch } = useQuery(QUERY_CREATORS)
	// MUTATION ON FORM SUBMIT
	const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO);
	// const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO, {
	//   update(cache, { data: { updateCreatorBio } }) {
	//     const { creators } = cache.readQuery({ query: QUERY_CREATORS })
	//     cache.writeQuery({
	//       query: QUERY_CREATORS,
	//       data: { creators: [ ...creators, updateCreatorBio ]}
	//     })
	//   },
	//   refetchQueries: [{query: QUERY_CREATORS }],

	// });

	// const [ saveBook ] = useMutation(SAVE_BOOK, {
	//   update(cache, { data: { saveBook } }) {
	//     const { me } = cache.readQuery({ query: GET_ME });
	//     cache.writeQuery({
	//       query: GET_ME,
	//       data: { me: { ...me, savedBooks: [...me.savedBooks, saveBook]}}
	//     })
	//   }
	// });

	// initialize form state from props
	useEffect(
		() => {
			setFormState(curBio);
		},
		[ curBio ]
	);

	const handleChange = (e) => {
		setFormState(e.target.value);
	};

	// currently this is successfully mutating the data in db but not causing re-render in parent CreatrDash component to reflect the update.  new dispatch?
	const handleFormSubmit = async (e) => {
		// close modal
		handleClose();
		e.preventDefault();
		// console.log('bio form submitted');

		// try/catch?
		const mutationResponse = await updateCreatorBio({
			variables : {
				bio : formState
			}
			// refetchQueries: [ { query: QUERY_CREATORS } ]
		});
		// refetch()
		console.log('mutationResponse', mutationResponse);
		// EditBio modal is child component of CreatrDash.  when the db is mutated by the editBio modal child, the parent needs to rerender so updated value is shown

		//   try {
		//     await saveBook({
		//       variables: {book: bookToSave}
		//     })

		//     // if book successfully saves to user's account, save book id to state
		//     setSavedBookIds([...savedBookIds, bookToSave.bookId]);
		//   } catch (err) {
		//     console.error(err);
		//   }
		// };
	};

	// MODAL DISPLAY
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<React.Fragment>
			<Button
				className="EditStageName-Btn p-2 w-50 btn-sm bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit stage name
			</Button>

			<Modal
				className="EditStageName "
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>edit your stage name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleFormSubmit}>
						<FormControl
							name="loc"
							aria-label="With input"
							onChange={handleChange}
							value={formState}
							placeholder={formState}
						/>
						<Button
							className="mt-3"
							type="submit"
							variant="primary btn-sm bskr-btn-purple"
							// onClick={handleClose}
						>
							save
						</Button>
					</Form>
				</Modal.Body>
				{/* <Modal.Footer>
          </Modal.Footer> */}
			</Modal>
		</React.Fragment>
	);
};

export default EditStageName;
