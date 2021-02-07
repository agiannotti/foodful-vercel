import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

import { BrowserRouter, Route } from 'react-router-dom';

describe('NavBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={NavBar} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
