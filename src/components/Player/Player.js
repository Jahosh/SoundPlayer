import React from 'react';
import scConfig from '../../config/SC';


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
                <div id="avatar" style={{height: '200px' }}>
                  
                 </div>
                <button className="btn btn-success" onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
                <form onSubmit={this.props.onSubmitArtist}>
                  <input className="form-control"
                    id="getSong"
                    placeholder="artist" />
                  <br />
                  <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Player;