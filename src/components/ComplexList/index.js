import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Section from '../ComplexListSection';

export default class ComplexList extends Component {
  render() {
    let { bestMatch, tracks, artists, albums, playlists } = this.props.list;
    return (
      <div className="complex-list">
        <Section
          section={{
            title: 'Top Result',
            list: bestMatch,
          }}
        />

        <Section
          section={{
            title: 'Songs',
            list: tracks,
          }}
        />

        <Section
          section={{
            title: 'Artists',
            list: artists,
          }}
        />

        <Section
          section={{
            title: 'Albums',
            list: albums,
          }}
        />

        <Section
          section={{
            title: 'Playlists',
            list: playlists,
          }}
        />
      </div>
    );
  }
}

const listSection = PropType.shape({
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
});

ComplexList.propTypes = {
  list: PropType.shape({
    bestMatch: PropType.arrayOf(listSection),
    tracks: PropType.arrayOf(listSection),
    artists: PropType.arrayOf(listSection),
    albums: PropType.arrayOf(listSection),
    playlists: PropType.arrayOf(listSection),
  }),
};
