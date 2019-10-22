import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Reader from './Reader';

import publications from './publications.json';

function App(props) {
  return (
    <Switch>
      <Route
        path="/reader"
        render={props => <Reader {...props} items={publications} />}
      ></Route>
      <Redirect
        from="/reader"
        to={{ pathname: '/reader', search: '?item=1' }}
      />
      <Redirect to="/reader" />
    </Switch>
  );
}

export default App;
