import React from 'react';
import Row from 'react-bootstrap/Row';
import './Home.css';

import Hero from '../../components/Hero/Hero';
import SidebarTop from '../../components/SidebarTop/SidebarTop';
import CreatrGrid from '../../components/CreatrGrid/CreatrGrid';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<React.Fragment>
			<Hero />
			<Row>
				<SidebarTop />
			</Row>
			<Row>
				<CreatrGrid />
			</Row>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
