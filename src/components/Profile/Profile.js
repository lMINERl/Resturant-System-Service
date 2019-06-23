import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import GroupOrder from "../../components/GroupOrder";
import ProfileFavRestaurants from "../../containers/ProfileFavRestaurants";
import ProfileFavCuisins from "../../containers/ProfileFavCuisins";
import ProfileSideBar from "../ProfileSideBar";
import profileData from "../profileData/profileData";
import profileEdit from "../profileEdit/profileEdit";
import { connect } from "react-redux";
import GroupDetails from "../../containers/GroupDetails";

const Profile = props => {
  if (props.user._id && props.token) {
    return (
      <>
        <div className="container user-profile">
          <div className="row">
            <div className="col-md-3">
              <ProfileSideBar />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <NavLink
                    to="/profile/grouporder"
                    activeClassName="activebtn"
                    className="button button--primary mr-3 button--small-btn button--rounded"
                  >
                    Group Order
                  </NavLink>
                  <NavLink
                    to="/profile/restaurants"
                    activeClassName="activebtn"
                    className="button button--primary mr-3 button--small-btn button--rounded"
                  >
                    Restaurants
                  </NavLink>
                  <NavLink
                    to="/profile/cuisins"
                    activeClassName="activebtn"
                    className="button button--primary mr-3 button--small-btn button--rounded"
                  >
                    Cuisins
                  </NavLink>
                  <NavLink
                    to="/profile"
                    activeClassName="activebtn"
                    className="button button--primary mr-3 button--small-btn button--rounded"
                  >
                    Profile
                  </NavLink>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Route path="/profile"
                     exact 
                     component={profileData} />
                    <Route
                      path="/profile/grouporder"
                      exact
                      component={GroupOrder}
                    />
                    <Route
                      path="/profile/restaurants"
                      exact
                      component={ProfileFavRestaurants}
                    />
                    <Route
                      path="/profile/grouporder/:groupId"
                      exact
                      component={GroupDetails}
                    />
                    <Route
                      path="/profile/cuisins"
                      exact
                      component={ProfileFavCuisins}
                    />
                    <Route path="/profile/edit" exact component={profileEdit} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <h1
        className="d-flex justify-content-center m-5"
        style={{ height: "100vh" }}
      >
        You need to login
      </h1>
    );
  }
};
function mapStateToProps(state) {
  return {
    user: state.user.user,
    token: state.user.token
  };
}
export default connect(mapStateToProps)(Profile);
