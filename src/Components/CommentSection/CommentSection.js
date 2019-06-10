import React from 'react';
import styled from 'styled-components';

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments : this.props.comments
        }
    }

    
    render(){
       console.log(this.state.comments)
        return (
            <PostWrapper>{this.props.comments.map(comment =>          
                <div><p><span>{comment.username}</span>{comment.text}</p></div>
                )}</PostWrapper>
        )
    }

}

export default CommentSection;

const PostWrapper = styled.div`
span {
  font-weight: bold;
  font-family: 'Mandali', sans-serif;
}

p {
    margin: 5px 0;
}
`