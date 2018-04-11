import React from 'react';
import PropType from 'prop-types';
import './style.css';

export default function Button(props) {
  let viewMap = {
    regular: '',
    rounded: 'button--rounded',
    action: 'button--action',
    'action-alt': 'button--action-alt',
    inverted: 'button--inverted',
    alt: 'button--alt',
    transparent: 'button--transparent',
  };

  return props.type === 'link' ? (
    <a href={props.link} className={`button ${viewMap[props.view]}`}>
      {props.children}
    </a>
  ) : (
    <button className={`button ${viewMap[props.view]}`}>{props.children}</button>
  );
}

Button.defaultProps = {
  view: 'regular',
};

Button.propTypes = {
  children: PropType.node,
  view: PropType.oneOf(['regular', 'rounded', 'action', 'action-alt', 'inverted', 'alt', 'transparent']),
};
