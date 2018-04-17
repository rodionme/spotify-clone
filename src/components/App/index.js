import React, { Component } from 'react';
import './style.css';
import Buttons from '../demo/buttons';
import ComplexLists from '../demo/complex-lists';
import ContextMenus from '../demo/context-menus';
import Controls from '../demo/controls';
import Filters from '../demo/filters';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<Buttons />*/}
        {/*<ComplexLists />*/}
        {/*<ContextMenus />*/}
        {/*<Controls />*/}
        <Filters />
      </React.Fragment>
    );
  }
}
