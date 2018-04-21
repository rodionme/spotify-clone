import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

export default class ItemThumb extends Component {
  render() {
    const BUTTON_STYLE = {
      PLUS: 'transparent',
      PLAY: 'rounded',
      MORE: 'transparent',
    };

    let link = this.props.link;
    let thumb = this.props.thumb;
    let overlay = this.props.overlay;
    let title = this.props.title;
    let buttons = overlay && this.props.overlay.buttons;
    let roundedThumbClassName = thumb.isRounded ? ' item__thumb--rounded' : '';
    let horizontalThumbClassName = thumb.isHorizontal ? ' item__thumb--horizontal' : '';
    let fixedThumbClassName = thumb.isFixed ? ' item__thumb--fixed' : '';
    let fixedSmallThumbClassName = thumb.isFixedSmall ? ' item__thumb--fixed-small' : '';
    let fixedXSmallThumbClassName = thumb.isFixedXSmall ? ' item__thumb--fixed-x-small' : '';

    return (
      <a className="item__link" href={link}>
        <div
          className={`item__thumb
                     ${roundedThumbClassName}
                     ${horizontalThumbClassName}
                     ${fixedThumbClassName}
                     ${fixedSmallThumbClassName}
                     ${fixedXSmallThumbClassName}`}
        >
          <img className="item__thumb-img" src={thumb.image} alt={title} />

          {overlay && (
            <div className="item__overlay item-overlay">
              <div className="item-overlay__buttons">
                {buttons.map(button => (
                  <button key={button} className={`button button--${BUTTON_STYLE[button]}`}>
                    <Icon icon={ICONS[button]} />
                  </button>
                ))}
              </div>

              {overlay.title && <span className="item__title item__title--big">{overlay.title}</span>}
            </div>
          )}
        </div>
      </a>
    );
  }
}

ItemThumb.propTypes = {
  link: PropType.string.isRequired,
  thumb: PropType.shape({
    image: PropType.string.isRequired,
    isRounded: PropType.bool,
    isHorizontal: PropType.bool,
    isFixed: PropType.bool,
    isFixedSmall: PropType.bool,
    isFixedXSmall: PropType.bool,
  }).isRequired,
  overlay: PropType.shape({
    title: PropType.string,
  }),
  title: PropType.string,
};
