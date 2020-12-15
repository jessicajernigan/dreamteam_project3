import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Auth from '../../utils/auth'
import { ADD_CREATOR } from '../../utils/mutations'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Signup.css'

const Signup = () => {
  // component level state to control form
	const [ formState, setFormState ] = useState({ username: '', email: '', password: '' })
	const [ addCreator, { error } ] = useMutation(ADD_CREATOR)

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		// handle signup auth
		try {
			const mutationResponse = await addCreator({
				variables : {
					username : formState.username,
					email    : formState.email,
					password : formState.password
				}
      })
      // get token and id from mutation response
			const token = mutationResponse.data.addCreator.token
      const creatorId = mutationResponse.data.addCreator.creator._id
      // pass token and id to login utility to add to LS and load dashboard
			Auth.login(creatorId, token)
		} catch (err) {
			console.log(err)
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormState({
			...formState,
			[name] : value
		})
	}

	return (
		<>
			<main className='Signup vh-100 d-flex flex-column align-items-center mt-5 pt-5'>
				<h3 className='mb-5'>Signup</h3>
				<Form className='signup-form d-flex flex-column' onSubmit={handleFormSubmit}>
					<Form.Group controlId='Signup-username-input'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							name='username'
							value={formState.username}
							required
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group controlId='Signup-email-input'>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type='email'
							name='email'
							value={formState.email}
							required
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group controlId='Signup-password-input'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							required
							value={formState.password}
							onChange={handleChange}
						/>
					</Form.Group>

					<Button
						className='bskr-btn-purple signup-btn align-self-center'
						variant='primary'
						type='submit'
					>
						Sign Up
					</Button>
				</Form>
				{error ? (
					<div>
						<p className='mt-2 text-danger'>
							Oops, try again...a user already exists with that email
						</p>
					</div>
				) : null}
			</main>
		</>
	)
}

export default Signup
