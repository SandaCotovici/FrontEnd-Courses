//console.log("Hello world!");
import React from "react";
import {render} from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello ReactJS</h2>
        <p>First time working with React?</p>
        <h4>No problem, you aren't the only one</h4>
      </div>
    )
  }
}

render(<App/>, window.document.getElementById('app'));
