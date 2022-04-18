import React from 'react';
import SearchBar from './SearchBar';
import logo from "../img/reddit-logo.png";

function Header() {
  return (
    <div className="Header">
        <div className='logo'><img src={logo} alt='Reddit-logo' /></div>
        <div className='title'><h1>Redd<span>i</span>tMin</h1></div>
        <SearchBar />
    </div>
  );
}

export default Header;
