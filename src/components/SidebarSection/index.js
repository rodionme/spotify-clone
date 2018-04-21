import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

export default class SidebarSection extends Component {
  render() {
    let { title, items } = this.props.section;
    let activeClassName = 'sidebar-section__list-item--active';

    return (
      <section className="sidebar__section sidebar-section">
        {title && <h3 className="sidebar-section__title">{title}</h3>}

        <ul className="sidebar-section__list">
          {items.map(({ label, link, hint }) => (
            <li key={label} className="sidebar-section__list-item">
              <a className="sidebar-section__link" href={link}>
                {label}
                {hint && <span className="sidebar-section__hint">{hint}</span>}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

SidebarSection.propTypes = {
  section: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string,
    items: PropType.arrayOf(
      PropType.shape({
        label: PropType.string.isRequired,
        link: PropType.string.isRequired,
        hint: PropType.string,
      }),
    ),
  }),
};
