
import React from 'react';
import Styles from '../styles/index.js'


const Stats = (props) => {
  return (
    <div id="results">
      Now Playing: <span style={Styles.nowPlayingStyle} id="artist"></span>
      <br />
      Results Found: <span style={Styles.nowPlayingStyle} id="tracksLength"></span>
    </div>
  );
}

export default Stats
