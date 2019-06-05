import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'
import withAuthenticate from '../src/authentification/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <ComponentFromWithAuthenticate/>
      </div>
    );
  }
}




export default App;




