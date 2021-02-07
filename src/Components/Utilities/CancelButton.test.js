import React from 'react';
import ReactDOM from 'react-dom';
import CancelButton from './CancelButton';

import { BrowserRouter, Route } from 'react-router-dom';

describe('CancelButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={CancelButton} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
