import React from 'react';
import SearchBarContainer from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData,
    };
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


// {
//   this.state.friends.map(friend => (
//     <Friend
//       key={friend.id}
//       friend={friend}
//       deleteFriend={this.deleteFriend}
//       markAsEnemy={this.markAsEnemy}
//       setFriendToBeEdited={this.setFriendToBeEdited}
//     />
//   ))
// }


