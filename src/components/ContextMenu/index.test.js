import React from 'react';
import ReactDOM from 'react-dom';
import ContextMenu from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
