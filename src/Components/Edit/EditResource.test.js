import React from 'react';
import ReactDOM from 'react-dom';
import EditResource from './EditResource';

import { BrowserRouter, Route } from 'react-router-dom';

describe('EditResource Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={EditResource} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
