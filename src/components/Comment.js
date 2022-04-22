import React from 'react';
import {created} from '../utils/utils';

function Comment({comment}) {
  if(!comment.body) return null;    

  return (
    <div className="Comment">
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>{created(comment.created_utc)}</p>
    </div>
  );
}

export default Comment;
