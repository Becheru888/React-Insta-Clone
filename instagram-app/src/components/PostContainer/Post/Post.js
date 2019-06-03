import React from 'react';
import Comments from '../../CommentSection/CommentSection.js';




function Post (props) {
    return <div className='post'>
           <div className='header'>
            <img src={props.data.thumbnailUrl} className='thumbnail' alt=''/>
            <span className='username'>{props.data.username}</span>
           </div> 
           <div className='content'>
               <img src={props.data.imageUrl} alt='' className='image-post'></img>
           </div>
           <div className='comments-section'>
           <Comments comments={props.data.comments}/>
           </div>
    </div>
}


export default Post