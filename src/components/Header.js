import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  };
  render(){
    return (
      <div>
        <div className="col-lg-12">
          <div className="well">
            <h1 className="text-center page-header">SoundCloud API</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
