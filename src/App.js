import React from 'react';
import './App.css';
import PostPage from './Components/PostContainer/PostsPage';
import Login from './Components/Login/Login'
import withAuthentication from './Authentication/withAuthentication'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={};
  }


  render(){
  return (
    <div className="App">
      <Component/>
    </div>
  );
  }
}

const Component = withAuthentication(PostPage)(Login)

export default App;

