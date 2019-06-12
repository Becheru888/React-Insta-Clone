import React from 'react';
import './App.css';
import PostPage from './Components/PostContainer/PostsPage';
import Login from './Components/Login/Login'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      
    };
  }


  render(){
  return (
    <div className="App">
      <Login/>
    </div>
  );
  }
}

export default App;

