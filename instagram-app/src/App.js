import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'
import withAuthenticate from '../src/authentification/withAuthenticate'



class App extends React.Component {

  render() {

    return (
      <div className="App">
        <PostPage/>
      </div>
    );
  }
}




export default App;




