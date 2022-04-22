import React from 'react';


function Comment({comment}) {
  if(!comment.body) return null;    

  return (
    <div className="Comment">
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
