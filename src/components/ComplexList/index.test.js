import React from 'react';
import ReactDOM from 'react-dom';
import ComplexList from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComplexList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
