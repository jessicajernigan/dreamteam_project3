import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CREATORS } from '../../utils/queries';
import { updateCreators } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

// import {Elements} from '@stripe/react-stripe-js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import EditPhoto from '../../components/EditPhoto/EditPhoto';
import EditBio from '../../components/EditBio/EditBio';
import EditVibes from '../../components/EditVibes/EditVibes';
import EditTunes from '../../components/EditTunes/EditTunes';

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import './CreatrDash.css';
import spinner from '../../assets/cool_spinner.gif';

const CreatrDash = () => {
	const imgDefault = 'Please add a picture to your profile';
	const bioDefault = 'Please tell us a little about yourself';
	const vibesDefault = 'Please select your vibes';
	const tunesDefault = 'Please add some tunes';

  const state = useSelector((state) => state);
  // console.log('CreatrDash state: ', state)
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
		[ creators, data, loading, dispatch, id ]
	);

	const playerRef = useRef(null);

	const handlePlaySong = (songUrl) => {
		playerRef.current.setAttribute('src', songUrl);
		playerRef.current.play();
	};

	return (
		<React.Fragment>
			{curCreatr ? (
				<div className="CreatrDash vh-100">
					<h1 className="w-100 my-5 text-center">{curCreatr.stageName}</h1>
					<Row className="mt-4 d-flex justify-content-center ">
						<Col lg={5} className="d-flex flex-column align-items-center justify-content-center">
							<div className="w-100 bskr-bg-secondary pt-2 mb-3 rounded">
								<Card className="w-75 mx-auto bskr-bg-secondary">
									{curCreatr.imgUrl ? (
										<React.Fragment>
											<Card.Img
												variant="top"
												className="w-75 mx-auto rounded"
												src={curCreatr.imgUrl}
											/>
											<Card.Body className="text-center">
												<EditPhoto />
											</Card.Body>
										</React.Fragment>
									) : (
										<Card.Body className="text-center">
											<p className="text-center">{imgDefault}</p>
											<EditPhoto />
										</Card.Body>
									)}
								</Card>
							</div>
							<div className="bskr-bg-secondary rounded w-100 p-4 text-center">
								{curCreatr.bio ? (
									<p className="text-left">{curCreatr.bio}</p>
								) : (
									<p className="mb-3">{bioDefault}</p>
								)}
								<EditBio curBio={curCreatr.bio} />
							</div>
						</Col>
						<Col lg={5} className="d-flex flex-column align-items-center justify-content-center mt-3 mb-3">
							<div className="bskr-bg-secondary w-100 mb-3 p-2 rounded d-flex flex-column justify-content-center align-items-center">
								<h5 className="text-dark">Vibes</h5>
								{curCreatr.vibes && curCreatr.vibes.length ? (
									<ul className="d-flex flex-row flex-wrap m-1">
                   {/* {curCreatr.vibes.map((vibe) => ( */}
                   {/* remove All vibe from display until refactor of All filter on CreatrGrid */}
										{curCreatr.vibes.filter(vibe => vibe.name !== 'All').map((vibe) => (
                      <span
												key={vibe._id}
												className="bskr-vibe-btn-static d-inline-block text-center btn-sm m-1 text-white"
											>
												{vibe.name}
											</span>
										))}
									</ul>
								) : (
									<p>{vibesDefault}</p>
								)}

								<EditVibes curVibes={curCreatr.vibes}  />
							</div>
							<div className="bskr-bg-secondary w-100 p-5 d-flex flex-column align-items-center rounded">
								<h4 className="text-dark">Available Tunes</h4>
								{curCreatr.songs && curCreatr.songs.length ? (
									<ul className="w-100">
										{curCreatr.songs.map((song) => (
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
								) : (
									<p>{tunesDefault}</p>
								)}
								<EditTunes/>
								{curCreatr.songs && curCreatr.songs.length ? (
									<div>
										<audio ref={playerRef} controls>
											Your browser does not support the audio
											element.
										</audio>
									</div>
								) : null}
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

