import React from 'react';
import Row from 'react-bootstrap/Row';
import './Home.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/SidebarMobile/SidebarMobile';
import ArtistGrid from '../../components/ArtistGrid/ArtistGrid';
import Footer from '../../components/Footer/Footer';



const Home = () => {
	return (
		<React.Fragment>
			<Row>
				<Sidebar />
				<SidebarMobile />
        <ArtistGrid />
			</Row>
      <Footer />
		</React.Fragment>
	);
};

export default Home;
