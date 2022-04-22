import React from 'react';
import logo from '../img/reddit-logo.png';
import { truncateText} from '../utils/utils';

function Media({props}) {
    const {title, selftext, media, preview, url} = props;
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
    <div className='Post-media' >
        {source ? <img className='Content-image' src={source} onError={addDefaultImg} alt='post-related' /> : <video className='Content-video' autoPlay muted controls src={media.reddit_video.fallback_url.replaceAll('&amp;', '&')} />}
        <h2>{truncateText(title, 100)}</h2>
        <p>{truncateText(selftext,500)}</p>
        <a href={url} target="_blank" >Link</a>
    </div>
  )
}

export default Media