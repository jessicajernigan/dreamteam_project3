import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CreatrVibes from '../../components/CreatrVibes/CreatrVibes';
import Player from '../../components/Player/Player';
import Footer from '../../components/Footer/Footer';
import Cart from '../../components/Cart/Cart';
import EditPhoto from '../../components/EditPhoto/EditPhoto';

import Uploader from '../../components/Uploader/Uploader';
import { BiPlay, BiDownload } from 'react-icons/bi';

import './CreatrDash.css';

const CreatrDash = () => {
	const testId = 8633317975153281;

	const state = useSelector((state) => state);

	const curCreatr = state.creators.filter((creator) => creator._id === testId);
	const { name, imgUrl, location, bio, vibes } = curCreatr[0];

	// console.log('Current vibes', vibes);

	// const curSongs = state.songs.filter(song => song.creatorId === _id )
  const curSongs = state.songs.filter((song) => song.creatorId === testId);

  const playerRef = useRef(null);
  
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
			<h1 className="Artist-Name mt-5 mb-5 w-100 text-center">{name}</h1>
				<Col lg={12}>
					<Row className="m-2">
						<Col lg={6}>
							<Row className="CreatrDash-1half-Container d-flex justify-content-center align-items-center p-2 rounded">
								<Card className="d-flex justify-content-center">
									<Card.Img variant="top" src={imgUrl} />
								</Card>
								{/* <Row className="d-flex justify-content-center mb-4"> */}
								{/* <EditPhoto /> */}
								<Button className="Edit-Btn w-50 btn-sm mt-2" variant="primary" type="submit">
									edit profile photo
								</Button>
								{/* </Row> */}
							</Row>
							
							{/* <Row className="d-flex justify-content-center m-0">
								<p className="m-0 w-50">{location}</p>
								<Button className="Edit-Btn w-50 btn-sm" variant="primary" type="submit">
									edit bio
								</Button>
							</Row> */}
							<Row className="CreatrDash-2half-Container d-flex justify-content-center align-items-center rounded p-2 mt-4">
								<p className="m-0">{bio}</p>
								<Button className="Edit-Btn w-50 btn-sm" variant="primary" type="submit">
									edit bio
								</Button>
							</Row>
						</Col>
						<Col lg={6}>
							<Row className="CreatrDash-Vibes-Panel d-flex justify-content-center align-items-center rounded mb-2 ml-2 mr-2 p-2">
								<CreatrVibes />
								<Button className="Edit-Btn w-50 btn-sm" variant="primary" type="submit">
									edit vibes
								</Button>
							</Row>
							<Row className="CreatrDash-Songs-Panel d-flex flex-column justify-content-start align-items-center rounded ml-2 mr-2 mt-4">
								<h4 className="Text-Black w-75 text-center mt-3">Available Tunes</h4>
								<ul className="w-75 text-left m-1">
									{curSongs.map((song) => (
										<li className="Text-Black Song rounded m-1" key={song._id}>
											<BiPlay className="Play-Btn m-1" onClick={() => handlePlaySong(song.songUrl)} /> {song.title}
										</li>
									))}
								</ul>
								<Button className="Edit-Btn w-50 btn-sm" variant="primary" type="submit">
									edit tunes
								</Button>
								<Player className="CreatrDash-Player"/>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default CreatrDash;
