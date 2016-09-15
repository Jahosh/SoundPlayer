import React from 'react';
import Styles from '../styles/index.js'
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Progress, Icons } from 'react-soundplayer/components';

const {
SoundCloudLogoSVG,
PlayIconSVG,
PauseIconSVG,
NextIconSVG,
PrevIconSVG
} = Icons;


const clientId = '7fa0472ee03857f6fc1f3f580711b4de';
/*
const resolveUrl = 'https://soundcloud.com/roywoodsofficial/roy-woods-how-i-feel';
*/

class CustomPlayer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        artist: '',
        resolveUrl: 'https://soundcloud.com/roywoodsofficial/roy-woods-how-i-feel'
      }

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
    render() {
        return (
          <div className="text-center">
            <SoundPlayerContainer resolveUrl={this.state.resolveUrl} clientId={clientId}>
                <Player onSubmit={this.updateArtist.bind(this)} />
            </SoundPlayerContainer>
          </div>
        );
    }
}

class Player extends React.Component {
  constructor(props){
    super(props)
  }
    play() {
        let { soundCloudAudio, playing } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }
    render() {
        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{track.title}</h2>
                <h3>{track.user.username}</h3>
                <button className="btn btn-success" onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
                <form onSubmit={this.props.onSubmit.bind(this)}>
                  <input className="form-control"
                    id="getSong"
                    placeholder="artist" />
                  <br />
                  <button type='submit' style={Styles.buttonStyle} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CustomPlayer
