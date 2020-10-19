import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = () => {
	return (
			<Navbar expand="lg" className="Navbar">
				{/* <Navbar.Brand href="/">Buskr</Navbar.Brand> */}
        <LinkContainer to="/" className="Navbar-brand-cst">
							<h2>Buskr</h2>
						</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
            {/* will need to be protected for creators only */}
						{/* <LinkContainer to="/upload" className="btn mr-3">
							<h4>Upload</h4>
						</LinkContainer> */}
						<LinkContainer to="/signup" className="btn mr-3">
							<h4>Signup</h4>
						</LinkContainer>
						<LinkContainer to="/login" className="btn mr-3">
							<h4>Login</h4>
						</LinkContainer>
						<LinkContainer to="/cart" className="btn mr-3">
							<h4>View Cart</h4>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	);
};

export default Navigation;
