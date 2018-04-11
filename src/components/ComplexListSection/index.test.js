import React from 'react';
import ReactDOM from 'react-dom';
import ComplexListSection from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComplexListSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
