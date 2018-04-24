import React, { Component } from 'react';
import Item from '../Item';

export default class Items extends Component {
  render() {
    let item1 = {
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
      },
      overlay: {
        buttons: ['plus', 'play', 'more'],
      },
      description: {
        title: 'Daily Mix 2',
        text: 'Foals, Kasabian, The National and more',
        additional: 'Made for meuser1',
      },
    };

    let item2 = {
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
        isRounded: true,
      },
      overlay: {
        buttons: ['plus', 'play', 'more'],
      },
      description: {
        isCentered: true,
        title: 'Johann Sebastian Bach',
        additional: '835,221 followers',
      },
    };

    let item3 = {
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
      },
      overlay: {
        buttons: ['more'],
        title: 'Pop',
      },
    };

    let item4 = {
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x333',
      },
      description: {
        isCentered: true,
        text: 'Series, specials, and more',
      },
    };

    let item5 = {
      isHorizontal: true,
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
        isHorizontal: true,
        isFixed: true,
      },
      overlay: {
        buttons: ['play'],
      },
      description: {
        isLinked: true,
        title: 'Release Radar',
        text:
          'Never miss a new release! Catch all the latest music from artists you care about, plus new singles picked just for you. Update every Friday.',
        additional: 'Playlist - by Spotify',
      },
    };

    let item6 = {
      isHorizontal: true,
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
        isHorizontal: true,
        isFixed: true,
      },
      description: {
        isLinked: true,
        title: 'Spotify Singles',
        additional: 'Sep 6, 2017',
      },
    };

    let item7 = {
      isHorizontal: true,
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
        isHorizontal: true,
        isFixedSmall: true,
      },
      description: {
        isLinked: true,
        title: 'Pop Chillout',
        text: 'spotify',
        additional: '266,050 listeners',
      },
    };

    let item8 = {
      isHorizontal: true,
      link: '#',
      thumb: {
        image: '//via.placeholder.com/999x999',
        isHorizontal: true,
        isRounded: true,
        isFixedXSmall: true,
      },
      description: {
        isLinked: true,
        title: 'Whethan',
      },
    };

    return (
      <React.Fragment>
        <Item item={item1} />
        <br />
        <Item item={item2} />
        <br />
        <Item item={item3} />
        <br />
        <Item item={item4} />
        <br />
        <Item item={item5} />
        <br />
        <Item item={item6} />
        <br />
        <Item item={item7} />
        <br />
        <Item item={item8} />
      </React.Fragment>
    );
  }
}
