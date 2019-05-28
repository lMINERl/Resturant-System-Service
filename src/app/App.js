import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../containers/Navigation/index';
import HomePage from '../components/HomePage/index';
import FormAddFood from '../containers/FormAddFood/index';
import FormCreateGroup from '../containers/FormCreateGroup/index';
import FormCreateResturant from '../containers/FormCreateResturant/index';
import FormLogin from '../containers/FormLogin/index';
import FormRegister from '../containers/FormRegister/index';
import GroupOrder from '../containers/GroupOrder/index';
import Footer from '../components/Footer/index';
import FoodDetails from '../containers/FoodDetails/index';
import ResturantDetails from '../containers/ResturantDetails/index';
import CardListing from '../containers/CardListing/index';
import Profile from '../containers/Profile/index';


class App extends React.Component {

  render() {
    return (
      <>
        {/* <CardListing /> */}
        <>
          <BrowserRouter>
            <>
              <Navigation />
              <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/foodform" exact component={FormAddFood}></Route>
                <Route path="/groupform" exact component={FormCreateGroup}></Route>
                <Route path="/resturantform" exact component={FormCreateResturant}></Route>
                <Route path="/login" exact component={FormLogin}></Route>
                <Route path="/register" exact component={FormRegister}></Route>
                <Route path="/grouporder" exact component={GroupOrder}></Route>
                <Route path="/fooddetails" exact component={FoodDetails}></Route>
                <Route path="/offers" exact component={CardListing}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/resturantdetails" exact component={ResturantDetails}></Route>
                <Redirect path="/home" to="/" />
              </Switch>
              <Footer />
            </>
          </BrowserRouter>
        </>
      </>
    );
  }
}

export default App;
