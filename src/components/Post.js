//import { applyMiddleware } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import commentImg from '../img/comments.png';
import { useSelector, useDispatch } from 'react-redux';
import { loadCommentsByPost,} from '../features/commentsSlice';
import Comments from './Comments';
import { created,} from '../utils/utils';
import Media from './Media';
import Loading from '../img/Loading-bar.gif';
import upVote from '../img/upvote.png';
import downVote from '../img/downvote.png';



 function Post({props}) {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments[props.permalink] ? state.comments.comments[props.permalink]: null)
  const [showComments, setShowComments] = useState();

  const handleLoadComments = () => {
    setShowComments(!showComments);
    if (!comments)  
    dispatch(loadCommentsByPost(props.permalink));
}
  return (
    <div className="Post">npm 
      <div className='Post-header' >
        <p>Subbreddit: {props.subreddit_name_prefixed}</p>
        <p>{created(props.created_utc)}</p>
      </div>
      <Media post={props} />
      <div className='Post-footer-container' >
        <div className='Post-footer' >
        <div className='Post-footer-votes'>
          <img src={upVote} alt="upvote" />
          <p style={{color: "green"}} > {props.ups} -</p>
          <img src={downVote} alt='downvote' />
          <p style={{color: "red"}} > {props.downs}</p>
        </div>
        <div className='Post-footer-comments' onClick={handleLoadComments} >
          <input type="image" className='Comments-image' src={commentImg} alt='comment bubble' />
          <p>{props.num_comments}</p>
        </div>
      </div>
        {(showComments && !comments) && <div className='Loading-container' ><img src={Loading} alt='loading' className='Comment-loading' /></div>}
      </div>
        <Comments comments={comments} showComments={showComments} />
    </div>
  );
}

export default Post;