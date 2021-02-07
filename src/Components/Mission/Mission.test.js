import React from 'react';
import ReactDOM from 'react-dom';
import Mission from './Mission';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Mission Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/mission'} component={Mission} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
