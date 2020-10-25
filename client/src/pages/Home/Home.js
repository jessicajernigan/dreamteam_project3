import React from 'react';
import Row from 'react-bootstrap/Row';
import './Home.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Cart from '../../components/Cart/Cart';
import CreatrGrid from '../../components/CreatrGrid/CreatrGrid';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

const Home = () => {
	return (
		<React.Fragment>
			{/* <Cart /> */}
			<Row>
				<Hero />
			</Row>
			<Row>
				<Sidebar />
			</Row>
			<Row>
				<CreatrGrid />
			</Row>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
