import React from 'react';
import SearchBarContainer from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    this.setState({ postData: dummyData });
  }


  render() {

    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer data={this.state.postData} />
      </div>
    );
  }
}




export default App;




