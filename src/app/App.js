import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "../containers/Navigation/";
import HomePage from "../components/HomePage/";
import FormAddFood from "../containers/FormAddFood/";
import FormCreateGroup from "../containers/FormCreateGroup/";
import FormCreateResturant from "../containers/FormCreateResturant/";
import FormLogin from "../containers/FormLogin/";
import FormRegister from "../containers/FormRegister/";
import Footer from "../components/Footer/";
import FoodDetails from "../containers/FoodDetails/";
import { ResturantDetails } from "../containers/ResturantDetails/";
import CardListing from "../containers/CardListing/";
import Profile from "../containers/Profile/";
import ResturantListing from "../containers/RestaurantListing";
// import Filter from "../components/Filter/Filter";

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
                <Route path="/" exact component={HomePage} />
                <Route path="/foodform" exact component={FormAddFood} />
                <Route path="/groupform" exact component={FormCreateGroup} />
                <Route
                  path="/resturantform"
                  exact
                  component={FormCreateResturant}
                />
                <Route path="/login" exact component={FormLogin} />
                <Route path="/register" exact component={FormRegister} />
                <Route path="/fooddetails" exact component={FoodDetails} />
                <Route path="/offers" exact component={CardListing} />
                <Route path="/profile" component={Profile} />
                <Route path="/restaurants" exact component={ResturantListing} />
                <Route
                  path="/restaurants/:city"
                  exact
                  component={ResturantDetails}
                />
                {/* <Route path="/filter" exact component={Filter} /> */}

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
