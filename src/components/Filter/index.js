import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <input className="filter__input" type="text" placeholder="Filter" />

        <div className="filter__icon">
          <Icon icon={ICONS.SEARCH} />
        </div>

        <Button className="filter__button" type="button">
          <div className="filter__icon">
            <Icon icon={ICONS.X} />
          </div>
        </Button>
      </div>
    );
  }
}
