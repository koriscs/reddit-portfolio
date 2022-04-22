import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import {manageSearchTerm} from '../features/postSlice';

function SearchBar() {

  const [searchTerm, setSerachTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (!searchTerm) return;
    dispatch(manageSearchTerm(searchTerm));
    setSerachTerm('');
    
  }
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSearch();
  }
};



  return (
    <div className="SearchBar">
        <input value={searchTerm} onChange={(e)=>{setSerachTerm(e.target.value)}} onKeyDown={handleKeypress} type="text" name='searchBar' placeholder='Search...' />
    </div>
  );
}

export default SearchBar;
