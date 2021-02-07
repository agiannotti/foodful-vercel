import React from 'react';
import ReactDOM from 'react-dom';
import AddResource from './AddResource';

import { BrowserRouter, Route } from 'react-router-dom';

describe('AddResource Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={AddResource} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
