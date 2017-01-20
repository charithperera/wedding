import React, { Component } from 'react';
import Hero from './hero'
import './animate.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="container">
          <h2 className="fadeIn">Test</h2>
        </div>
      </div>
    );
  }
}
