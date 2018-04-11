import React, { Component } from 'react';
import './style.css';
import Section from '../ComplexListSection';

export default class ComplexList extends Component {
  render() {
    let complexList = {
      albums: [
        {
          id: 1,
          link: '',
          thumb: {
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Mura Masa',
            subtitle: 'Mura Masa',
          },
        },
        {
          id: 2,
          link: '',
          thumb: {
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Multi-Love',
            subtitle: 'Unknown Mortal Orchestra',
          },
        },
        {
          id: 3,
          link: '',
          thumb: {
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Mutter',
            subtitle: 'Rammstein',
          },
        },
      ],
      artists: [
        {
          id: 1,
          link: '',
          thumb: {
            isRounded: true,
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Muse',
          },
        },
        {
          id: 2,
          link: '',
          thumb: {
            isRounded: true,
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Mura Masa',
          },
        },
        {
          id: 3,
          link: '',
          thumb: {
            isRounded: true,
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Muddy Waters',
          },
        },
      ],
      bestMatch: [
        {
          id: 1,
          link: '',
          thumb: {
            isRounded: true,
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Muse',
          },
        },
      ],
      playlists: [
        {
          id: 1,
          link: '',
          thumb: {
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Music For Concentration',
          },
        },
        {
          id: 2,
          link: '',
          thumb: {
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Musicals Hits',
          },
        },
        {
          id: 3,
          link: '',
          thumb: {
            img: '//via.placeholder.com/100x100',
          },
          content: {
            title: 'Music for Malling',
          },
        },
      ],
      tracks: [
        {
          id: 1,
          link: '',
          content: {
            title: 'Multi-Love',
            subtitle: 'Unknown Mortal Orchestra',
          },
        },
        {
          id: 2,
          link: '',
          content: {
            title: 'Mudshovel - Explicit Album Version',
            subtitle: 'Staind',
          },
        },
        {
          id: 3,
          link: '',
          content: {
            title: 'Musicbox',
            subtitle: 'Amy Yeager',
          },
        },
      ],
    };

    return (
      <div className="complex-list">
        <Section
          section={{
            title: 'Top Result',
            list: complexList.bestMatch,
          }}
        />

        <Section
          section={{
            title: 'Songs',
            list: complexList.tracks,
          }}
        />

        <Section
          section={{
            title: 'Artists',
            list: complexList.artists,
          }}
        />

        <Section
          section={{
            title: 'Albums',
            list: complexList.albums,
          }}
        />

        <Section
          section={{
            title: 'Playlists',
            list: complexList.playlists,
          }}
        />
      </div>
    );
  }
}
