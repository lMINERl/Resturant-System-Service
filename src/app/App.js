import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import CardListing from '../containers/CardListing/index';


class App extends React.Component {

  render() {
    return (
      <>
        <CardListing />
        <BrowserRouter>
          <Switch>
            <Route path=""></Route>
            <Redirect path="/home" to="/" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
