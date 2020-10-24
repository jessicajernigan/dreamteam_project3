import React from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';

let source = 'http://d28dtfvuvlqgls.cloudfront.net/buskr-audio/instrumental-chill_-_Rain.mp3' 

const Player = () => (
  <AudioPlayer
    autoPlay
    showJumpControls={false}
    showDownloadProgress={false}
    showSkipControls={false}
    src={source}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;