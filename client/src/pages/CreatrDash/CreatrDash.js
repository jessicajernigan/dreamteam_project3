import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { QUERY_CREATORS } from '../../utils/queries';
import { updateCreators } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditPhoto from '../../components/EditPhoto/EditPhoto';
import EditBio from '../../components/EditBio/EditBio';
import EditTunes from '../../components/EditTunes/EditTunes';
import EditVibes from '../../components/EditVibes/EditVibes';

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import './CreatrDash.css';
import spinner from '../../assets/cool_spinner.gif';

const CreatrDash = () => {
	const state = useSelector((state) => state);
	const { creators } = state;
	const dispatch = useDispatch();

	// get current creator's id from url
	const { id } = useParams();

	const [ curCreatr, setCurCreatr ] = useState({});

	const { loading, data } = useQuery(QUERY_CREATORS);

	useEffect(
		() => {
			if (creators.length) {
				setCurCreatr(creators.find((creator) => creator._id === id));
			} else if (data) {
				dispatch(updateCreators(data.creators));

				data.creators.forEach((creator) => {
					idbPromise('creators', 'put', creator);
				});
			} else if (!loading) {
				idbPromise('creators', 'get').then((indexedCreators) => {
					dispatch(updateCreators(indexedCreators));
				});
			}
		},
		[ creators, data, loading, dispatch, id, curCreatr ]
	);

	const playerRef = useRef(null);

	const handlePlaySong = (songUrl) => {
		playerRef.current.setAttribute('src', songUrl);
		playerRef.current.play();
	};

	return (
		// <main className="CreatrDash">
		// 	{curCreatr ? (
		// 		<React.Fragment>
		// 			<Row>
		// 				<Col lg={12}>
		// 					<h2 className="text-center m-2 p-1">{curCreatr.stageName}</h2>
		// 				</Col>
		// 			</Row>
		// 			<Row className="d-flex justify-content-center">
		// 				<Col lg={5} className="rounded m-1 p-1">
		// 					<div className="d-flex flex-column justify-content-center align-items-center rounded m-2 mb-3 bg-gray">
		// 						<div className="CreatrDash-photo-container m-2">
		// 							<img src={curCreatr.imgUrl} alt="Artist" />
		// 						</div>
		// 						<div className="CreatrDash-dropzone-container rounded text-center m-2">
		// 							<Uploader />
		// 						</div>
		// 					</div>
		// 					<div className="rounded m-2 mb-3 p-2 bg-gray text-center">
		// 						<p className="bio-text m-2">{curCreatr.bio}</p>
		// 						<button className="btn-save btn btn-primary btn-sm">
		// 							Edit Bio
		// 						</button>
		// 					</div>
		// 					<div className="d-flex flex-column align-items-center rounded m-2 mb-2 p-2 bg-gray">
		// 						<div className="vibe-tiles m-1 mb-2 p-1">
		// 							<ul className="list-group small d-flex flex-row flex-wrap justify-content-center text-center p-1 m-1">
		// 								{curCreatr.vibes && curCreatr.vibes.map((vibe) => (
		// 									<li
		// 										key={vibe._id}
		// 										className="list-group-item rounded m-1 text-primary"
		// 									>
		// 										{vibe.name}
		// 									</li>
		// 								))}
		// 							</ul>
		// 						</div>
		// 						<button className="btn-save btn btn-primary btn-sm">
		// 							Edit Vibes
		// 						</button>
		// 					</div>
		// 				</Col>
		// 				<Col lg={5}>
		// 					<div className="d-flex flex-column justify-content-space-evenly align-items-center rounded m-3 p-5 bg-gray">
		// 						<h4>Available Music</h4>
		// 						<div className="p-2">
		// 							<audio ref={playerRef} controls>
		// 								Your browser does not support the audio element.
		// 							</audio>
		// 						</div>
		// 						<div className="CreatrDash-music-tiles w-100 m-1">
		// 							<ul className="list-group row small d-flex flex-row text-center">
		// 								{curCreatr.songs && curCreatr.songs.map((song) => (
		// 									<li
		// 										key={song._id}
		// 										className="list-group-item col-md-6 border-0 bg-transparent"
		// 										onClick={() =>
		// 											handleSongPlay(song.songUrl)}
		// 									>
		// 										{song.title}
		// 									</li>
		// 								))}
		// 							</ul>
		// 						</div>
		// 						<button className="btn-save btn btn-primary btn-sm">
		// 							Edit Available Music
		// 						</button>
		// 					</div>
		// 				</Col>
		// 			</Row>
		// 		</React.Fragment>
		// 	) : null}
		// 	{loading ? <img src={spinner} alt="loading" /> : null}
		// </main>
		<React.Fragment>
			{curCreatr ? (
				<div className="CreatrDash vh-100">
					<h1 className="w-100 my-5 text-center">{curCreatr.stageName}</h1>
					<Row className="mt-4 d-flex justify-content-center ">
						<Col lg={5}>
							<div className="w-100 bskr-bg-secondary pt-2 mb-3 rounded">
								<Card className="w-75 mx-auto bskr-bg-secondary">
									<Card.Img variant="top" className="w-75 mx-auto rounded"src={curCreatr.imgUrl} />
									<Card.Body className="text-center">
										{/* <Card.Text className="text-white text-center">
                  {curCreatr.location}
                </Card.Text> */}
										<EditPhoto />
									</Card.Body>
								</Card>
							</div>
							<div className="bskr-bg-secondary rounded p-4 text-center">
								<p className="text-left">{curCreatr.bio}</p>
								<EditBio />
							</div>
						</Col>
						<Col lg={5} className="d-flex flex-column align-items-center">
							<div className="bskr-bg-secondary w-100 mb-3 py-5 rounded d-flex flex-column align-items-center">
								<h5 className="text-dark">Vibes</h5>
								<ul>
									{curCreatr.vibes &&
										curCreatr.vibes.map((vibe) => (
											<span
												key={vibe._id}
												className="bskr-vibe-btn-static btn-sm mx-1 text-white"
											>
												{vibe.name}
											</span>
										))}
								</ul>
								<EditVibes />
							</div>
							<div className="bskr-bg-secondary w-100 p-5 d-flex flex-column align-items-center rounded">
								<h4 className="text-dark">Available Tunes</h4>
								<ul className="w-100">
									{curCreatr.songs &&
										curCreatr.songs.map((song) => (
											<li
												key={song._id}
												className="bskr-bg-search w-100 m-2 p-2 rounded text-dark"
											>
												<BiPlay
													className="fs-3"
													onClick={() =>
														handlePlaySong(song.songUrl)}
												/>{' '}
												<BiPlusMedical className="mr-1" />{' '}
												{song.title}
											</li>
										))}
								</ul>
								<EditTunes />
								<div className="mt-4">
									<audio ref={playerRef} controls>
										Your browser does not support the audio element.
									</audio>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			) : null}
			{loading ? <img src={spinner} alt="loading" /> : null}
		</React.Fragment>
	);
};

export default CreatrDash;
