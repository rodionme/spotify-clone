import React, { Component } from 'react';
import './style.css';
import Buttons from '../demo/buttons';
import ComplexLists from '../demo/complex-lists';
import ContextMenus from '../demo/context-menus';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<Buttons />*/}
        {/*<ComplexLists />*/}
        <ContextMenus />
      </React.Fragment>
    );
  }
}
