import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import GroupOrder from "../../components/GroupOrder";
import ProfileFavRestaurants from "../../containers/ProfileFavRestaurants";
import ProfileFavCuisins from "../../containers/ProfileFavCuisins";
import ProfileSideBar from "../ProfileSideBar";
import profileData from "../profileData/profileData";
import profileEdit from "../profileEdit/profileEdit";
import { connect } from "react-redux";

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
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Route path="/profile" exact component={profileData} />
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
    return <div className="container mt-5 mb-5">you need to login</div>;
  }
};
function mapStateToProps(state) {
  return {
    user: state.user.user,
    token: state.user.token
  };
}
export default connect(mapStateToProps)(Profile);
