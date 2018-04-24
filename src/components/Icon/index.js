import React from 'react';
import PropType from 'prop-types';
import './style.css';
import { ICONS } from '../../constants/icons';

export default function Icon(props) {
  return (
    <svg className={`icon icon-${props.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d={ICONS[props.icon.toUpperCase()]} />
    </svg>
  );
}

Icon.propTypes = {
  icon: PropType.oneOf([
    'ban',
    'check',
    'chevron_down',
    'chevron_right',
    'chevron_up',
    'copy',
    'hearth',
    'hearth_active',
    'more',
    'pause',
    'play',
    'plus',
    'plus_alt',
    'released',
    'search',
    'thumbs_up',
    'time',
    'volume',
    'x',
  ]),
};
