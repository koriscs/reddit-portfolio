import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {manageCategories, manageSearchTerm} from '../features/postSlice';
import activeBestImg from '../img/bestActive.png';
import activeHotImg from '../img/hotActive.png';
import activeNewImg from '../img/newActive.png';
import inactiveBestImg from '../img/bestInactive.png';
import inactiveHotImg from '../img/hotInactive.png';
import inactiveNewImg from  '../img/newInactive.png';
import loadingImg from '../img/Spinner-white.gif';
import {isLoading} from '../features/postSlice';

function Selections() {

  const [categories, setCategories] = useState('');
  const [bestImgState, SetBestImgState] = useState(activeBestImg);
	const [hotImgState, SetHotImgState] = useState(inactiveHotImg);
	const [newImgState, SetNewImgState] = useState(inactiveNewImg);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

 
  
  // handles when Best button is clicked
	const handleBestButtonClick = (e) => {
		SetBestImgState(activeBestImg);
		SetHotImgState(inactiveHotImg);
		SetNewImgState(inactiveNewImg);
    setCategories(e.target.value);
    dispatch(manageSearchTerm(''));
    dispatch(manageCategories(e.target.value));
	};

	// handles when Hot button is clicked
	const handleHotButtonClick = (e) => {
		SetBestImgState(inactiveBestImg);
		SetHotImgState(activeHotImg);
		SetNewImgState(inactiveNewImg);
    setCategories(e.target.value);
    dispatch(manageSearchTerm(''));
    dispatch(manageCategories(e.target.value));
	};

	// handles when New button is click
	const handleNewButtonClick = (e) => {
		SetBestImgState(inactiveBestImg);
		SetHotImgState(inactiveHotImg);
		SetNewImgState(activeNewImg);
    setCategories(e.target.value);
    dispatch(manageSearchTerm(''));
    dispatch(manageCategories(e.target.value));
	};
   return (
     <div className='Selection-container'>
    <div className="Selections">
       <input type="image" src={bestImgState}  alt="best" className='Best' value='best' onClick={handleBestButtonClick} />
       <input type="image" src={hotImgState} alt="hot" className='Hot' value='top' onClick={handleHotButtonClick} />
       <input type="image" src={newImgState} alt="new" className='New' value='new' onClick={handleNewButtonClick} />
     </div>
     {loading && <div className='Loading-main' ><img src={loadingImg} alt='loading' className='Main-loading' /></div>}
     </div>
  );
}

export default Selections;
