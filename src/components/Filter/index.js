import React, { Component } from 'react';
import './style.css';
import Icon from '../Icon';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <input className="filter__input" type="text" placeholder="Filter" />

        <div className="filter__icon">
          <Icon icon="search" />
        </div>

        <button className="filter__button" type="button">
          <div className="filter__icon">
            <Icon icon="x" />
          </div>
        </button>
      </div>
    );
  }
}
