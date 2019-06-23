import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "../containers/Navigation/";
import HomePage from "../components/HomePage/";
import FormAddFood from "../containers/FormAddFood/";
import FormCreateGroup from "../containers/FormCreateGroup/";
import FormCreateRestaurant from "../containers/FormCreateRestaurant/";
import FormLogin from "../containers/FormLogin/";
import FormRegister from "../containers/FormRegister/";
import Footer from "../components/Footer/";
import FoodDetails from "../containers/FoodDetails/";
import { RestaurantDetails } from "../components/RestaurantDetails";
import CardListing from "../containers/CardListing/";
import MenuListing from "../containers/menuListing/menuListing";
import Profile from "../components/Profile";
import RestaurantListing from "../containers/RestaurantListing";
import RestaurantDetailsPage from "../containers/RestaurantDetailsPage/RestaurantDetailsPage";
class App extends React.Component {
  render() {
    return (
      <>
        <>
          <BrowserRouter>
            <>
              <Navigation />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route
                  path="/foodform/:restaurantId"
                  exact
                  component={FormAddFood}
                />
                <Route path="/groupform" exact component={FormCreateGroup} />
                <Route
                  path="/restaurantform"
                  exact
                  component={FormCreateRestaurant}
                />
                <Route path="/login" exact component={FormLogin} />
                <Route path="/register" exact component={FormRegister} />
                <Route path="/fooddetails" exact component={FoodDetails} />
                <Route path="/offers" exact component={CardListing} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/menus/:id" exact component={CardListing} />
                <Route path="/menus" exact component={MenuListing} />
                <Route path="/profile" component={Profile} />

                <Route
                  path="/restaurants"
                  exact
                  component={RestaurantListing}
                />

                <Route
                  path="/restaurants/:city"
                  exact
                  component={RestaurantDetails}
                />

                <Route
                  path="/restaurants/details/:restaurantId"
                  exact
                  component={RestaurantDetailsPage}
                />
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
