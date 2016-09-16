import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import PlayerContainer from './containers/PlayerContainer';
import Footer from './components/Footer/Footer';
import scConfig from './config/SC';
import styles from './styles/index.js';

class App extends React.Component {
  constructor(props) {
	  super(props);
	}
  componentWillMount(){
		scConfig()
  }
	render(){
	  return (
			<div className="container">
			  <Header />
				<PlayerContainer />
				<Footer />
			</div>
		);
	}
}


render(<App />, document.getElementById('app'));
