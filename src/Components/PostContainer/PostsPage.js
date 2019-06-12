import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer'
import dummyData from '../../dummy-data'

class PostPage extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        data : [],
      };
    }
  
  componentDidMount(){
    this.setState({data: dummyData})
  }
  
  
    render(){
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data}/>
      </div>
    );
    }
  }

export default PostPage