import React from 'react';
import PropType from 'prop-types';
import './style.css';
import { BUTTONS } from '../../constants/button-views';

export default function Button(props) {
  let viewMap = {
    [BUTTONS.REGULAR]: '',
    [BUTTONS.ROUNDED]: ' button--rounded',
    [BUTTONS.ACTION]: ' button--action',
    [BUTTONS.ACTION_ALT]: ' button--action-alt',
    [BUTTONS.INVERTED]: ' button--inverted',
    [BUTTONS.ALT]: ' button--alt',
    [BUTTONS.TRANSPARENT]: ' button--transparent',
  };

  return props.type === 'link' ? (
    <a href={props.link} className={`button ${viewMap[props.view]}`}>
      {props.children}
    </a>
  ) : (
    <button className={`${props.className} button${viewMap[props.view]}`}>{props.children}</button>
  );
}

Button.defaultProps = {
  type: 'button',
  view: BUTTONS.REGULAR,
};

Button.propTypes = {
  children: PropType.node,
  type: PropType.oneOf(['link', 'button']),
  link: PropType.string,
  view: PropType.oneOf(Object.values(BUTTONS)),
};
