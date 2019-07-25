import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedId: [],
    message: "",
    count: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleClick = (id, name) => {
    //check to see if they have clicked this card. 
      let clickedIdCopy = this.state.clickedId;
      console.log(clickedIdCopy);
      if (clickedIdCopy.includes(id)){
        //If they have clicked, send message
        this.setState({ message: `You already clicked ${name}. You lose`});
        this.setState({ count: 0 })
        clickedIdCopy = [];
        this.setState({ clickedId : clickedIdCopy });
      } 
        //else add the id of the card to the clickedId array
      else {
        const newClicked = this.state.clickedId;
        newClicked.push(id);
        this.setState({ clickedId: newClicked});
        this.setState({ message: `You just clicked ${name}`});
        let newCount = this.state.count + 1;
        this.setState({count: newCount});
        const shuffledFriends = this.state.friends.sort(() => Math.random() - 0.5);
        this.setState({ shuffledFriends });
      }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <h1>{this.state.message}</h1>
        <h1>{this.state.count}</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  } 
}

export default App;
