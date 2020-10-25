import React from 'react';

import Col from 'react-bootstrap/Col';


import VibeMenu from '../VibeMenu/VibeMenu'

import './SidebarMob.css';

const SidebarMob = () => {

	return (
		<React.Fragment>
			<Col lg={12} className="SidebarMob">
        <VibeMenu />
			</Col>
		</React.Fragment>
	);
};

export default SidebarMob;
