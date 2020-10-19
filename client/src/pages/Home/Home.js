import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Home.css';

import Sample from '../../components/Sample/Sample';

const Home = () => {
	return (
		<React.Fragment>
			<Row>
				<Col lg={2}>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Search for an artist"
							aria-label="Artist search"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
          <div id="browse">
            <h5>Browse</h5>
            <a className="nav-link" href="#">
              Rock
            </a>
            <a className="nav-link" href="#">
              Hip Hop
            </a>
            <a className="nav-link" href="#">
              Reggae
            </a>
            <a className="nav-link" href="#">
              Jazz
            </a>
            <a className="nav-link" href="#">
              Country
            </a>
            <a className="nav-link" href="#">
              Disco
            </a>
            <a className="nav-link" href="#">
              Blues
            </a>
          </div>
          <div id="now-playing">
                <div id="now-playing-text">
                    <p id="artist-playing">Red Hot Chili Peppers</p>
                    <p id="song-playing">Californication</p>
                </div>
                <div id="audio-controller">
                    <audio controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source src="horse.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
				</Col>
				<Col lg={10}>
        <div className="artist-tiles-container">
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
            <div className="artist-tile">
            </div>
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
