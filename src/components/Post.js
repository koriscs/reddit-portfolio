//import { applyMiddleware } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import commentImg from '../img/comments.png';
import { useSelector, useDispatch } from 'react-redux';
import { loadCommentsByPost, isLoading} from '../features/commentsSlice';
import Comments from './Comments';
import { created,} from '../utils/utils';
import Media from './Media';
import Loading from '../img/Loading-bar.gif';

 function Post({props}) {
  const {author} = props;
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments[props.permalink] ? state.comments.comments[props.permalink]: null)
  const loading = useSelector(isLoading);
  const [showComments, setShowComments] = useState();

  const handleLoadComments = () => {
    setShowComments(!showComments);
    if (!comments)  
    dispatch(loadCommentsByPost(props.permalink));
}
  return (
    <div className="Post">
      <div className='Post-header' >
        <p>{author}</p>
        <p>{props.subreddit_name_prefixed}</p>
        <p>{created(props.created_utc)}</p>
      </div>
      <Media post={props} />
      <div className='Post-footer' >
        <div className='Post-footer-votes'>
          <p>{props.ups}-</p>
          <p>{props.downs}</p>
        </div>
        <div className='Post-footer-comments' onClick={handleLoadComments} >
          <img className='Comments-image' src={commentImg} alt='comment bubble' />
          <p>{props.num_comments}</p>
        </div>
        {(showComments && !comments) && <img src={Loading} alt='loading' className='Comment-loading' />}
      </div>
        <Comments comments={comments} showComments={showComments} />
    </div>
  );
}

export default Post;