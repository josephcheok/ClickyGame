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

  handleClick = itemNo => {
    console.log(itemNo);
    let doubleClicked = false;

    //a state snapshot to minimize state updates
    // let update = {
    //   superbats: [...this.state.superbats],
    //   score: this.state.score,
    //   topScore: this.state.topScore
    // };

    //click updates
    // update.superbats.forEach(superbat => {
    //   if (superbat.id === itemNo) {
    //     if (superbat.clicked) {
    //       doubleClicked = true;
    //     } else {
    //       superbat.clicked = true;
    //       update.score++;
    //       if (update.score > update.topScore) {
    //         update.topScore = update.Score;
    //       }
    //     }
    //   }
    // });

    this.setState({
      items: superbats.forEach(superbat => {
        if (superbat.id === itemNo) {
          if (superbat.clicked) {
            doubleClicked = true;
          } else {
            superbat.clicked = true;
            this.setState({ score: this.state.score + 1 });
          }
        }
      })
    });

    this.setState({ items: shuffle(superbats) });
    console.log("Score: " + this.state.score);
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
