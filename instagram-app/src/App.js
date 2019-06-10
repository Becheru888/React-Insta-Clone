import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'
import Login from './components/Login/Login'
import withAuthenticate from '../src/authentification/withAuthenticate'



class App extends React.Component {
  constructor(){
    super();
    this.state ={

    }
  }
  render() {

    return (
      <div className="App">
        <ComponentFromWithAuthenticate/>
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);


export default App;




