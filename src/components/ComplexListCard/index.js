import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

export default class ComplexListCard extends Component {
  render() {
    let { link, thumb, content } = this.props.card;
    let isRounded = thumb && thumb.isRounded && 'complex-list-card__thumb--rounded';

    return (
      <React.Fragment>
        <li className="complex-list-card">
          <a className="complex-list-card__link" href={link}>
            <div className="complex-list-card__card">
              {thumb && (
                <div className={`complex-list-card__thumb ${isRounded}`}>
                  <img className="complex-list-card__thumb-img" src={thumb.img} alt={content.title} />
                </div>
              )}

              <div className="complex-list-card__content">
                <span className="complex-list-card__title">{content.title}</span>
                {content.subtitle && <span className="complex-list-card__subtitle">{content.subtitle}</span>}
              </div>
            </div>
          </a>
        </li>
      </React.Fragment>
    );
  }
}

ComplexListCard.propTypes = {
  card: PropType.shape({
    id: PropType.number.isRequired,
    link: PropType.string.isRequired,
    thumb: PropType.shape({
      isRounded: PropType.bool,
      img: PropType.string,
    }),
    content: PropType.shape({
      title: PropType.string.isRequired,
      subtitle: PropType.string,
    }),
  }),
};
