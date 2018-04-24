import React from 'react';
import PropType from 'prop-types';
import './style.css';
import { ICONS, PATHS } from '../../constants/icons';

export default function Icon(props) {
  return (
    <svg className={`icon icon-${props.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d={PATHS[props.icon]} />
    </svg>
  );
}

Icon.propTypes = {
  icon: PropType.oneOf(Object.values(ICONS)),
};
