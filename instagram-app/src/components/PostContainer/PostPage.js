import React from 'react';
import dummyData from '../../dummy-data';
import SearchBarContainer from '../../components/SearchBar/SearchBar';
import PostContainer from './PostContainer'

export default class PostPage extends React.Component{
    constructor() {
        super();
        this.state = {
          postData: [],
        };
      }
    
      componentDidMount() {
        this.setState({ postData: dummyData });
      }

      render(){
          return(
            <div className="App">
            <SearchBarContainer />
            <PostContainer data={this.state.postData} />
          </div>
          )
      }

}