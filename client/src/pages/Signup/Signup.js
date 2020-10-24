import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'

import Auth from '../../utils/auth'
import { ADD_USER } from '../../utils/mutations'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = () => {
  const [ formState, setFormState ] = useState({ email: '', password: '' });
  const [ addUser ] = useMutation(ADD_USER)


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // handle signup auth
    const mutationResponse = await addUser({
			variables : {
				username : formState.username,
				email     : formState.email,
				password  : formState.password
			}
		});
		const token = mutationResponse.data.addUser.token;
		Auth.login(token);
  }

  const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name] : value
		});
	};

	return (
		<React.Fragment>
			<main className="Signup vh-100 d-flex flex-column align-items-center mt-5 pt-5">
				<h3 className="mb-5">Signup</h3>
				<Form className="w-25 d-flex flex-column" onSubmit={handleFormSubmit}>
          
					<Form.Group controlId="Signup-username-input">
						<Form.Label>Username</Form.Label>
						<Form.Control name="username" placeholder="" onChange={handleChange}/>
					</Form.Group>

					<Form.Group controlId="Signup-email-input">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" name="email" placeholder="" onChange={handleChange}/>
					</Form.Group>


					<Form.Group controlId="Signup-password-input">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="" onChange={handleChange}/>
					</Form.Group>

					<Button className="w-25 align-self-center" variant="primary" type="submit">
						Sign Up
					</Button>
				</Form>
			</main>
		</React.Fragment>
	);
};

export default Signup;
