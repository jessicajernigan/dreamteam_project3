import React from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';
import CreatrTile from '../../components/CreatrTile/CreatrTile';

 
const Player = () => (
  <AudioPlayer
    autoPlay
    showJumpControls={false}
    showDownloadProgress={false}
    showSkipControls={false}
    // src="http://example.com/audio.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  ></AudioPlayer>
);

export default Player;