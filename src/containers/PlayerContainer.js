import React from 'react';
import SearchBar from '../components/SearchBar'
import CustomPlayer from '../components/SoundCloud';
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
  componentWillMount(){
    console.log('from cwm');
  }
  componentDidMount(){
    console.log('from cdm');
  }
  render(){
    return (
      <div>
        <div className="col-lg-12">
            <CustomPlayer />
        </div>
      </div>
    );
  }
}

// // <SearchBar song={this.props.url} onUpdate={this.handleUpdateSearches.bind(this)} searches={this.state.searches} title={this.props.title} />

export default Player;
