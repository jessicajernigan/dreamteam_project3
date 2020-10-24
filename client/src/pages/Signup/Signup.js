import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Signup.css';

const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login auth
    window.location.assign('/creator');
  }

	return (
		<React.Fragment>
			<main className="Signup vh-100 d-flex flex-column align-items-center mt-5 pt-5">
				<h3 className="mb-5">Buskr Signup</h3>
				<Form className="Signup-Form w-25 d-flex flex-column" onSubmit={handleSubmit}>
					<Form.Group controlId="Signup-email-input">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="" />
					</Form.Group>

					<Form.Group controlId="Signup-username-input">
						<Form.Label>Username</Form.Label>
						<Form.Control placeholder="" />
					</Form.Group>

					<Form.Group controlId="Signup-password-input">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="" />
					</Form.Group>

					<Button className="Signup-Btn w-25 align-self-center" variant="primary" type="submit">
						Sign Up
					</Button>
				</Form>
			</main>
		</React.Fragment>
	);
};

export default Signup;
