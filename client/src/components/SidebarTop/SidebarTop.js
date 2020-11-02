import React from 'react';

import Col from 'react-bootstrap/Col';

import VibeMenu from '../VibeMenu/VibeMenu';

import './SidebarTop.css';

const SidebarTop = () => {
	return (
		<Col
			lg={12}
			className="SidebarTop w-100 d-flex justify-content-center text-center"
		>
			<VibeMenu />
		</Col>
	);
};

export default SidebarTop;
