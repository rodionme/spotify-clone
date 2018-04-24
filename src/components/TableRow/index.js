import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Button from '../Button';
import { BUTTONS } from '../../constants/button-views';
import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

export default class TableRow extends Component {
  render() {
    let {
      id,
      thumb,
      isPlaying,
      position,
      isSaved,
      isExplicit,
      title,
      artist,
      album,
      released,
      isLiked,
      time,
      rating,
      count,
    } = this.props.row;
    let headers = this.props.headers;
    let isSelected = false;
    let selectedClassName = isSelected ? ' selected' : '';
    let playingClassName = isPlaying ? ' now-playing' : '';
    let savedClassName = isSaved ? ' added' : '';
    let likedClassName = isLiked ? ' liked' : '';

    return (
      <div className={`table__row${selectedClassName}${playingClassName}${savedClassName}${likedClassName}`}>
        {headers.includes('thumb') && (
          <div className="table__cell table__cell--thumb">
            <img className="table__thumb" src={thumb} />
          </div>
        )}

        <div className="table__cell table__cell--play">
          <Button className="table__button table__button--play-indicator" view={BUTTONS.TRANSPARENT}>
            <Icon icon={ICONS.VOLUME} />
          </Button>

          <Button className="table__button table__button--toggle" view={BUTTONS.ROUNDED}>
            <Icon icon={ICONS.PLAY} />
            <Icon icon={ICONS.PAUSE} />
          </Button>
        </div>

        {headers.includes('number') && (
          <div className="table__cell table__cell--number">
            <span className="table__cell-content">{id}</span>
          </div>
        )}

        {headers.includes('position') && (
          <div className="table__cell table__cell--header table__cell--position">
            {position && <span className={`table__cell-content position position--${position}`} />}
          </div>
        )}

        {headers.includes('save') && (
          <div className="table__cell table__cell--save">
            <Button className="table__button table__button--save-library" view={BUTTONS.TRANSPARENT}>
              <Icon icon={ICONS.PLUS} />
              <Icon icon={ICONS.CHECK} />
              <Icon icon={ICONS.X} />
            </Button>
          </div>
        )}

        {headers.includes('save-radio') && (
          <div className="table__cell table__cell--save-radio">
            <Button className="table__button table__button--save-radio" view={BUTTONS.ALT}>
              Add
            </Button>
          </div>
        )}

        <div className="table__cell table__cell--title">
          <span className="table__cell-content">{title}</span>
          {isExplicit && <span className="explicit-badge">Explicit</span>}
        </div>

        {headers.includes('artist') && (
          <div className="table__cell table__cell--artist">
            <a className="table__cell-content table__cell-content--linked" href={artist.link}>
              {artist.label}
            </a>
          </div>
        )}

        {headers.includes('album') && (
          <div className="table__cell table__cell--album">
            <a className="table__cell-content table__cell-content--linked" href={album.link}>
              {album.label}
            </a>
          </div>
        )}

        {headers.includes('released') && (
          <div className="table__cell table__cell--released">
            <span className="table__cell-content">{released}</span>
          </div>
        )}

        {headers.includes('like') && (
          <div className="table__cell table__cell--like">
            <Button className="table__button table__button--dislike" view={BUTTONS.TRANSPARENT}>
              <Icon icon={ICONS.HEARTH_ACTIVE} />
            </Button>

            <Button className="table__button table__button--like" view={BUTTONS.TRANSPARENT}>
              <Icon icon={ICONS.HEARTH} />
            </Button>

            <Button className="table__button table__button--remove" view={BUTTONS.TRANSPARENT}>
              <Icon icon={ICONS.BAN} />
            </Button>
          </div>
        )}

        <div className="table__cell table__cell--more">
          <Button className="table__button table__button--more" view={BUTTONS.TRANSPARENT}>
            <Icon icon={ICONS.MORE} />
          </Button>
        </div>

        {headers.includes('time') && (
          <div className="table__cell table__cell--time">
            <span className="table__cell-content">{time}</span>
          </div>
        )}

        {headers.includes('rating') && (
          <div className="table__cell table__cell--rating">
            <span className="table__cell-content">{rating}</span>
          </div>
        )}

        {headers.includes('count') && (
          <div className="table__cell table__cell--count">
            <span className="table__cell-content">{count}</span>
          </div>
        )}
      </div>
    );
  }
}

TableRow.propTypes = {
  row: PropType.shape({
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
};
