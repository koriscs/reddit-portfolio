import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {manageCategories, manageSearchTerm} from '../features/postSlice';
import loadingImg from '../img/Spinner-white.gif';
import {isLoading} from '../features/postSlice';
import PostMain from '../components/PostMain';
import { NavLink, Routes, Route } from 'react-router-dom';

function Selections() {

  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  // handles when Best button is clicked
	const handleSelection = (e) => {
    dispatch(manageCategories(e.target.value));
    dispatch(manageSearchTerm(''));
	};
 


   return (
      <div className='Selection-container'>
      <div className="Selections">
      <NavLink  to="/">
       <button  className='Best' value='best' onClick={handleSelection}></button>
       </NavLink>
      <NavLink  to="/hot" >
       <button  className='Hot' value='top' onClick={handleSelection}></button>
       </NavLink>
      <NavLink  to="/new" >
       <button   className='New' value='new' onClick={handleSelection}></button>
       </NavLink>
      </div>
        {loading && <div className='Loading-main' ><img src={loadingImg} alt='loading' className='Main-loading' /></div>}
     
      <Routes>
        <Route path='*' element={<PostMain />} />
        <Route path='hot' element={<PostMain />} />
        <Route path='new'  element={<PostMain />}/>
      </Routes>
      </div>
  );
}

export default Selections;
