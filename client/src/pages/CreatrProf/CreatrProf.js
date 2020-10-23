import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { BiPlay, BiPlusMedical } from 'react-icons/bi';

import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMob from '../../components/SidebarMob/SidebarMob';

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
				<Sidebar />
				{/* <SidebarMob /> */}
				<Col lg={12}>
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
							<h2>{name}</h2>
							<p>{bio}</p>
							<h4>Available Songs</h4>
							<ul>
								{curSongs.map((song) => (
									<li key={song._id}>
										<BiPlay onClick={() => handlePlaySong(song.songUrl)} /> <BiPlusMedical /> {song.title}
									</li>
								))}
							</ul>
            <div ref={playerRef} className="CreatrProf-player"></div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CreatrProf;
