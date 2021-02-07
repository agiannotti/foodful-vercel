import React from 'react';
import ReactDOM from 'react-dom';
import DeleteButton from './DeleteButton';

import { BrowserRouter, Route } from 'react-router-dom';

describe('DeleteButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={DeleteButton} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
