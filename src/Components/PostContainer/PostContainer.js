import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import styled from 'styled-components';


class PostContainer extends React.Component{


    render(){
     
        return <div>{this.props.data.map(data =>

            <PostWrapper key={data.username}>
            <div className='header'><img src={data.thumbnailUrl} alt='thumbnailurl'/><p className='username'>{data.username}</p></div>
            <div className='content'><img src={data.imageUrl} alt='imageurl'/></div>


            <section className='comments-container'>
            <div className='icons-container'>
            <img src='https://i.postimg.cc/mDvYdV1M/heart.png' alt='heart' onClick={this.giveLike}/>
            <img src='https://i.postimg.cc/pLf6Kh7q/chat.png' alt='chat'/> <p className='likes'>{data.likes} Likes</p> </div>
            <div><CommentSection comments={data.comments} key={data.timestamp} date={data.timestamp}/></div>

            <div className='bar'></div>

            </section>


            </PostWrapper>

            )}</div>
    }
}

export default PostContainer;










/// Styled Component ////







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

span.username, .username {
  font-weight: bold;
  font-family: 'Mandali', sans-serif;
}

.content img {
  width: 100%;
  height:500px;
}

.comments-container {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  font-family: 'Mandali', sans-serif;
  text-align:left;
}

.icons-container img {
  margin:5px 20px 5px 0;
  width: 20px;
  height: 20px;
}

.comm-input{
  border: #ffffff;
  margin: 10px 0;
  height: 30px;
  width: 100%;
  padding: 5px;

}

.stamp {
    margin: 0px;
}

.likes {
    margin:5px 0;
}

.bar {
    padding:5px;
    width:100%;
    border-bottom: 1px solid #e0e0e0;
}
`