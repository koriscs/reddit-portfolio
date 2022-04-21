import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { loadPosts, selectCategories, selectData, selectSearchTerm, selectState } from "../features/postSlice";
import Post from './Post';



function PostMain() {

 const dispatch = useDispatch();

 const posts = useSelector(selectData); 
 const searchTerm = useSelector(selectSearchTerm);
 const categories = useSelector(selectCategories);

  useEffect( () => {
    dispatch(loadPosts({searchTerm, categories}))
  },[dispatch,searchTerm,categories])

  return (
    <div className="PostMain">
      {posts.map((post, index) => {
        return <Post props={post} key={index} />
      })}
    </div>
  );
}




export default PostMain;
