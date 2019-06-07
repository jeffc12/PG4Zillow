import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Tile from "./tile.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h1>PhotoGallery 4 Zillow</h1>

        <Tile />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));