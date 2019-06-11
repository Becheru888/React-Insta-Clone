import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments : this.props.comments,
        }
    }

    
    render(){
      
        return (
            <PostWrapper>
            {this.props.comments.map(comment => <div key={Math.floor(Math.random() * 99999)}><p><span>{comment.username}</span>{comment.text}</p></div>)}
            <div><Moment  className='stamp' fromNow>{this.props.date}</Moment ></div>
            <form>
            <div><input type='text' placeholder='Add comment...' className='comm-input'/></div>
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