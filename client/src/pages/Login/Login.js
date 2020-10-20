import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import './Login.css';/

const Login = () => {
	return (
		<React.Fragment>
			<main className="Login vh-100 d-flex flex-column align-items-center mt-5 pt-5">
				<h3 className="mb-5">Buskr Login</h3>
				<Form className="w-25">
					<Form.Group controlId="Login-username-input">
						<Form.Label>Username</Form.Label>
						<Form.Control placeholder="" />
					</Form.Group>

					<Form.Group controlId="Login-password-input">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="" />
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
				</Form>
			</main>
		</React.Fragment>
	);
};

export default Login;
