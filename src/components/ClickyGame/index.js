import React from "react";
import "./ClickyGame.css";
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

class ClickyGame extends React.Component {
  state = {
    superbats
  };

  handleClick = itemNo => {
    console.log(itemNo);
    this.setState({ items: shuffle(this.state.superbats) });
  };

  render() {
    const { superbats } = this.state;

    return (
      <div className="clicky-container">
        {superbats.map(n => (
          <div
            key={n.id}
            className="clicky-target"
            onClick={() => this.handleClick(n.id)}
          >
            <img src={n.image} width={180} height={180} alt={n.actor} />
          </div>
        ))}
      </div>
    );
  }
}

export default ClickyGame;
