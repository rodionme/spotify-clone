import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Icon from '../Icon';

export default class ContextMenuItem extends Component {
  renderItem(item) {
    let { id, link, title, isDivider, icon, position, items } = item;
    let dividerClassName = isDivider ? ' context-menu-item__divider' : '';
    let expandableClassName = items ? ' context-menu-item--expandable' : '';
    let isExpandable = items;

    return isExpandable ? (
      <li className={`context-menu-item${dividerClassName}${expandableClassName}`} data-position={position}>
        <span className="context-menu-item__link">{title}</span>

        <div className="context-menu-item__icon">
          <Icon icon={icon} />
        </div>

        <ul className="context-menu__list">
          {items.map(item => {
            return this.renderItem(item);
          })}
        </ul>
      </li>
    ) : (
      <li key={id} className={`context-menu-item${dividerClassName}${expandableClassName}`} data-position={position}>
        {icon && (
          <div className="context-menu-item__icon">
            <Icon icon={icon} />
          </div>
        )}

        <a className="context-menu-item__link" href={link}>
          {title}
        </a>
      </li>
    );
  }

  render() {
    return this.renderItem(this.props.item);
  }
}

ContextMenuItem.propTypes = {
  id: PropType.number,
  link: PropType.string,
  title: PropType.string,
  isDivider: PropType.bool,
  icon: PropType.string,
  position: PropType.string,
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      link: PropType.string,
      title: PropType.string,
      isDivider: PropType.bool,
      icon: PropType.string,
    }),
  ),
};
