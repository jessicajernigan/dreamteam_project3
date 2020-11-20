import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'

import { LOGIN } from '../../utils/mutations'
import Auth from '../../utils/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Login.css'

const Login = () => {
	const [ formState, setFormState ] = useState({ email: '', password: '' })
	const [ showErrMsg, setShowErrMsg ] = useState(false)
	const [ login, { error } ] = useMutation(LOGIN)

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const { email, password } = formState

		if (email !== '' && password !== '') {
			// handle login auth
			try {
				const mutationResponse = await login({
					variables : { email, password }
				})
				const token = mutationResponse.data.login.token
				const creatorId = mutationResponse.data.login.creator._id
				// store creator id in LS also so we have it available as param and filter for dashboard
				Auth.login(creatorId, token)
			} catch (e) {
				console.log(e)
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
			<main className='Login vh-100 d-flex flex-column align-items-center mt-5 pt-5'>
				<h3 className='mb-5'>Login</h3>
				<Form className='Login-form' onSubmit={handleFormSubmit}>
					<Form.Group controlId='Login-email-input'>
						<Form.Label>Email</Form.Label>
						<Form.Control name='email' placeholder='' onChange={handleChange} />
					</Form.Group>

					<Form.Group controlId='Login-password-input'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							name='password'
							type='password'
							placeholder=''
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group controlId='Login-submit'>
						<Button className='bskr-btn-purple mr-3 mb-3' type='submit'>
							Log In
						</Button>
						<p className=''>
							Don't have an account?{' '}
							<Link to='/signup'>
								{' '}
								<span className='signup-link-text'>Sign Up</span>
							</Link>
						</p>
					</Form.Group>
					{error ? (
						<div>
							<p className='text-danger'>Sorry, incorrect credentials</p>
						</div>
					) : null}
					{showErrMsg && !error ? (
						<div>
							<p className='mt-2 text-danger'>Please fill out all fields</p>
						</div>
					) : null}
				</Form>
			</main>
		</>
	)
}

export default Login
