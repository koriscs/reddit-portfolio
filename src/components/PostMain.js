import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { loadPosts, selectData } from "../features/postSlice";
import Post from './Post';



function PostMain() {

 const dispatch = useDispatch();

 const posts = useSelector(selectData); 

 function truncateText (text, limit) {
   const shortened = text.indexOf(' ', limit);
   if(shortened == -1 ) return text;
   return text.substring(0, shortened);
 }

  useEffect( () => {
    dispatch(loadPosts())
  },[dispatch])

  return (
    <div className="PostMain">
      {posts.map((post, index) => {
        return <Post props={post} key={index} />
      })}
    </div>
  );
}




export default PostMain;
