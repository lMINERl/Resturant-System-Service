import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import GroupOrder from '../GroupOrder/index';
import ProfileFavResturants from '../ProfileFavResturants/index';
import ProfileFavCuisins from '../ProfileFavCuisins/index';
import ProfileSideBar from '../../components/ProfileSideBar/index';

const Profile = (props) => {
  
  return (
    <>
      <ProfileSideBar />
      <NavLink to="/profile/grouporder">Group Order</NavLink>
      <NavLink to="/profile/resturants">Resturants</NavLink>
      <NavLink to="/profile/cuisins">Cuisins</NavLink>
      <Switch>
        <Route path="/profile/grouporder" exact component={GroupOrder} />
        <Route path="/profile/resturants" exact component={ProfileFavResturants} />
        <Route path="/profile/cuisins" exact component={ProfileFavCuisins} />
      </Switch>
    </>
  );
}

export default Profile;
