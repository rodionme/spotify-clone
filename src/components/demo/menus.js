import React, { Component } from 'react';
import Menu from '../Menu';

export default class Menus extends Component {
  render() {
    let items = [
      { label: 'Overview', link: '' },
      { label: 'Charts', link: '' },
      { label: 'Genres & Moods', link: '' },
      { label: 'New Releases', link: '' },
      { label: 'Discover', link: '' },
      { label: 'Concerts', link: '' },
    ];

    return <Menu items={items} />;
  }
}
