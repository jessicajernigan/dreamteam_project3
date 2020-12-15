import React from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../../utils/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navigation.css';

const Navigation = () => {
	const activeStyle = {
		color : '#cccccc'
	};

  // show links based on authorization status
	const showNavigation = () => {
    // if creator is logged in get id from LS and add as url param
		if (Auth.loggedIn()) {
			const creatorId = Auth.getCreatorId();
			return (
				<>
					<NavLink to={`/creator/${creatorId}`}  activeStyle={activeStyle}className="mr-3">
						Dashboard
					</NavLink>
          {/* Clear user token and profile data from localStorage.  load homepage */}
					<a href="/" className="mr-3" onClick={() => Auth.logout()}>
						Logout
					</a>
				</>
			);
		} else {
      // creator not logged in, show login link
			return (
				<>
					<NavLink exact to="/about" activeStyle={activeStyle} className="mr-3">
						About Us
					</NavLink>
					<NavLink exact to="/login" activeStyle={activeStyle} className="mr-3">
						Login
					</NavLink>
				</>
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
        {/* conditional nav links displayed based on return of auth function */}
				<Nav className="ml-auto">{showNavigation()}</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
