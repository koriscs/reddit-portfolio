import React from 'react';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="Header">
        <div className='logo'></div>
        <div className='title'></div>
        <SearchBar />
    </div>
  );
}

export default Header;
