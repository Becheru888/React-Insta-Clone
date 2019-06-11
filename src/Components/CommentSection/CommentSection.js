import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments : this.props.comments,
            newComment: '',
        }

        
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    }


changeHandler = e => {
    this.setState({newComment: e.target.value})
}

addNewComment = e => {
    e.preventDefault();
    this.setState({
          comments: this.state.comments.concat({
           key : Math.floor(Math.random() * 99999),
           username: 'Remi',
           text:this.state.newComment
        }),
        newComment:''
    })
}

    
    render(){
      
        return (
            <PostWrapper>
            {this.state.comments.map(comment => <div key={Math.floor(Math.random() * 99999)}><p><span>{comment.username}</span>{comment.text}</p></div>)}
            <div><Moment  className='stamp' fromNow>{this.props.date}</Moment ></div>

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
`