//import { applyMiddleware } from '@reduxjs/toolkit';
import React from 'react';
import logo from '../img/reddit-logo.png';

 function Post({props}) {
  function truncateText (text, limit) {
    const shortened = text.indexOf(' ', limit);
    if(shortened === -1 ) return text;
    return text.substring(0, shortened);
  }

    const {title, selftext, media, preview, url, author} = props;


   
  let currentTime = Date.now() / 1000;
	let elapsedTimeHour = (currentTime - props.created_utc) / 60 / 60;
	let timePassed;

	if (elapsedTimeHour < 24) {
		timePassed = Math.floor(elapsedTimeHour) + 'h ago';
	} else {
		timePassed = Math.floor(elapsedTimeHour / 24) + 'd ago';
	}
  let source = '';

  if (media) {
    if(media.reddit_video) {
      source = '';
    } else {
      source = url;
    }
  } else if (preview) {
    source = preview.images[0].source.url.replaceAll('&amp;', '&');
  } else {
    source = url;
  }
  const addDefaultImg = (event) => {
    if(!props.thumbnail.includes("https")) {
    event.target.src = logo;
  } else {
    event.target.src = props.thumbnail;
  }
}
  return (
    <div className="Post">
      <div className='Post-header' >
        <p>{author}</p>
        <p>{props.subreddit_name_prefixed}</p>
        <p>{timePassed}</p>
        </div>
        {source ? <img src={source} onError={addDefaultImg} alt='post-related' /> : <video autoPlay muted controls src={media.reddit_video.fallback_url.replaceAll('&amp;', '&')} />}
        <h2>{truncateText(title, 100)}</h2>
        <p>{truncateText(selftext,500)}</p>
        <a href={url} target="_blank" >Link</a>
      <div className='Post-footer' >
        <p>{props.num_comments}</p>
        <div className='Post-footer-votes'>
          <p>{props.ups}-</p>
          <p>{props.downs}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;