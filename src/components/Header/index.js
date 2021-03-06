import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Button from '../Button';
import { BUTTONS } from '../../constants/button-views';
import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

export default class Header extends Component {
  render() {
    let { thumb, overhead, title, description, actions, additional } = this.props.header;
    let thumbClassName = thumb && thumb.isSmall ? ' header__thumb--small' : '';
    let followButton = actions && actions.isFollowing ? 'Following' : 'Follow';
    let buttonView = actions && actions.isFollowing ? BUTTONS.ACTION_ALT : BUTTONS.REGULAR;
    let altAdditionalClassName = additional.isAlt ? ' header__additional--alt' : '';

    return (
      <header className="header">
        {thumb && (
          <div className={`header__thumb${thumbClassName}`}>
            <img className="header__thumb-img" src={thumb.image} alt={title} />
          </div>
        )}

        <div className="header__content">
          <h4 className="header__overhead">{overhead}</h4>
          <h2 className="header__title">{title}</h2>

          {description && <div className="header__description" dangerouslySetInnerHTML={description} />}

          <div className="header__actions">
            <div className="header__buttons">
              {!actions.isAlt && (
                <React.Fragment>
                  <Button className="header__button" view={BUTTONS.ACTION}>
                    Play
                  </Button>

                  <Button className="header__button" view={buttonView}>
                    {followButton}
                  </Button>
                </React.Fragment>
              )}

              <Button className="header__button" view={BUTTONS.ROUNDED}>
                <Icon icon={ICONS.MORE} />
              </Button>
            </div>

            <div className={`header__additional${altAdditionalClassName}`}>
              <span className="header__additional-text">{additional.label}</span>
              {additional.value && <span className="header__additional-text">{additional.value}</span>}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  header: PropType.shape({
    thumb: PropType.shape({
      image: PropType.string,
      isSmall: PropType.bool,
    }),
    overhead: PropType.string.isRequired,
    title: PropType.string.isRequired,
    description: PropType.shape({
      __html: PropType.string,
    }),
    actions: PropType.shape({
      isAlt: PropType.bool,
      isAltButton: PropType.bool,
      isFollowing: PropType.bool,
    }).isRequired,
    additional: PropType.shape({
      isAlt: PropType.bool,
      label: PropType.string.isRequired,
      value: PropType.string,
    }),
  }),
};
