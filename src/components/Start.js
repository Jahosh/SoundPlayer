import React from 'react';
import Styles from '../styles/index';


class Start extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="col-lg-12 text-center">
        <h2>Song Finder</h2>
        <button style={Styles.startButton} className="btn btn-success text-center"> Start </button>
      </div>
    );
  }
}

export default Start;
