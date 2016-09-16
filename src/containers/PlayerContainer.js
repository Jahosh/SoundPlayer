import React from 'react';
//import CustomPlayer from '../components/SoundCloud';
import SoundCloudAudio from 'soundcloud-audio';
import Styles from '../styles/index.js'
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Progress, Icons } from 'react-soundplayer/components';
import scConfig from '../config/SC';
import Player from '../components/Player/Player'

const scId = '7fa0472ee03857f6fc1f3f580711b4de';

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searches: [],
      selectedArtist: null,
      resolveUrl: 'https://soundcloud.com/roywoodsofficial/roy-woods-how-i-feel'
    };
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  handleArtistSearch(e){
    e.preventDefault()
    let artist = document.getElementById('getSong').value;

    if (artist === '') {
      alert('please enter a artist name');
      return;
    }
    SC.get('/tracks', {
      q: artist,
    })
      .then( (tracks) => {
        document.getElementById('getSong').value = '';
        const resolveUrl = tracks[0].permalink_url
        let artwork = tracks[0].artwork_url
        this.appendAvatar(artwork);
        this.setState({
          searches: this.state.searches.concat(artist),
          selectedArtist: artist,
          resolveUrl: resolveUrl
        });
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
        <div className="col-lg-12 text-center">
          <SoundPlayerContainer resolveUrl={this.state.resolveUrl} clientId={scId}>
            <Player onSubmitArtist={this.handleArtistSearch.bind(this)} />
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
