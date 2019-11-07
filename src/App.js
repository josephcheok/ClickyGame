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
    superbats: shuffle(superbats),
    score: 0,
    topScore: 0
  };

  reset = () => {
    this.state.superbats.forEach(superbat => {
      superbat.clicked = false;
    });
    this.setState({ score: 0 });
  };

  handleClick = id => {
    console.log(id);
    let doubleClicked = false;
    let newScore = this.state.score + 1; //this doesn't alter state.score

    this.state.superbats.forEach(superbat => {
      if (superbat.id === id) {
        if (superbat.clicked) {
          doubleClicked = true;
          this.reset();
        } else {
          superbat.clicked = true;
          this.setState({ score: newScore });
          if (newScore > this.state.topScore) {
            this.setState({ topScore: newScore }); //intentionally altered so that topScore remains
          }
        }
      }
    });

    this.setState({
      superbats: shuffle(superbats)
    });

    console.log("Score: " + this.state.score);
    console.log("TopScore: " + this.state.topScore);
    console.log("DoubleClicked: " + doubleClicked);
    console.log("New State: " + JSON.stringify(superbats));
  };

  render() {
    const { superbats } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div>
            Score : {this.state.score} Top Score: {this.state.topScore}{" "}
          </div>
          <Card arrayName={superbats} handleClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
