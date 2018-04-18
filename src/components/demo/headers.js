import React, { Component } from 'react';
import Header from '../Header';

export default class Headers extends Component {
  render() {
    let header1 = {
      thumb: {
        image: '//via.placeholder.com/300x300',
      },
      overhead: 'Made for Meuser1',
      title: 'Discover Weekly',
      description: {
        __html: `
          <p>
            Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you. Updated every
            Monday, so save your favourites!
          </p>
          <p>
            Made for <a href="#">meuser1</a> by <a href="#">Spotify</a>. 30 songs, 1 hr 47 min
          </p>
        `,
      },
      actions: {
        isFollowing: true,
      },
      additional: {
        label: 'FOLLOWER',
        value: '1',
      },
    };

    let header2 = {
      overhead: 'Artist',
      title: 'Shallou',
      actions: {},
      additional: {
        label: 'MONTHLY LISTENERS',
        value: '2,139,446',
      },
    };

    let header3 = {
      thumb: {
        image: '//via.placeholder.com/300x300',
        isSmall: true,
      },
      overhead: 'User',
      title: 'meuser1',
      actions: {
        isAlt: true,
      },
      additional: {
        isAlt: true,
        label:
          "By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image. We'll only use your image for your profile picture and/or playlist cover art.",
      },
    };

    return (
      <React.Fragment>
        <Header header={header1} />
        <br />
        <Header header={header2} />
        <br />
        <Header header={header3} />
      </React.Fragment>
    );
  }
}
