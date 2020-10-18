import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Signup from '../../pages/Signup'
import Login from '../../pages/Login'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// const Home = () => <span>Home</span>;

// const Signup = () => <span>Signup</span>;

// const Login = () => <span>Login</span>;

const Navigation = () => {
	return (
		<BrowserRouter>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Buskr</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{/* <Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link> */}
						<LinkContainer to="/" className="btn mr-3">
							<h4>Home</h4>
						</LinkContainer>
						<LinkContainer to="/signup" className="btn mr-3">
							<h4>Signup</h4>
						</LinkContainer>
						<LinkContainer to="/login" className="btn mr-3">
							<h4>Login</h4>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</BrowserRouter>
	);
};

export default Navigation;
