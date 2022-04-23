import React from 'react';
import {decode, getVideoURL} from '../utils/utils';

function Media({post}) {

    return (
        <div className='Post-media'>

            {//Post content link 
                post.post_hint !=='link' && 
                !post.is_self && 
                !post.domain.includes('redd.it') &&
        <div>
            <a 
            className="content-link" 
            href={post.url} 
            target="_blank" 
            rel="noreferrer" 
            >
                See post content
            </a>
            <br></br>
            </div>
            }

                        {//Post Image
                            post.post_hint === 'image' &&      
                            post.preview && 
                            !post.preview.reddit_video_preview &&
                            <img 
                                className="img" 
                                src={post.url} 
                                alt=""
                            />
                        }

                        {//Post Text
                            post.selftext.length > 0 && 
                        
                            <div 
                                className='selfText'
                                dangerouslySetInnerHTML={{__html: decode(post.selftext_html) }}
                            >
                            </div>
                        }

                        {//Post link
                            post.post_hint === 'link' &&
                            <div className='link-container'>
                                <a 
                                    className="content-link"
                                    href={post.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >Link to the article!
                                            </a>
                            </div>
                        }

                        {//Post Video
                            post.is_video &&
                            post.media &&
                            (
                                <div className="video-container"
                                    style={{'--aspect-ratio':'3/4'}}>
                                    <video
                                        className="video"
                                        src={post.media.reddit_video.fallback_url}
                                        controls
                                        autoPlay
                                        loop
                                        playsInline
                                    ></video><br/>
                                    <a href={post.url}>See Video</a>
                                </div>
                            )}
                        
                        {//Gif content
                            !post.media_embed.content &&
                            post.preview && 
                            post.preview.reddit_video_preview &&
                            post.preview.reddit_video_preview.is_gif &&
                            (
                                <video
                                    className="img"
                                    src={post.preview.reddit_video_preview.fallback_url}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                ></video>
                        )}

                        {//Embedded media
                            !post.domain.includes('yout') &&
                            post.media_embed &&
                            post.media_embed.content &&
                            <div
                                className="img"
                                dangerouslySetInnerHTML={{__html: decode(post.media_embed.content) }}
                            ></div>
                        }

                        {//Youtube video
                            post.domain.includes('yout') && 
                            <div className="youtube-container" >
                                <iframe
                                    src={getVideoURL(post.url)}
                                    title="youtube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    load="lazy"
                                    playsInline
                                ></iframe>
                            </div>
                        }
                    </div>
    )

}
export default Media;