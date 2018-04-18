import React, { Component } from 'react';
import ComplexList from '../ComplexList';

export default class ComplexLists extends Component {
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
      <React.Fragment>
        <ComplexList list={complexList} />
      </React.Fragment>
    );
  }
}
