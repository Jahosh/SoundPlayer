import React from 'react';
import SearchBar from './SearchBar'
import CustomPlayer from './SoundCloud';
import SoundCloudAudio from 'soundcloud-audio';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: []
    }
  }
  handleUpdateSearches(term){
    this.setState({ searches: this.state.searches.concat(term) })
  }
  render(){
    return (
      <div>
        <div className="col-lg-12">
            <CustomPlayer />
            <SearchBar song={this.props.url} onUpdate={this.handleUpdateSearches.bind(this)} searches={this.state.searches} title={this.props.title} />
        </div>
      </div>
    );
  }
}

export default Player;
