import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import GroupOrder from '../../components/GroupOrder';
import ProfileFavRestaurants from '../../containers/ProfileFavRestaurants';
import ProfileFavCuisins from '../../containers/ProfileFavCuisins';
import ProfileSideBar from '../ProfileSideBar';

const Profile = (props) => {
  
  return (
    <>
      <ProfileSideBar />
      <NavLink to="/profile/grouporder">Group Order</NavLink>
      <NavLink to="/profile/restaurants">Restaurants</NavLink>
      <NavLink to="/profile/cuisins">Cuisins</NavLink>
      <Switch>
        <Route path="/profile/grouporder" exact component={GroupOrder} />
        <Route path="/profile/restaurants" exact component={ProfileFavRestaurants} />
        <Route path="/profile/cuisins" exact component={ProfileFavCuisins} />
      </Switch>
    </>
  );
}

export default Profile;
