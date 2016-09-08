import React from 'react';
import SearchItem from './SearchItem'

const RecentSearches = (props) => {
  const searchItems = props.searches.map( (name, index) => {
    return (
      <SearchItem
        key={index}
        search={name} />
    );
  });


    return (
      <div>
        <div className="col-lg-12 text-center player">
          <strong>Recent Searches: </strong>
          <br />
          {searchItems}
        </div>
      </div>
    );
}

export default RecentSearches
