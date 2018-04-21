import React from 'react';
import ReactDOM from 'react-dom';
import SidebarSection from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
