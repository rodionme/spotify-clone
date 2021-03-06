import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Button from '../Button';
import { BUTTONS } from '../../constants/button-views';
import Icon from '../Icon';

export default class ItemThumb extends Component {
  render() {
    const BUTTON_STYLE = {
      plus: BUTTONS.TRANSPARENT,
      play: BUTTONS.ROUNDED,
      more: BUTTONS.TRANSPARENT,
    };

    let link = this.props.link;
    let thumb = this.props.thumb;
    let overlay = this.props.overlay;
    let title = this.props.title;
    let buttons = overlay && this.props.overlay.buttons;
    let roundedThumbClassName = thumb.isRounded ? ' item-thumb--rounded' : '';
    let horizontalThumbClassName = thumb.isHorizontal ? ' item-thumb--horizontal' : '';
    let fixedThumbClassName = thumb.isFixed ? ' item-thumb--fixed' : '';
    let fixedSmallThumbClassName = thumb.isFixedSmall ? ' item-thumb--fixed-small' : '';
    let fixedXSmallThumbClassName = thumb.isFixedXSmall ? ' item-thumb--fixed-x-small' : '';

    return (
      <a className="item__link" href={link}>
        <div
          className={`item__thumb item-thumb
                     ${roundedThumbClassName}
                     ${horizontalThumbClassName}
                     ${fixedThumbClassName}
                     ${fixedSmallThumbClassName}
                     ${fixedXSmallThumbClassName}`}
        >
          <img className="item-thumb__img" src={thumb.image} alt={title} />

          {overlay && (
            <div className="item-thumb__overlay item-overlay">
              <div className="item-overlay__buttons">
                {buttons.map(button => (
                  <Button key={button} view={BUTTON_STYLE[button]}>
                    <Icon icon={button} />
                  </Button>
                ))}
              </div>

              {overlay.title && <span className="item-thumb__title">{overlay.title}</span>}
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
