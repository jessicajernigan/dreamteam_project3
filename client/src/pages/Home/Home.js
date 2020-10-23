import React from 'react';
import Row from 'react-bootstrap/Row';
import './Home.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMob from '../../components/SidebarMob/SidebarMob';
import CreatrGrid from '../../components/CreatrGrid/CreatrGrid';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Player from '../../components/Player/Player';

const Home = () => {
	return (
		<React.Fragment>
			<Row>
				<Hero />
			</Row>
			<Row>
				<Sidebar />
			</Row>
			<Row>
				{/* <SidebarMob /> */}
				<CreatrGrid />
			</Row>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
