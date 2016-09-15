import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import Player from './containers/PlayerContainer';
import Footer from './components/Footer/Footer';
import initSoundCloud from './config/SC';

class App extends React.Component {
  constructor(props) {
	  super(props);

    this.state = {
      searches: [],
      artist: null
    };
	}
  componentWillMount(){
    initSoundCloud()
  }
	render(){
	  return (
			<div className="container">
			  <Header />
				<Player />
				<Footer />
			</div>
		);
	}
}


render(<App />, document.getElementById('app'));
