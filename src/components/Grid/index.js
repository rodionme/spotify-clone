import React, { Component } from 'react';
import './style.css';
import PropType from 'prop-types';

export default class Grid extends Component {
  render() {
    return <div className={`grid grid--x${this.props.row}`}>{this.props.children}</div>;
  }
}

Grid.propTypes = {
  children: PropType.node,
  row: PropType.oneOf(['2', '3', '4', '6']),
};
