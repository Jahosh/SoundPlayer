import React from 'react';
import _ from 'lodash';
import Header from './Header/Header';
import Player from './Player';
import Footer from './Footer/Footer';
import initSoundCloud from '../config/SC';


class App extends React.Component {
  constructor(props) {
	  super(props);
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

export default App
