import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = () => {
  const activeStyle = {
    color: "pink"
  };
	return (
			<Navbar expand="lg" className="Navigation">
       
          <NavLink exact to="/" activeStyle={activeStyle} className="Navigation-brand-bskr">Buskr</NavLink>
    
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
						<NavLink exact to="/login" activeStyle={activeStyle} className="mr-3">
							Buskr Login
						</NavLink>
						<NavLink exact to="/cart" activeStyle={activeStyle} className="mr-3">
							View Cart
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	);
};

export default Navigation;

