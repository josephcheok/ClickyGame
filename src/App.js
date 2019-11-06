import React from "react";
import "./App.css";
import Card from "./components/Card";
import superbats from "./superbats.json";

function shuffle(array) {
  // Make a shuffled copy of an array using Fisher-Yates

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle, auto decrement index by 1 before comparing...
  while (--currentIndex > 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends React.Component {
  state = {
    superbats,
    score: 0,
    topScore: 0
  };

  handleClick = id => {
    console.log(id);
    let doubleClicked = false;

    this.state.superbats.forEach(superbat => {
      if (superbat.id === id) {
        if (superbat.clicked) {
          doubleClicked = true;
        } else {
          superbat.clicked = true;
          this.setState(
            (prevState, props) => ({ score: prevState.score + 1 }),
            () => {
              if (this.state.score > this.state.topScore) {
                let ultScore = this.state.score;
                this.setState(
                  (prevState, props) => ({ topScore: ultScore }),
                  () => {
                    console.log("TopScore: " + this.state.topScore);
                  }
                );
              }
              console.log("Score: " + this.state.score);
            }
          );
        }
      }
    });

    this.setState({ items: shuffle(superbats) });

    console.log("TopScore: " + this.state.topScore);
    console.log("DoubleClicked: " + doubleClicked);
  };

  render() {
    const { superbats } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Card arrayName={superbats} handleClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
