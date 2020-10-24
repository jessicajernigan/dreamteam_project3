import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Player from '../../components/Player/Player'

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMob from '../../components/SidebarMob/SidebarMob';
import CreatrVibes from '../../components/CreatrVibes/CreatrVibes';

import './CreatrProf.css';

const CreatrProf = () => {
  // const songs = [ 'Song One', 'Song Two', 'Song Three', 'Song Four', 'Song Five' ];
  
  const playerRef = useRef(null)

	const testId = 8633317975153281;

	const state = useSelector((state) => state);

  const curCreatr = state.creators.filter((creator) => creator._id === testId);
  const { name, imgUrl, location, bio } = curCreatr[0];

  const curSongs = state.songs.filter(song => song.creatorId === testId)

  const handlePlaySong = (songUrl) => {
    // console.log("Play song", songUrl)
    const songPlayer = new Audio(songUrl);
    songPlayer.setAttribute('controls', true);
    songPlayer.setAttribute('controlsList', "nodownload");
    songPlayer.addEventListener("canplaythrough", event => {
      /* the audio is now playable; play it if permissions allow */
      playerRef.current.appendChild(songPlayer);
      songPlayer.play();
    });
  }

  
  

	return (
		<div className="CreatrProf">
			<Row>
			<h1 className="Artist-Name mt-5 mb-2 w-100 text-center">{name}</h1>
				<Col lg={12}>
					<Row className="m-2">
						<Col lg={6}>
							<Row className="CreatrProf-1half-Container d-flex justify-content-center align-items-center m-2">
								<Card>
									<Card.Img variant="top" src={imgUrl} />
									<Card.Body className="p-2">
										<Card.Text className="w-100 text-center">Location: {location}</Card.Text>
									</Card.Body>
								</Card>
							</Row>
							<Row className="CreatrProf-2half-Container d-flex justify-content-center align-items-center m-2">
							<p className="m-0">{bio}</p>
							</Row>
						</Col>
						<Col lg={6}>
							<Row className="Vibes-Panel d-flex justify-content-center align-items-center m-2">
								<CreatrVibes />
							</Row>
							<Row className="Songs-Panel d-flex flex-column justify-content-center align-items-center m-2">
								<h4 className="Text-Black w-75 text-center m-1">Available Songs</h4>
								<ul className="w-75 text-left m-1">
									{curSongs.map((song) => (
										<li className="Text-Black Song rounded m-1" key={song._id}>
											<BiPlay className="Play-Btn m-1" onClick={() => handlePlaySong(song.songUrl)} /> <BiPlusMedical className="Add-Btn m-1" /> {song.title}
										</li>
									))}
								</ul>
								<Player />
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CreatrProf;
