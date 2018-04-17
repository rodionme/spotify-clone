import React, { Component } from 'react';
import './style.css';

export default class Control extends Component {
  render() {
    let { type, label, labelSize, items, checked } = this.props;
    let bigClassName = labelSize === 'big' ? ' control__label--big' : '';

    return (
      <div className="control">
        <label className={`control__label${bigClassName}`}>{label}</label>

        {type === 'checkbox' ? (
          <label className="control__toggle">
            <input className="control__checkbox" defaultChecked={checked} name="" type="checkbox" />
            <div className="control__handler" />
          </label>
        ) : (
          <select className="control__select">
            {items.map(item => (
              <option key={item.id} value={item.title} className="control__option">
                {item.title}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
}
