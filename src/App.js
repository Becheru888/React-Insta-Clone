import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer'
import dummyData from './dummy-data'

class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <SearchBar/>
      <PostContainer data={dummyData}/>
    </div>
  );
  }
}

export default App;

