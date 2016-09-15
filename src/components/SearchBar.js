import React from 'react';
import Styles from '../styles/index.js'
import _ from 'lodash';
import errorMessages from '../config/errorMessages';
import RecentSearches from './RecentSearches';
import Stats from './Stats';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      queried: false,
      tracksLen: 0,
      artistName: ''
    }
  }
  render() {
    return (
      <div className="col-lg-12">
        <div style={Styles.playerStyle} id="player"></div>
          <RecentSearches searches={this.props.searches} />
          <label htmlFor="search">Artist:</label>
          <div className="text-center">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              placeholder="Artist Name..."
              onChange={this.handleChange}
              className="form-control"
              id="search" />
            <button type='submit' style={Styles.buttonStyle} className="btn btn-primary">Submit</button>
          </form>
          {this.showStats()}
        </div>
        <br />
      </div>
	 );
  }
  handleSubmit(e) {
    e.preventDefault();
    let term = document.getElementById('search').value;
    this.fetchSongs(term);
  }
  fetchSongs(term){
    SC.get('/tracks', {
      q: term,
      limit: 200
  })
    .then( (tracks) => {
      const song = tracks[0].permalink_url;
      const artistName = tracks[0].title;
      const tracksLen = tracks.length;
      if (tracks.length < 1) {
        alert('not found!');
        return;
      }
      this.setState({ queried: true, tracksLen: tracks.length, artistName: artistName });
      this.embedSongs(song, tracksLen, artistName);
    })
      .catch( (e) => {
        console.log(e);
      });
  }
  embedSongs(song, songsLen, artistName){
    SC.oEmbed(song, { auto_play: true }).then(function(song) {
      document.getElementById('player').innerHTML = song.html;
      document.getElementById('artist').innerHTML = artistName;
      document.getElementById('tracksLength').innerHTML = songsLen;
    })
      .catch( (e) => {
        console.log(e);
      });
    document.getElementById('search').value = '';
    this.props.onUpdate(term);
  }
  showStats(){

    if (this.state.queried) {
      return (
        <Stats length={this.state.tracksLen} artistName={this.state.artistName} />
      );
    }
  }
}

export default SearchBar;
