import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
    <input 
      className="pa3 tc ba br3 b--green bg-lightest-blue"
      type="seach"
      placeholder="Search for your friends here"
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;