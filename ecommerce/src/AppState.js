import React, { Component } from 'react';
import propcomponent from './components/propcomponent';

export default class App extends Component {
  state = {
    tname: "aleem",
    subject: "FullStackDevelopment",
    color:"blue",
    section: "section d"
  };

  render() {
    return (
      <div>
        <propComponent section={this.state.section} /> {/* Capitalized PropComponent */}
        I am {this.state.tname}, subject: {this.state.subject}, section: {this.state.section}
      </div>
    );
  }
}
