import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger';

import { BrowserRouter, Route } from 'react-router-dom';

describe('Burger Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={Burger} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
