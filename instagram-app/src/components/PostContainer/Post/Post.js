import React from 'react';
import Comments from '../../CommentSection/CommentSection.js';
import styled from 'styled-components';



function Post (props) {
    return <PostWrapper className='post'>
           <div className='header'>
            <img src={props.data.thumbnailUrl} className='thumbnail' alt=''/>
            <span className='username'>{props.data.username}</span>
           </div> 
           <div className='content'>
               <img src={props.data.imageUrl} alt='' className='image-post'></img>
           </div>
           <div className='comments-section'>
           <Comments comments={props.data.comments} data={props.data}/>
           </div>
    </PostWrapper>
}


export default Post






//// Style - Component //////




const PostWrapper = styled.div`
  display: block;
  width: 614px;
  margin: 0 auto 60px auto;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 3px;

  .header {
  display: flex;
  align-items: center;
  height: 28px;
  padding: 16px;

  img {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 16px;
}
}

span.username {
  font-weight: bold;
  margin-right: 10px;
  font-family: 'Mandali', sans-serif;
}

.content img {
  max-width: 100%;
}

.comments-container {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  font-family: 'Mandali', sans-serif;
}

span{
  line-height: 1.7;
}

.icons-container img {
  margin:5px 20px 5px 0;
  width: 20px;
  height: 20px;
}

.comm-input{
  border: #ffffff;
  margin: 20px 0;
  height: 30px;
  width: 100%;
}
`