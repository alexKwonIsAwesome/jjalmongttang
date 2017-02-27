import React from 'react';
import magnifyingGlass from '../../public/magnifying-glass.svg';

const SearchBar = () => (
  <form>
    <input className="search-bar grid-50" placeholder="원하는 짤을 찾아보세요!" />
    <img alt="magnifying glass for search" src={magnifyingGlass}/>
  </form>
)

export default SearchBar;
