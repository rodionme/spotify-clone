import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Card from '../ComplexListCard';

export default class ComplexListSection extends Component {
  render() {
    let { title, list } = this.props.section;

    return (
      <div className="complex-list-section">
        <h3 className="complex-list-section__title">{title}</h3>

        <ul className="complex-list-section__list">{list.map(item => <Card key={item.id} card={item} />)}</ul>
      </div>
    );
  }
}

ComplexListSection.propTypes = {
  section: PropType.shape({
    list: PropType.arrayOf(
      PropType.shape({
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
    ),
    title: PropType.string.isRequired,
  }),
};
