import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import Styles from '../styles/index.js'
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Progress, Icons } from 'react-soundplayer/components';
import scConfig from '../config/SC';
import Player from '../components/Player/Player'
import _ from 'lodash';

const scId = '7fa0472ee03857f6fc1f3f580711b4de';

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searches: [],
      selectedArtist: null,
      resolveUrl: 'https://soundcloud.com/roywoodsofficial/roy-woods-how-i-feel',
      indexCache: []
    };
  }
  componentWillMount(){

  }
  componentDidMount(){


  }
  handleArtistSearch(e){
    e.preventDefault()
    let artist = document.getElementById('getSong').value;
    if (artist.length === 0) {
      alert('please enter a artist name');
      return;
    }
    this.getSongs(artist);
  }
  getSongs(artist){
    if (typeof artist != 'string'){
      alert('invalid artist name');
      return;
    }
    SC.get('/tracks', {
      q: artist,
      limit: 200
    })
      .then( (tracks) => {
        document.getElementById('getSong').value = '';
        this.filterSongs(tracks, artist);
        
      })
        .catch( (error) => {
          console.log(error);
        });
     
  }
  filterSongs(tracks, artist){
    //return songs that have a label name & title's containe the artist name
    const filteredSongs = _.filter(tracks, (o) => {
     return o.label_name != null && o.title.indexOf(artist) != -1;
    });  
    console.log(filteredSongs);
    this.randomNumberGen(filteredSongs, artist);
  }
  randomNumberGen(tracks, artist){
    let cache = this.state.indexCache;
    const randomNumber = Math.floor( (Math.random() * tracks.length));
    console.log(randomNumber);
    cache.push(randomNumber);
     const resolveUrl = tracks[randomNumber].permalink_url
        let artwork = tracks[randomNumber].artwork_url
        this.appendAvatar(artwork);
        this.setState({
          searches: this.state.searches.concat(artist),
          selectedArtist: artist,
          resolveUrl: resolveUrl
        });
  }
  appendAvatar(url){
    if (url === null) {
      document.getElementById('avatar').innerHTML = 'test'
    } else {
  
      document.getElementById('avatar').innerHTML = '<img src=' + url + ' />'
    }
  }
  render(){
    return (
      <div>
        <div style={{border: "1px solid black" }} className="col-lg-12 text-center">
          <SoundPlayerContainer resolveUrl={this.state.resolveUrl} clientId={scId}>
            <Player searches={this.state.searches} onSubmitArtist={this.handleArtistSearch.bind(this)} />
          </SoundPlayerContainer>

        </div>
     </div>
    );
  }
}

// // <SearchBar song={this.props.url} onUpdate={this.handleUpdateSearches.bind(this)} searches={this.state.searches} title={this.props.title} />

export default PlayerContainer;


/*
  <CustomPlayer 
            pastSearches={this.props.pastSearches} 
            selectedArtist={this.props.selectedArtist}
            onArtistSearch={this.onArtistSearch.bind(this)} />
            <div className="text-center">

*/ 
