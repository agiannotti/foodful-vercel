import React from 'react';
import ReactDOM from 'react-dom';
import ResourceList from './ResourceList';
import { BrowserRouter, Route } from 'react-router-dom';

describe('ResourceList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/resources'} component={ResourceList} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
