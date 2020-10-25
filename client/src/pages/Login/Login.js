import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks'

import { LOGIN } from '../../utils/mutations'
import Auth from '../../utils/auth'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import './Login.css';/

const Login = () => {
  const [ formState, setFormState ] = useState({ email: '', password: '' });
	const [ login, { error } ] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // handle login auth
    try {
			const mutationResponse = await login({
				variables: { email: formState.email, password: formState.password }
      });
      // console.log('mutationResponse', mutationResponse)
      const token = mutationResponse.data.login.token;
      const creatorId = mutationResponse.data.login.creator._id
      // console.log(token, creatorId)
      // store creator id in LS also so we have it available as param and filter for dashboard
			Auth.login(creatorId, token);
		} catch (e) {
			console.log(e);
		}
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
			<main className="Login vh-100 d-flex flex-column align-items-center mt-5 pt-5">
				<h3 className="mb-5">Login</h3>
				<Form className="w-25" onSubmit={handleFormSubmit}>
					<Form.Group controlId="Login-email-input">
						<Form.Label>Email</Form.Label>
						<Form.Control name="email" placeholder="" onChange={handleChange} />
					</Form.Group>

					<Form.Group controlId="Login-password-input">
						<Form.Label>Password</Form.Label>
						<Form.Control name="password" type="password" placeholder="" onChange={handleChange}/>
					</Form.Group>

					<Form.Group controlId="Login-submit">
						<Button className="mr-3" variant="primary" type="submit">
							Log In
						</Button>
						<p className="d-inline ">
							Don't have an account?{' '}
							<Link to="/signup" >
								{' '}
								Sign Up
							</Link>
						</p>
					</Form.Group>
          {error ? (
					<div>
						<p className="text-danger">
							The provided credentials are incorrect
						</p>
					</div>
				) : null}
				</Form>
			</main>
		</React.Fragment>
	);
};

export default Login;
