import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments : this.props.comments,
            newComment: '',
            likes: this.props.likes,
        }

        
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.giveLike = this.giveLike.bind(this)
    }

    

changeHandler = e => {
    this.setState({newComment: e.target.value})
}

addNewComment = e => {
    e.preventDefault();
    this.setState({
           comments: this.state.comments.concat({
           key : Math.floor(Math.random() * 99999),
           username: localStorage.getItem('user'),
           text:this.state.newComment
        }),
        newComment:''
    })
}

giveLike = () => {
   this.setState({likes: this.props.likes + 1})
}


    
    render(){
        return (
            <PostWrapper>
            <div className='icons-container'>
            <img src='https://i.postimg.cc/mDvYdV1M/heart.png' alt='heart' onClick={this.giveLike}/>
            <img src='https://i.postimg.cc/pLf6Kh7q/chat.png' alt='chat'/> <p className='likes'>{this.state.likes} Likes</p>
            </div>
            {this.state.comments.map(comment => <div key={Math.floor(Math.random() * 99999)}><p><span>{comment.username}</span>{comment.text}</p></div>)}
            <div><Moment  className='stamp' fromNow>{this.props.date}</Moment ></div>
            <div className='bar'></div>

            <form onSubmit={this.addNewComment}>
            <div>

                <input 

                type='text' 
                placeholder='Add comment...' 
                className='comm-input'
                onChange={this.changeHandler}
                value={this.state.newComment}
                />
                
                  
            </div>
            </form>   
            </PostWrapper>
        )
    }

}

export default CommentSection;









/// Styled component ////








const PostWrapper = styled.div`
span {
  font-weight: bold;
  font-family: 'Mandali', sans-serif;
  margin-right: 8px;
}

p {
    margin: 8px 0;
}
.icons-container img {
  margin:5px 20px 5px 0;
  width: 20px;
  height: 20px;
}
.bar {
    padding:5px;
    width:100%;
    border-bottom: 1px solid #e0e0e0;
}
`