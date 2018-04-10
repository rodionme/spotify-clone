import React from 'react';
import './style.css';

export default function Icon(props) {
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d={props.icon} />
    </svg>
  );
}
