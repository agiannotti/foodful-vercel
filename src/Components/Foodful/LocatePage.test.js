import React from 'react';
import ReactDOM from 'react-dom';
import LocatePage from './LocatePage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('LocatePage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/locate'} component={LocatePage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
