import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import CardFood from '../components/CardFood';


class App extends React.Component {

  render() {
    return (
      <>
        <CardFood></CardFood>
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
