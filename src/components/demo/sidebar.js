import React, { Component } from 'react';
import Sidebar from '../Sidebar';

export default class Sidebars extends Component {
  render() {
    let sidebar = {
      sections: [
        {
          id: 1,
          items: [{ label: 'Browse', link: '' }, { label: 'Radio', link: '' }],
        },
        {
          id: 2,
          title: 'Your Library',
          items: [
            { label: 'Your Daily Mix', link: '' },
            { label: 'Recently Played', link: '' },
            { label: 'Songs', link: '' },
            { label: 'Albums', link: '' },
            { label: 'Artists', link: '' },
            { label: 'Stations', link: '' },
            { label: 'Local Files', link: '' },
            { label: 'Videos', link: '' },
            { label: 'Podcasts', link: '' },
          ],
        },
        {
          id: 3,
          title: 'Playlists',
          items: [
            { label: 'Discover Weekly', link: '', hint: ' - by Spotify' },
            { label: 'Liked from Radio', link: '' },
          ],
        },
      ],
      track: {
        label: 'Example Track',
        image: '//via.placeholder.com/400x400',
      },
    };

    return <Sidebar sidebar={sidebar} />;
  }
}
