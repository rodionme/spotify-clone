import React, { Component } from 'react';
import './style.css';
import Item from '../ContextMenuItem';

export default class ContextMenu extends Component {
  render() {
    return (
      <div className="context-menu" style={{ top: 0, left: '200px' }}>
        <ul className="context-menu__list">{this.props.items.map(item => <Item key={item.id} item={item} />)}</ul>
      </div>
    );
  }
}
