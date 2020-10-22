import React from 'react';
import Row from 'react-bootstrap/Row';
import './Home.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMob from '../../components/SidebarMob/SidebarMob';
import CreatrGrid from '../../components/CreatrGrid/CreatrGrid';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<React.Fragment>
			<Row>
				<Sidebar />
				<SidebarMob />
				<CreatrGrid />
			</Row>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
