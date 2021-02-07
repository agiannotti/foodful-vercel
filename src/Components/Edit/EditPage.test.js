import React from 'react';
import ReactDOM from 'react-dom';
import EditPage from './EditPage';

import { BrowserRouter, Route } from 'react-router-dom';

describe('EditPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={EditPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
