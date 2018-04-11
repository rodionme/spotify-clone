import React, { Component } from 'react';
import './style.css';
import Buttons from '../demo/buttons';
import ComplexLists from '../demo/complex-lists';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Buttons />
        <ComplexLists />
      </React.Fragment>
    );
  }
}
