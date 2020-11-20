import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Auth from '../../utils/auth'
import { ADD_CREATOR } from '../../utils/mutations'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Signup.css'

const Signup = () => {
	const [ formState, setFormState ] = useState({ username: '', email: '', password: '' })
	const [ showErrMsg, setShowErrMsg ] = useState(false)
	const [ addCreator, { error } ] = useMutation(ADD_CREATOR)

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const { username, email, password } = formState
		// handle signup auth
		if (username !== '' && email !== '' && password !== '') {
			try {
				const mutationResponse = await addCreator({
					variables : {
						username,
						email,
						password
					}
				})
				const token = mutationResponse.data.addCreator.token
				const creatorId = mutationResponse.data.addCreator.creator._id
				Auth.login(creatorId, token)
			} catch (err) {
				console.log(err)
			}
		} else {
			setShowErrMsg(true)
		}
	}

	const handleChange = (event) => {
    setShowErrMsg(false)
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
						<Form.Control name='username' placeholder='' onChange={handleChange} />
					</Form.Group>

					<Form.Group controlId='Signup-email-input'>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type='email'
							name='email'
							placeholder=''
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group controlId='Signup-password-input'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							placeholder=''
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
				{showErrMsg ? (
					<div>
						<p className='mt-2 text-danger'>Please fill out all fields</p>
					</div>
				) : null}
			</main>
		</>
	)
}

export default Signup
