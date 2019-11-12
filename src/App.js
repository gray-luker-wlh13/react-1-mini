import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture = (value) => {
    this.setState({
      picture: value
    });
  }

  updateName = (value) => {
    this.setState({
      name: value
    });
  }

  addFriend = () => {
    const {friends, picture, name} = this.state;

    let newFriends = friends.slice();
    newFriends.push({picture, name})

    this.setState({
      friends: newFriends,
      picture: '',
      name: ''
    })
  }

  render(){
    const friends = this.state.friends.map((element, index) => {
      return (
        <div key={index}>
         <img width="100px" src={element.picture} alt="My Friends"/>
         <span>{element.name}</span>
        </div>
      )
    })
    return(
      <div className="App">
        <span>Picture:</span>
        <input 
          value={this.state.picture}
          onChange={(e) => this.updatePicture(e.target.value)}/>
        <span>Name:</span>
        <input 
          value={this.state.name}
          onChange={(e) => this.updateName(e.target.value)}/>
        <button onClick={this.addFriend}>Add Friend</button>
        {friends}
      </div>
   )
  }
}

export default App;
