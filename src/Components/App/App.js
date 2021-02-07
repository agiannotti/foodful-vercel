import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import './App.css';
import history from '../../Context/history';
import Main from '../Main/Main';
import Mission from '../Mission/Mission';
import Locate from '../Foodful/LocatePage';
import AddResource from '../Add/AddResource';
import EditPage from '../Edit/EditPage';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Route path={'/mission'} component={Mission} />
          <Route path={'/locate'} component={Locate} />
          <Route path={'/add'} component={AddResource} />
          <Route path={'/edit/:id'} component={EditPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
