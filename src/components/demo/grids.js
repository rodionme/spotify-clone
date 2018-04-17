import React, { Component } from 'react';
import Grid from '../Grid';

export default class Grids extends Component {
  exampleItems() {
    let items = [];

    for (let i = 1; i <= 12; i++) {
      items.push(
        <div key={i} className="grid__item" style={{ height: '50px', background: '#ccc' }}>
          {i}
        </div>,
      );
    }

    return items;
  }
  render() {
    return (
      <React.Fragment>
        <Grid row="6">{this.exampleItems()}</Grid>
        <br />
        <Grid row="4">{this.exampleItems()}</Grid>
        <br />
        <Grid row="3">{this.exampleItems()}</Grid>
        <br />
        <Grid row="2">{this.exampleItems()}</Grid>
      </React.Fragment>
    );
  }
}
