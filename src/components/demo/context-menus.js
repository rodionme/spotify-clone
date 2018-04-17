import React, { Component } from 'react';
import ContextMenu from '../ContextMenu';
import { ICONS } from '../../constants/icons';

export default class ContextMenus extends Component {
  render() {
    let items = [
      {
        id: 1,
        link: '',
        title: 'Add to Queue',
      },
      {
        id: 2,
        link: '',
        title: 'Go to Song Radio',
        isDivider: true,
      },
      {
        id: 3,
        link: '',
        title: 'Go to Artist',
      },
      {
        id: 4,
        link: '',
        title: 'Go to Album',
        isDivider: true,
      },
      {
        id: 5,
        link: '',
        title: 'Save to Your Library',
      },
      {
        id: 6,
        title: 'Add to Playlist',
        icon: ICONS.CHEVRON_RIGHT,
        position: 'left',
        items: [
          {
            id: 1,
            link: '',
            title: 'New Playlist',
            isDivider: true,
          },
          {
            id: 2,
            link: '',
            title: 'Liked from Radio',
          },
        ],
      },
      {
        id: 7,
        title: 'Share',
        icon: ICONS.CHEVRON_RIGHT,
        position: 'right',
        items: [
          {
            id: 1,
            link: '',
            title: 'Facebook',
          },
          {
            id: 2,
            link: '',
            title: 'Messenger',
          },
          {
            id: 3,
            link: '',
            title: 'Twitter',
          },
          {
            id: 4,
            link: '',
            title: 'Telegram',
          },
          {
            id: 5,
            link: '',
            title: 'Skype',
          },
          {
            id: 6,
            link: '',
            title: 'Tumblr',
          },
          {
            id: 7,
            link: '',
            title: 'Copy Song Link',
            icon: ICONS.COPY,
          },
          {
            id: 8,
            link: '',
            title: 'Copy Embed Code',
          },
          {
            id: 9,
            link: '',
            title: 'Copy Spotify URI',
          },
        ],
      },
    ];

    return (
      <React.Fragment>
        <ContextMenu items={items} />
      </React.Fragment>
    );
  }
}
