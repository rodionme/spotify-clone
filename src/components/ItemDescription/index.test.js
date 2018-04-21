import React from 'react';
import ReactDOM from 'react-dom';
import ItemDescription from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemDescription />, div);
  ReactDOM.unmountComponentAtNode(div);
});
