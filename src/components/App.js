import _ from 'lodash';
import React from 'react';
import Start from './Start';
import Header from './Header';
import SearchBar from './SearchBar';
import Player from './Player';
import initSoundCloud from '../config/SC';
import Genius from '../config/Genius'
import $ from 'jquery';
import SoundCloudAudio from 'soundcloud-audio';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { soundPlayerContainer } from 'react-soundplayer/addons';




const scPlayer = new SoundCloudAudio('7fa0472ee03857f6fc1f3f580711b4de');
/*
scPlayer.resolve('https://soundcloud.com/djangodjango', function (track) {
    // do smth with track object
    // e.g. display data in a view etc.
    console.log(track);
});
*/


export default class App extends React.Component {
	constructor(props) {
		super(props);
    initSoundCloud()

		this.state = {
			url: 'https://soundcloud.com/jamesblakeofficial',
			title: 'James Blake - Timeless',
			artist: 'jamesblakeofficial',
			active: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({active: !this.state.active });
	}
	render(){
		return (
			<div className="container">
			  <Header />
				 { this.renderPlayer() }
			</div>
		);
	}
	renderPlayer(){
		if (this.state.active){
			return (
				<Player url={this.state.url} title={this.state.title} />
			);
		} else {
			return (
				<div onClick={this.handleClick}>
				  <Start />
				</div>
			);
		}
	}
}
