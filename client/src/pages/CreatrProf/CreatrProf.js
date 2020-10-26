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
	console.log('state from CreatrProf', state);

  // REFACTOR TO USE .FIND()
	const curCreatr = state.creators.filter((creator) => creator._id === id);
	// console.log('curCreatr from CreatrProf: ', curCreatr);
	const { stageName, imgUrl, location, bio, songs, vibes } = curCreatr[0];

	// const curSongs = state.songs.filter(song => song.creatorId === id)

	const handlePlaySong = (songUrl) => {
    // console.log("Play song", songUrl)
    playerRef.current.setAttribute('controlsList', "nodownload");
		playerRef.current.setAttribute('src', songUrl);
		playerRef.current.play();
	};

	return (
		<div className="CreatrProf vh-100">
			<h1 className="w-100 my-5 text-center">{stageName}</h1>
			<Row className="mt-4 d-flex justify-content-center align-items-center">
				<Col lg={5}>
					<Card className="w-75 mx-auto bskr-bg-dark">
						<Card.Img variant="top" src={imgUrl} />
						<Card.Body>
							<Card.Text className="text-white text-center">
								{location}
							</Card.Text>
						</Card.Body>
					</Card>
					<p>{bio}</p>
				</Col>
				<Col lg={5} className="d-flex flex-column align-items-center">
					<div className="d-flex flex-column align-items-center">
						<h5>Vibes</h5>
						<ul>
							{vibes.map((vibe) => (
								<span key={vibe._id} className="btn mx-1 text-white">{vibe.name}</span>
							))}
						</ul>
					</div>
					<div className="bskr-bg-secondary d-flex flex-column align-items-center p-5 rounded">
						<h4 className="text-dark">Available Tunes</h4>
						<ul className="w-100">
							{songs.map((song) => (
								<li
									key={song._id}
									className="bskr-bg-search w-100 m-2 p-2 rounded text-dark"
								>
									<BiPlay
										className="fs-3"
										onClick={() => handlePlaySong(song.songUrl)}
									/>{' '}
									<BiPlusMedical className="mr-1" /> {song.title}
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
