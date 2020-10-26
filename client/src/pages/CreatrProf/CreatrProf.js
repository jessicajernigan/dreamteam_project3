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

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import './CreatrProf.css';
import spinner from '../../assets/cool_spinner.gif';

const CreatrProf = () => {
	const state = useSelector((state) => state);
	const { creators } = state;
	// console.log('global state from CreatrProf', state);

	const dispatch = useDispatch();

	const { id } = useParams();
	// console.log('params id: ', id)

	const playerRef = useRef(null);

	// REFACTOR TO USE .FIND()
	// const curCreatr = state.creators.filter((creator) => creator._id === id);
	// const { stageName, imgUrl, location, bio, songs, vibes } = curCreatr[0];

	// const curCreatr = state.creators.find((creator) => creator._id === id);
	// const { stageName, imgUrl, location, bio, songs, vibes } = curCreatr;

  const [ curCreatr, setCurCreatr ] = useState({});
  // console.log("curCreatr: ", curCreatr);

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

	const handlePlaySong = (songUrl) => {
		// console.log("Play song", songUrl)
		playerRef.current.setAttribute('controlsList', 'nodownload');
		playerRef.current.setAttribute('src', songUrl);
		playerRef.current.play();
  };

	return (
		<React.Fragment>
			{curCreatr ? (
				<div className="CreatrProf vh-100">
					<h1 className="w-100 my-5 text-center">{curCreatr.stageName}</h1>
					<Row className="mt-4 d-flex justify-content-center align-items-center">
						<Col lg={5}>
							<Card className="w-75 mx-auto bskr-bg-dark">
								<Card.Img variant="top" src={curCreatr.imgUrl} />
								<Card.Body>
									<Card.Text className="text-white text-center">
										{curCreatr.location}
									</Card.Text>
								</Card.Body>
							</Card>
							<p>{curCreatr.bio}</p>
						</Col>
						<Col lg={5} className="d-flex flex-column align-items-center">
							<div className="d-flex flex-column align-items-center">
								<h5>Vibes</h5>
								<ul>
									{curCreatr.vibes && curCreatr.vibes.map((vibe) => (
										<span
											key={vibe._id}
											className="btn mx-1 text-white"
										>
											{vibe.name}
										</span>
									))}
								</ul>
							</div>
							<div className="bskr-bg-secondary d-flex flex-column align-items-center p-5 rounded">
								<h4 className="text-dark">Available Tunes</h4>
								<ul className="w-100">
									{curCreatr.songs && curCreatr.songs.map((song) => (
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
								<div className="p-2">
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

export default CreatrProf;
