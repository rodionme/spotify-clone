import React, { Component } from 'react';
import Table from '../Table';

export default class Tables extends Component {
  render() {
    let table1 = {
      headers: ['play', 'save', 'title', 'artist', 'album', 'like', 'more'],
      isHeadVisible: true,
      rows: [
        {
          id: 1,
          isPlaying: true,
          isSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          artist: {
            label: 'Linkin Park',
            link: '',
          },
          album: {
            label: 'One More Light',
            link: '',
          },
          isLiked: false,
        },
        {
          id: 2,
          isPlaying: false,
          isSaved: true,
          isExplicit: false,
          title: 'Roter Sand',
          artist: {
            label: 'Rammstein',
            link: '',
          },
          album: {
            label: 'XXI - Klavier',
            link: '',
          },
          isLiked: false,
        },
        {
          id: 3,
          isPlaying: false,
          isSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          artist: {
            label: 'Nirvana',
            link: '',
          },
          album: {
            label: 'Nirvana',
            link: '',
          },
          isLiked: true,
        },
      ],
      isSortable: false,
    };

    let table2 = {
      headers: ['play', 'number', 'save', 'title', 'more', 'time', 'rating'],
      isHeadVisible: true,
      rows: [
        {
          id: 1,
          isPlaying: true,
          isSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          time: '3:50',
          rating: '|||||||||||||||||||||||',
        },
        {
          id: 2,
          isPlaying: false,
          isSaved: false,
          isExplicit: false,
          title: 'Roter Sand',
          time: '3:50',
          rating: '|||||||||||||||||||||||',
        },
        {
          id: 3,
          isPlaying: false,
          isSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          time: '3:50',
          rating: '|||||||||||||||||||||||',
        },
      ],
      isSortable: false,
    };

    let table3 = {
      headers: ['play', 'save', 'title', 'artist', 'album', 'more', 'time', 'rating'],
      isHeadVisible: true,
      rows: [
        {
          id: 1,
          isPlaying: true,
          isSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          artist: {
            label: 'Linkin Park',
            link: '',
          },
          album: {
            label: 'One More Light',
            link: '',
          },
          time: '3:50',
          rating: '|||||||||||||||||||||||',
        },
        {
          id: 2,
          isPlaying: false,
          isSaved: true,
          isExplicit: false,
          title: 'Roter Sand',
          artist: {
            label: 'Rammstein',
            link: '',
          },
          album: {
            label: 'XXI - Klavier',
            link: '',
          },
          time: '3:50',
          rating: '|||||||||||||||||||||||',
        },
        {
          id: 3,
          isPlaying: false,
          isSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          artist: {
            label: 'Nirvana',
            link: '',
          },
          album: {
            label: 'Nirvana',
            link: '',
          },
          time: '3:50',
          rating: '|||||||||||||||||||||||',
        },
      ],
      isSortable: false,
    };

    let table4 = {
      headers: ['play', 'save-radio', 'title', 'artist', 'album', 'more', 'time'],
      isHeadVisible: false,
      rows: [
        {
          id: 1,
          isPlaying: true,
          isRadioSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          artist: {
            label: 'Linkin Park',
            link: '',
          },
          album: {
            label: 'One More Light',
            link: '',
          },
          time: '3:50',
        },
        {
          id: 2,
          isPlaying: false,
          isRadioSaved: true,
          isExplicit: false,
          title: 'Roter Sand',
          artist: {
            label: 'Rammstein',
            link: '',
          },
          album: {
            label: 'XXI - Klavier',
            link: '',
          },
          time: '3:50',
        },
        {
          id: 3,
          isPlaying: false,
          isRadioSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          artist: {
            label: 'Nirvana',
            link: '',
          },
          album: {
            label: 'Nirvana',
            link: '',
          },
          time: '3:50',
        },
      ],
      isSortable: false,
    };

    let table5 = {
      headers: ['play', 'save', 'title', 'artist', 'album', 'released', 'more', 'time'],
      isHeadVisible: true,
      rows: [
        {
          id: 1,
          isPlaying: true,
          isSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          artist: {
            label: 'Linkin Park',
            link: '',
          },
          album: {
            label: 'One More Light',
            link: '',
          },
          released: 'a day ago',
          time: '1:11',
        },
        {
          id: 2,
          isPlaying: false,
          isSaved: true,
          isExplicit: false,
          title: 'Roter Sand',
          artist: {
            label: 'Rammstein',
            link: '',
          },
          album: {
            label: 'XXI - Klavier',
            link: '',
          },
          released: '5 days ago',
          time: '3:50',
        },
        {
          id: 3,
          isPlaying: false,
          isSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          artist: {
            label: 'Nirvana',
            link: '',
          },
          album: {
            label: 'Nirvana',
            link: '',
          },
          released: '2017-02-17',
          time: '9:17',
        },
      ],
      isSortable: true,
    };

    let table6 = {
      headers: ['play', 'number', 'position', 'save', 'title', 'artist', 'more', 'count'],
      isHeadVisible: true,
      rows: [
        {
          id: 1,
          isPlaying: true,
          position: 'none',
          isSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          artist: {
            label: 'Linkin Park',
            link: '',
          },
          count: '7,113,735',
        },
        {
          id: 2,
          isPlaying: false,
          position: 'up',
          isSaved: true,
          isExplicit: false,
          title: 'Roter Sand',
          artist: {
            label: 'Rammstein',
            link: '',
          },
          count: '3,807,680',
        },
        {
          id: 3,
          isPlaying: false,
          position: 'down',
          isSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          artist: {
            label: 'Nirvana',
            link: '',
          },
          count: '2,855,328',
        },
        {
          id: 4,
          isPlaying: false,
          position: 'new',
          isSaved: false,
          isExplicit: true,
          title: 'Gorgeous',
          artist: {
            label: 'Taylor Swift',
            link: '',
          },
          count: '256,589',
        },
      ],
      isSortable: false,
    };

    let table7 = {
      headers: ['thumb', 'play', 'number', 'save', 'title', 'more', 'count'],
      isHeadVisible: true,
      rows: [
        {
          id: 1,
          thumb: '//via.placeholder.com/100x100',
          isPlaying: true,
          isSaved: false,
          isExplicit: false,
          title: 'Talking to Myself',
          count: '7,113,735',
        },
        {
          id: 2,
          thumb: '//via.placeholder.com/100x100',
          isPlaying: false,
          isSaved: true,
          isExplicit: false,
          title: 'Roter Sand',
          count: '3,807,680',
        },
        {
          id: 3,
          thumb: '//via.placeholder.com/100x100',
          isPlaying: false,
          isSaved: false,
          isExplicit: true,
          title: 'All Apologies - MTV Unplugged',
          count: '2,855,328',
        },
      ],
      isSortable: false,
    };

    return (
      <React.Fragment>
        <Table table={table1} />
        <br />
        <Table table={table2} />
        <br />
        <Table table={table3} />
        <br />
        <Table table={table4} />
        <br />
        <Table table={table5} />
        <br />
        <Table table={table6} />
        <br />
        <Table table={table7} />
      </React.Fragment>
    );
  }
}
