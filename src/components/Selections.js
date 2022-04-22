import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {manageCategories, manageSearchTerm} from '../features/postSlice';

function Selections() {

  const [categories, setCategories] = useState('');

  const dispatch = useDispatch();

  const handleCategories = (e) => {
    setCategories(e.target.value);
    dispatch(manageSearchTerm(''));
    dispatch(manageCategories(e.target.value));
  }
  return (
    <div className="Selections">
        <button className='Best' value='best' onClick={handleCategories} >Best</button>
        {/* <button className='Hot' value='hot' onClick={handleCategories} >Hot</button> */}
        <button className='Top' value='top' onClick={handleCategories} >Top</button>
        <button className='New' value='new' onClick={handleCategories} >New</button>
     </div>
  );
}

export default Selections;
