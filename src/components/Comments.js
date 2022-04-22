import React from 'react';
import Comment from './Comment';

function Comments({comments, commentsVisibility}) {
if(!comments || !commentsVisibility) {
    return null;
}
  return (
    <div className="Comments">
        {comments.map((comment, index) => <Comment comment={comment} key={index}/>)}
    </div>
  );
}

export default Comments;
