import { applyMiddleware } from '@reduxjs/toolkit';
import React from 'react';


 function Post({props}) {
  function truncateText (text, limit) {
    const shortened = text.indexOf(' ', limit);
    if(shortened == -1 ) return text;
    return text.substring(0, shortened);
  }

    let {title, selftext, thumbnail, media, preview} = props;

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
    
    if(preview) {
      preview = preview.images[0].source.url;
      console.log(preview);
    }

  return (
    <div className="Post">
        <h2>{truncateText(title, 100)}</h2>
        <p>{truncateText(selftext,500)}</p>
        {videoUrl ? <video autoPlay controls muted src={videoUrl} />: ""}
        {picture ? <img src={picture}  /> : ""}
        <img src={preview && preview.replace('&amp;', '&')} />
    </div>
  );
}

export default Post;