//import { applyMiddleware } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import commentImg from '../img/comments.png';
import { useSelector, useDispatch } from 'react-redux';
import { loadCommentsByPost } from '../features/commentsSlice';
import Comments from './Comments';
import { created,} from '../utils/utils';
import Media from './Media';

 function Post({props}) {
  const {author} = props;
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments[props.permalink] ? state.comments.comments[props.permalink]: null)

  const handleLoadComments = () => {
    setShowComments(showComments => !showComments);
    if (!comments) dispatch(loadCommentsByPost(props.permalink));
}

  return (
    <div className="Post">
      <div className='Post-header' >
        <p>{author}</p>
        <p>{props.subreddit_name_prefixed}</p>
        <p>{created(props.created_utc)}</p>
      </div>
      <Media props={props} />
      <div className='Post-footer' >
        <div className='Post-footer-votes'>
          <p>{props.ups}-</p>
          <p>{props.downs}</p>
        </div>
        <div className='Post-footer-comments' onClick={handleLoadComments} >
          <img className='Comments-image' src={commentImg} alt='comment bubble' />
          <p>{props.num_comments}</p>
        </div>
      </div>
        <Comments comments={comments} showComments={showComments} />
    </div>
  );
}

export default Post;