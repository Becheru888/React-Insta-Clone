import React from 'react';


function Comments (props) {
    return (
        <div className='comments-container'>
        <span className='icons-container'>
        <img src='https://i.postimg.cc/mDvYdV1M/heart.png'/>
        <img src='https://i.postimg.cc/pLf6Kh7q/chat.png'/>
        </span>
        {props.data.likes}
        {props.comments.map(comment => (
          <span key={comment.id}>
            <span className="username">
              {comment.username}
            </span>
            <span className='comment-line'>{comment.text}</span>
          </span>
        ))}
        <input placeholder="Add a comment..." className='comm-input'/>
      </div>
    )
}

export default Comments