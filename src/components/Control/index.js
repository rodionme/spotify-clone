import React, { Component } from 'react';
import './style.css';
import PropType from 'prop-types';

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

Control.defaultProps = {
  labelSize: 'regular',
};

Control.propTypes = {
  type: PropType.oneOf(['checkbox', 'select']),
  label: PropType.string,
  labelSize: PropType.oneOf(['regular', 'big']),
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      title: PropType.string,
    }),
  ),
  checked: PropType.bool,
};
