import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer'
import dummyData from '../../dummy-data'

class PostPage extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        data : [],
        filteredPosts : [],
      };
    }
  
  componentDidMount(){
    this.setState({data: dummyData})
  }

  filterPost = (event) => {
    const posts = this.state.data.filter(post => {
      if(post.username.includes(event.target.value)){
        return post
      }
    });
    this.setState({filteredPosts:posts})
  }
  
  
    render(){
    return (
      <div className="App">
        <SearchBar filterPost={this.filterPost}/>
        <PostContainer data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.data}/>
      </div>
    );
    }
  }

export default PostPage