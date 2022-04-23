import React from 'react';
import Comment from './Comment';

function Comments({comments, showComments}) {
if(!comments || !showComments) {
    return null;
}
  return (

    <div className="Comments">
      <h4>Top Comments</h4>
        {comments.map((comment, index) => <Comment comment={comment} key={index}/>)}
    </div>
  );
}

export default Comments;
