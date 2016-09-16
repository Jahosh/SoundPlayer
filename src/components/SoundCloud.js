import React from 'react';
import Styles from '../styles/index.js'
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import Player from './Player/Player';
import { Progress, Icons } from 'react-soundplayer/components';
import scConfig from '../config/SC';


class CustomPlayer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        artist: '',
        resolveUrl: 'https://soundcloud.com/roywoodsofficial/roy-woods-how-i-feel'
      }
      console.log(props);

    }
    updateArtist(e) {
      e.preventDefault()
      let artist = document.getElementById('getSong').value;
      if (artist === '') {
        alert('please enter a artist name');
        return;
      }
      SC.get('/tracks', {
        q: artist,
      }).then( (tracks) => {
        console.log(tracks);
        const resolveUrl = tracks[0].permalink_url

        this.setState({
          resolveUrl: resolveUrl
        })

        console.log(this.state);
      })
      document.getElementById('getSong').value = '';
    }
    componentWillMount(){

    }
    render() {
        return (
          <div className="text-center">
            <SoundPlayerContainer resolveUrl={this.state.resolveUrl} clientId={scConfig.clientId}>
                <Player onSubmit={this.props.handleArtistSearch} />
            </SoundPlayerContainer>
          </div>
        );
    }
}


export default CustomPlayer
