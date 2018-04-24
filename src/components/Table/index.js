import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Row from '../TableRow';
import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

export default class Table extends Component {
  render() {
    const HEADER = {
      number: {
        label: '#',
      },
      title: {
        label: 'Title',
        isSortable: true,
      },
      artist: {
        label: 'Artist',
        isSortable: true,
      },
      album: {
        label: 'Album',
        isSortable: true,
      },
      released: {
        icon: 'released',
        isSortable: true,
      },
      time: {
        icon: 'time',
        isSortable: true,
      },
      rating: {
        icon: 'thumbs-up',
      },
      count: {
        label: 'Daily plays',
      },
    };
    let { headers, isHeadVisible, rows, isSortable } = this.props.table;

    let sortedClassName = 'sorted';
    let ascSortingClassName = 'sorted--asc';
    let descSortingClassName = 'sorted--desc';

    return (
      <div className="table">
        {isHeadVisible && (
          <div className="table__header">
            <div className="table__row">
              {headers.map((header, index) => (
                <div key={index} className={`table__cell table__cell--header table__cell--${header}`}>
                  {Object.keys(HEADER).includes(header) &&
                    HEADER[header].label && <span className="table__cell-content">{HEADER[header].label}</span>}

                  {Object.keys(HEADER).includes(header) && HEADER[header].icon && <Icon icon={HEADER[header].icon} />}

                  {isSortable &&
                    Object.keys(HEADER).includes(header) &&
                    HEADER[header].isSortable && (
                      <span className="table__icon table__icon--sorting">
                        <Icon icon={ICONS.CHEVRON_UP} />
                        <Icon icon={ICONS.CHEVRON_DOWN} />
                      </span>
                    )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="table__body">{rows.map(row => <Row key={row.id} row={row} headers={headers} />)}</div>
      </div>
    );
  }
}

Table.propTypes = {
  table: PropType.shape({
    headers: PropType.arrayOf(
      PropType.oneOf([
        'thumb',
        'play',
        'number',
        'position',
        'save',
        'save-radio',
        'title',
        'artist',
        'album',
        'released',
        'like',
        'more',
        'time',
        'rating',
        'count',
      ]),
    ).isRequired,
    isHeadVisible: PropType.bool.isRequired,
    rows: PropType.arrayOf(
      PropType.shape({
        id: PropType.number.isRequired,
        thumb: PropType.string,
        isPlaying: PropType.bool.isRequired,
        position: PropType.string,
        isSaved: PropType.bool,
        isRadioSaved: PropType.bool,
        isExplicit: PropType.bool.isRequired,
        title: PropType.string.isRequired,
        artist: PropType.shape({
          label: PropType.string.isRequired,
          link: PropType.string.isRequired,
        }),
        album: PropType.shape({
          label: PropType.string.isRequired,
          link: PropType.string.isRequired,
        }),
        released: PropType.string,
        isLiked: PropType.bool,
        time: PropType.string,
        rating: PropType.string,
        count: PropType.string,
      }),
    ),
    isSortable: PropType.bool.isRequired,
  }),
};
