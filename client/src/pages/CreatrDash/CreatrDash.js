import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { QUERY_CREATORS } from '../../utils/queries';
import { updateCreators } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
		<React.Fragment>
			{curCreatr ? (
				<div className="CreatrDash vh-100">
					<h1 className="w-100 my-5 text-center">{curCreatr.stageName}</h1>
					<Row className="mt-4 d-flex justify-content-center ">
						<Col lg={5}>
							<div className="w-100 bskr-bg-secondary pt-2 mb-3 rounded">
								<Card className="w-75 mx-auto bskr-bg-secondary">
									<Card.Img variant="top" className="w-75 mx-auto rounded" src={curCreatr.imgUrl} />
									<Card.Body className="text-center">
										{/* <Card.Text className="text-white text-center">
                  {curCreatr.location}
                </Card.Text> */}
										<Button className="w-75 btn-sm bskr-btn-purple">
											edit profile photo
										</Button>
									</Card.Body>
								</Card>
							</div>
							<div className="bskr-bg-secondary rounded p-4 text-center">
								<p className="text-left">{curCreatr.bio}</p>
								<Button className="w-50 btn-sm bskr-btn-purple">
									edit bio
								</Button>
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
								<Button className="w-50 btn-sm bskr-btn-purple">
									edit vibes
								</Button>
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
								<Button className="w-50 btn-sm bskr-btn-purple mb-5">
									edit tunes
								</Button>
								<div className="">
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
