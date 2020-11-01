import React from 'react';
import './About.css';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const About = () => {
	return (
		<React.Fragment>
			<Col lg={12} className="p-0">
        <Jumbotron className="AbtHero">
            <Image />
        </Jumbotron>
  		</Col>
			<main className="vh-100 d-flex flex-column align-items-center mt-5 pt-5">
				<h1 className="Abt mb-5">About Us</h1>
				<div className="col-lg-9 col-sm-12 p-4">
				<p>
					Buskr provides a platform for musicians to showcase their songs to music fans who are 
					interested in breaking free from the global trendscape in order to discover local acts 
					performing nearby.
					<br></br>
					<br></br>
					Have a particular musical style or genre in mind? Filter creators by vibe to zero in on
					your next favorite artist.
					<br></br>
					<br></br>
					Once you've found a sound you resonate with, consider donating a few dollars to that creator
					right there on their profile. It's the next best thing to dropping a dollar in a guitar case on 
					a street corner, especially at a time when we're seldomly out and about.					
				</p>
				</div>
			</main>
		</React.Fragment>
	);
};

export default About;