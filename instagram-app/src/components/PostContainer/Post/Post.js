import React from 'react';
import './Post.css'



function Post (props) {
    return <div className='post'>
           <div className='header'>
            <img src={props.data.thumbnailUrl} className='thumbnail'/>
            <span>{props.data.username}</span>
           </div> 
           <div className='content'>
               <img src={props.data.imageUrl} alt='' className='image-post'></img>
           </div>
    </div>
}


export default Post