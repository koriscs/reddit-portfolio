import React from 'react';


 function Post({props}) {
    console.log(props);
    const {title, selftext, thumbnail} = props;
  return (
    <div className="Post">
        <h1>{title}</h1>
        <p>{selftext}</p>
        <img src={thumbnail}/>
    </div>
  );
}

export default Post;