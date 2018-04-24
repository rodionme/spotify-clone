import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';
import Section from '../SidebarSection';
import Icon from '../Icon';

export default class Sidebar extends Component {
  render() {
    let { sections, track } = this.props.sidebar;

    return (
      <aside className="sidebar">
        <nav className="sidebar__menu">{sections.map(section => <Section key={section.id} section={section} />)}</nav>
        <footer className="sidebar__footer">
          <div className="sidebar__new-playlist">
            <a className="sidebar__new-playlist-link" href="">
              <Icon icon="plus_alt" />
              <span>New Playlist</span>
            </a>
          </div>
          <div className="sidebar__current-track">
            <img className="sidebar__current-track-img" src={track.image} alt={track.label} />
          </div>
        </footer>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  sidebar: PropType.shape({
    sections: PropType.arrayOf(
      PropType.shape({
        id: PropType.number.isRequired,
        title: PropType.string,
        items: PropType.arrayOf(
          PropType.shape({
            label: PropType.string.isRequired,
            link: PropType.string.isRequired,
            hint: PropType.string,
          }),
        ),
      }),
    ),
    track: PropType.shape({
      label: PropType.string.isRequired,
      image: PropType.string.isRequired,
    }),
  }),
};
