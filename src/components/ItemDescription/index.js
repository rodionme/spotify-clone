import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

export default class ItemDescription extends Component {
  render() {
    let link = this.props.link;
    let description = this.props.description;
    let centeredDescriptionClassName = description && description.isCentered ? ' item-description--centered' : '';

    return description.isLinked ? (
      <a className="item__link" href={link}>
        <div className={`item__description item-description${centeredDescriptionClassName}`}>
          {description.title && <span className="item-description__title">{description.title}</span>}
          {description.text && <span className="item-description__text">{description.text}</span>}
          {description.additional && <span className="item-description__additional">{description.additional}</span>}
        </div>
      </a>
    ) : (
      <div className={`item-description${centeredDescriptionClassName}`}>
        {description.title && (
          <a className="item-description__title" href={link}>
            {description.title}
          </a>
        )}
        {description.text && <span className="item-description__text">{description.text}</span>}
        {description.additional && <span className="item-description__additional">{description.additional}</span>}
      </div>
    );
  }
}

ItemDescription.propTypes = {
  link: PropType.string.isRequired,
  description: PropType.shape({
    isLinked: PropType.bool,
    isCentered: PropType.bool,
    title: PropType.string,
    text: PropType.string,
    additional: PropType.string,
  }).isRequired,
};
