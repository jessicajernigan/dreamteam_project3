import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import VibeBtn from '../../components/VibeBtn/VibeBtn'

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import './CreatrProfTest.css';

const CreatrProf = () => {
	const playerRef = useRef(null);

	// const { id } = useParams();
	// // console.log('params id: ', id)

	// const state = useSelector((state) => state);
	// // console.log('state from CreatrProf', state);

	// const curCreatr = state.creators.filter((creator) => creator._id === id);
	// // console.log('curCreatr from CreatrProf: ', curCreatr);
	// const { stageName, imgUrl, location, bio, songs } = curCreatr[0];', 

  const songs = [ 'Song One', 'Song Two', 'Song Three', 'Song Four' ];
  const vibes = [ 'Reggae', 'Rock', 'Blues', 'Hip Hop', 'Disco', 'Jazz']
	// const curSongs = state.songs.filter(song => song.creatorId === id)

	const handlePlaySong = () => {
		// console.log("Play song", songUrl)
		playerRef.current.setAttribute(
			'src',
			'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
		);
		playerRef.current.play();
	};

	return (
		<div className="CreatrProf">
			<h1 className="w-100 my-5 text-center">Royal Trux</h1>
			<Row className="mt-4 d-flex justify-content-center align-items-center">
				<Col lg={5}>
					<Card className="w-75 mx-auto bskr-bg-dark">
						<Card.Img variant="top" src="/images/busker-gal-1.jpg" />
						<Card.Body className="">
							<Card.Text className="text-white text-center">
								Austin, TX
							</Card.Text>
						</Card.Body>
					</Card>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
						explicabo modi nulla officia sint numquam sed quidem dolor autem.
						Quos dignissimos, repellat voluptate est ut architecto! Harum,
						laborum. Repudiandae, minus.
					</p>
				</Col>
				<Col lg={5} className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center">
            <h5>Vibes</h5>
            <ul>
              {vibes.map(vibe => (
                <button className="btn mx-1">{vibe}</button>
              ))}
            </ul>
          </div>
					<div className="bskr-bg-secondary d-flex flex-column align-items-center p-5 rounded">
						<h4>Available Tunes</h4>
						<ul className="w-100">
							{songs.map((song, i) => (
								<li key={i} className="bskr-bg-search w-100 m-2 p-2 rounded text-dark">
									<BiPlay onClick={() => handlePlaySong()} />{' '}
									<BiPlusMedical /> {song}
								</li>
							))}
						</ul>
						<div className="p-2">
							<audio ref={playerRef} controls>
								Your browser does not support the audio element.
							</audio>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default CreatrProf;
