import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";


class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      likes:this.props.data.likes,
      newComment: "",
      data:this.props.data,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.giveLike = this.giveLike.bind(this);
  }


  changeHandler = e => {
    this.setState({ newComment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: this.state.comments.concat({
        id: uuid(),
        username: "Remi",
        text: this.state.newComment
      }),
      newComment: ""
    });
  };


  giveLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  }

  render() {
    return (
      <div className='comments-container'>
        <span className='icons-container'>
          <img src='https://i.postimg.cc/mDvYdV1M/heart.png' alt='heart' onClick={this.giveLike}/>
          <img src='https://i.postimg.cc/pLf6Kh7q/chat.png' alt='chat'/>
        </span>
        <span>{this.state.likes} Likes</span>
        {this.state.comments.map(comment => (
          <span key={comment.id}>
            <span className="username">{comment.username}</span>
            {comment.text}
          </span>
        ))}
        <form className="add-comment" onSubmit={this.addNewComment}>
          <input
            placeholder="Add a comment..."
            className='comm-input'
            onChange={this.changeHandler}
            value={this.state.newComment}
          />
        </form>
      </div>
    );
  }
}

export default Comments;

