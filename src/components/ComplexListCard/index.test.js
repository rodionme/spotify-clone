import React from 'react';
import ReactDOM from 'react-dom';
import ComplexListCard from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComplexListCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
