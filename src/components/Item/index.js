import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import ItemThumb from '../ItemThumb';
import ItemDescription from '../ItemDescription';

export default class Item extends Component {
  render() {
    let { isHorizontal, thumb, link, overlay, description } = this.props.item;
    let title = (description && description.title) || (overlay && overlay.title) || (description && description.text);
    let horizontalClassName = isHorizontal ? ' item--horizontal' : '';

    return (
      <div className={`item${horizontalClassName}`}>
        <ItemThumb link={link} thumb={thumb} overlay={overlay} title={title} />

        {description && <ItemDescription link={link} description={description} />}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropType.shape({
    isHorizontal: PropType.bool,
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
    description: PropType.shape({
      isLinked: PropType.bool,
      isCentered: PropType.bool,
      title: PropType.string,
      text: PropType.string,
      additional: PropType.string,
    }),
  }),
};
