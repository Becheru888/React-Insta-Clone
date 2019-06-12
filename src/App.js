import React from 'react';
import './App.css';
import PostPage from './Components/PostContainer/PostsPage'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      
    };
  }




  render(){
  return (
    <div className="App">
      <PostPage/>
    </div>
  );
  }
}

export default App;

