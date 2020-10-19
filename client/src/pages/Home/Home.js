import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarMobile from '../../components/SidebarMobile/SidebarMobile'

const Home = () => {
	return (
		<React.Fragment>
			<Row>
        <Sidebar />
        <SidebarMobile />
				<Col lg={10}>
					<div className="artist-tiles-container">
						{[ ...Array(24) ].map((_, i) => (
							<div className="artist-tile" key={i} />
						))}
					</div>
				</Col>
			</Row>
			<footer id="footer">
				<h6>&copy; dreamteam 2020</h6>
			</footer>
		</React.Fragment>
	);
};

export default Home;
