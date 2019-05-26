const React = require('react');
const { BrowserRouter, Switch, Route, Redirect } = require('react-router-dom');

const add = (a, b) => {
  return a + b;
}

const App = (props) => {
  return (
    <>
    <div>App</div>
      <BrowserRouter>
        <Switch>
          <Route path=""></Route>
          <Redirect path="/home" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

module.exports = { App, add };
