import React from 'react';
import headerStyle from './headerStyle';


const Header = (props) => {
    return (
      <div>
        <div className="col-lg-12">
          <div className="well">
            <h1 className="text-center page-header">SoundPlayer</h1>
            <hr />
            <p className="h4 text-center">Powered By The SounCloud API</p>
          </div>
        </div>
      </div>
    );
}

export default Header;
