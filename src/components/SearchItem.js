import React from 'react';


const SearchItem = (props) => {
  console.log(props);
  return (
    <div>
      <button> {props.search} </button>
      <br />
    </div>
  );
}

export default SearchItem
