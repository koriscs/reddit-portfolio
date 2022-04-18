import React from 'react';


 function Post({props}) {
  function truncateText (text, limit) {
    const shortened = text.indexOf(' ', limit);
    if(shortened == -1 ) return text;
    return text.substring(0, shortened);
  }

    const {title, selftext, thumbnail, media} = props;

    let videoUrl='';
    if(media) {
      if (media.reddit_video) {
        videoUrl = media.reddit_video.fallback_url;
      }
    } 
    let picture ='';
    if(thumbnail.includes('https') && !videoUrl) {
      picture = thumbnail;
    }


  return (
    <div className="Post">
        <h2>{truncateText(title, 100)}</h2>
        <p>{truncateText(selftext,500)}</p>
        {videoUrl ? <video autoPlay controls muted src={videoUrl} />: ""}
        {picture ? <img src={picture}  /> : ""}
    </div>
  );
}

export default Post;