import React from 'react';
import {created} from '../utils/utils';

function Comment({comment}) {
  if(!comment.body) return null;    

  return (
    <div className="Comment">
      <div className='Comment-header' >
      <h5>{comment.author}</h5>
      <p>{created(comment.created_utc)}</p>
      </div>
      <div className='Comment-body' >
      <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
