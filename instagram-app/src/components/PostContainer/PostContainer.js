import React from 'react';
import Post from './Post/Post';



class PostContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className='postContainer'>
            {this.props.data.map(data => <Post key={data.id} data={data} comments={data.comments}/>)}   
        </div>
    }
}


export default PostContainer