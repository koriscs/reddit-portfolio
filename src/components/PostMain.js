import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { isLoading, loadPosts, selectCategories, selectData, selectSearchTerm } from "../features/postSlice";
import Post from './Post';


function PostMain() {
 const loading = useSelector(isLoading);
 const dispatch = useDispatch();
 const [commentNumber, setCommentNumber] = useState(5);

 const posts = useSelector(selectData); 
 const searchTerm = useSelector(selectSearchTerm);
 const categories = useSelector(selectCategories);

  useEffect( () => {
    dispatch(loadPosts({searchTerm, categories}))
  },[dispatch,searchTerm,categories])

  const morePosts = () => {
    if(commentNumber >= 25) return;
    setCommentNumber(commentNumber => commentNumber+=5 );
    console.log(commentNumber);
  }
  const lessPosts = () => {
    if(commentNumber <= 5) return;
    setCommentNumber(commentNumber => commentNumber-=5 )
    console.log(commentNumber);
  }
  
  return (
    <div className="PostMain">
      
      {loading || posts.slice(0,commentNumber).map((post, index) => {
        return <Post props={post} key={index} />
      })}
      <button className='More-posts' onClick={morePosts} >+</button>
      <button className='Less-posts' onClick={lessPosts} >-</button>
    </div>
    
  );
}




export default PostMain;
