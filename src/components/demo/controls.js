import React, { Component } from 'react';
import Control from '../Control';

export default class Controls extends Component {
  render() {
    let items = [
      {
        id: 1,
        title: 'Artist',
      },
      {
        id: 2,
        title: 'Title',
      },
      {
        id: 3,
        title: 'Recently added',
      },
    ];

    return (
      <React.Fragment>
        <Control type="checkbox" label="Saved Albums Only" labelSize="big" />
        <br />
        <Control type="checkbox" label="Show friend feed" checked />
        <br />
        <Control type="select" label="Sorted by" labelSize="big" items={items} />
      </React.Fragment>
    );
  }
}
