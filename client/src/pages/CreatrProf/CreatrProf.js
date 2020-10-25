import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import './CreatrProf.css';

const CreatrProf = () => {

	const playerRef = useRef(null);

	const { id } = useParams();
	// console.log('params id: ', id)

	const state = useSelector((state) => state);
	// console.log('state from CreatrProf', state);

	const curCreatr = state.creators.filter((creator) => creator._id === id);
	// console.log('curCreatr from CreatrProf: ', curCreatr);
	const { stageName, imgUrl, location, bio, songs } = curCreatr[0];

	// const curSongs = state.songs.filter(song => song.creatorId === id)

	const handlePlaySong = (songUrl) => {
		// console.log("Play song", songUrl)
		playerRef.current.setAttribute('src', songUrl);
		playerRef.current.play();
	};

	return (
		<div className="CreatrProf">
			<Row>
				<Col lg={10}>
					<Row className="mt-4 flex align-items-center">
						<Col lg={3}>
							<Card>
								<Card.Img variant="top" src={imgUrl} />
								<Card.Body>
									<Card.Text>Location: {location}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={9}>
							<h2>{stageName}</h2>
							<p>{bio}</p>
							<h4>Available Songs</h4>
							<ul>
								{songs.map((song) => (
									<li key={song._id}>
										<BiPlay
											onClick={() => handlePlaySong(song.songUrl)}
										/>{' '}
										<BiPlusMedical /> {song.title}
									</li>
								))}
							</ul>
							<div className="p-2">
								<audio ref={playerRef} controls>
									Your browser does not support the audio element.
								</audio>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CreatrProf;
