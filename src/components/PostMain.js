import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { isLoading, loadPosts, selectCategories, selectData, selectSearchTerm, selectState } from "../features/postSlice";
import Post from './Post';
import loadingImg from '../img/Loading-bar.gif';


function PostMain() {
 const loading = useSelector(isLoading);
 const dispatch = useDispatch();

 const posts = useSelector(selectData); 
 const searchTerm = useSelector(selectSearchTerm);
 const categories = useSelector(selectCategories);

  useEffect( () => {
    dispatch(loadPosts({searchTerm, categories}))
  },[dispatch,searchTerm,categories])

  return (
    <div className="PostMain">
      {loading && <img src={loadingImg} alt='loading' className='Main-loading' />}
      {loading || posts.map((post, index) => {
        return <Post props={post} key={index} />
      })}
    </div>
  );
}




export default PostMain;
