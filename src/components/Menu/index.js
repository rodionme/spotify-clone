import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

export default class Menu extends Component {
  render() {
    let items = this.props.items;
    let activeClassName = 'menu__link--active';

    return (
      <nav className="menu">
        <ul className="menu__list">
          {items.map(({ label, link }) => (
            <li key={label} className="menu__item">
              <a className="menu__link" href={link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  items: PropType.arrayOf(
    PropType.shape({
      label: PropType.string.isRequired,
      link: PropType.string.isRequired,
    }),
  ),
};
