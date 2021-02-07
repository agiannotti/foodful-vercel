import React from 'react';
import ReactDOM from 'react-dom';
import RightNav from './RightNav';

import { BrowserRouter, Route } from 'react-router-dom';

describe('RightNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={RightNav} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
