import React from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../../utils/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navigation.css';

const Navigation = () => {
	const activeStyle = {
		color : 'white'
	};

	const showNavigation = () => {
		if (Auth.loggedIn()) {
      const creatorId = Auth.getCreatorId();
			return (
				<React.Fragment>
					<NavLink to={`/creator/${creatorId}`} className="mr-3">Dashboard</NavLink>
					{/* <NavLink to="/orderHistory" className="mr-3">Order History</NavLink> */}
					<a href="/" className="mr-3" onClick={() => Auth.logout()}>
						Logout
					</a>
				</React.Fragment>
			);
		} else {
			return (
				<NavLink exact to="/login" activeStyle={activeStyle} className="mr-3">
					Login
				</NavLink>
			);
		}
	};

	return (
		<Navbar expand="lg" className="Navigation">
			<NavLink
				exact
				to="/"
				activeStyle={activeStyle}
				className="Navigation-brand-bskr"
			>
				Buskr
			</NavLink>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			{/* BS id, don't think we need, but could be for collapsing functionality */}
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					{/* will need to be protected for creators only */}
					{/* <NavLink exact to="/upload" className="btn mr-3">
							<h4>Upload</h4>
						</NavLink> */}
					{/* <ul></ul> */}
					<NavLink exact to="/about" activeStyle={activeStyle} className="mr-3">
						About Us
					</NavLink>
          {showNavigation()}
					<NavLink exact to="/cart" activeStyle={activeStyle} className="mr-3">
						View Cart
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
