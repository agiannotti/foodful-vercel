import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import history from '../../Context/history';
import Main from '../Main/Main';
import Mission from '../Mission/Mission';
import Locate from '../Foodful/LocatePage';
import Contact from '../Contact/Contact';
import AddResource from '../Add/AddResource';
import EditPage from '../Edit/EditPage';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Route exact path={'/'} component={Main} />
        <Route path={'/mission'} component={Mission} />
        <Route path={'/locate'} component={Locate} />
        <Route path={'/contact'} component={Contact} />
        <Route path={'/add'} component={AddResource} />
        <Route path={'/edit/:id'} component={EditPage} />
      </Router>
    </div>
  );
}

export default App;
