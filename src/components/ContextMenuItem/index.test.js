import React from 'react';
import ReactDOM from 'react-dom';
import ContextMenuItem from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextMenuItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
