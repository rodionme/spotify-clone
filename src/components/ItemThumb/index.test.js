import React from 'react';
import ReactDOM from 'react-dom';
import ItemThumb from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemThumb />, div);
  ReactDOM.unmountComponentAtNode(div);
});
