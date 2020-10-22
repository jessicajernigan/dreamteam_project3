import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Uploader from '../../components/Uploader/Uploader';

import './CreatrDash.css';

const CreatrDash = () => {
	const testId = 8633317975153281;

	const state = useSelector((state) => state);

	const curCreatr = state.creators.filter((creator) => creator._id === testId);
	const { _id, name, imgUrl, bio, vibes } = curCreatr[0];

	// console.log('Current vibes', vibes);

	// const curSongs = state.songs.filter(song => song.creatorId === _id )
  const curSongs = state.songs.filter((song) => song.creatorId === testId);

  const playerRef = useRef(null);
  
  const handleSongPlay = (songUrl) => {
    playerRef.current.setAttribute('src', songUrl )
    playerRef.current.play();
  }


	return (
		<main className="CreatrDash">
			<Row>
				<Col lg={12}>
					<h2 className="text-center m-2 p-1">{name}</h2>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col lg={5} className="rounded m-1 p-1">
					<div className="d-flex flex-column justify-content-center align-items-center rounded m-2 mb-3 bg-gray">
						<div className="CreatrDash-photo-container m-2">
							<img src={imgUrl} alt="Artist" />
						</div>
						<div className="CreatrDash-dropzone-container rounded text-center m-2">
							{/* Dropzone Placeholder */}
							<Uploader />
						</div>
					</div>
					<div className="rounded m-2 mb-3 p-2 bg-gray text-center">
						<p className="bio-text m-2">{bio}</p>
						<button className="btn-save btn btn-primary btn-sm">
							Edit Bio
						</button>
					</div>
					<div className="d-flex flex-column align-items-center rounded m-2 mb-2 p-2 bg-gray">
						<div className="vibe-tiles m-1 mb-2 p-1">
							<ul className="list-group small d-flex flex-row flex-wrap justify-content-center text-center p-1 m-1">
								{vibes.map((vibe) => (
									<li
										key={vibe}
										className="list-group-item rounded m-1"
									>
										{vibe}
									</li>
								))}
							</ul>
						</div>
						<button className="btn-save btn btn-primary btn-sm">
							Edit Vibes
						</button>
					</div>
				</Col>
				<Col lg={5}>
					<div className="d-flex flex-column justify-content-space-evenly align-items-center rounded m-3 p-5 bg-gray">
						<h4>Available Music</h4>
						<div className="p-2">
							<audio ref={playerRef} controls>
								Your browser does not support the audio element.
							</audio>
						</div>
						<div className="CreatrDash-music-tiles w-100 m-1">
							<ul className="list-group row small d-flex flex-row text-center">
								{curSongs.map((song) => (
									<li
										key={song._id}
                    className="list-group-item col-md-6 border-0 bg-transparent"
                    onClick={() => handleSongPlay(song.songUrl)}
									>
										{song.title}
									</li>
								))}
							</ul>
						</div>
						<button className="btn-save btn btn-primary btn-sm">
							Edit Available Music
						</button>
					</div>
				</Col>
			</Row>
		</main>
	);
};

export default CreatrDash;
