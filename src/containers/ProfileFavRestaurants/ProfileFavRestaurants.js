import React from 'react';
import { connect } from 'react-redux';
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant';
import { bindActionCreators } from "redux";
import {
  deleteItem,
  setRating
} from "../../store/actions/restaurantActions";
const ProfileFavRestaurants = (props) => {
  let restaurantList = props.restaurants.map(r =>
    
    <CardRestaurant
      key={r._id}
      restaurant={r}
      setrating={(id, rating) => props.setRating(id, rating)}
      delete={() => props.deleteItem(r._id)} />)
  return (
    <div className="row">
        {restaurantList}
    </div>
  );
}
const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      deleteItem,
      setRating
    },
    dispatch
  );
};
function mapStateToProps(state) {
  return {
    restaurants: state.restaurant.restaurants
  }
}
export default connect(mapStateToProps, mapActionsToProps)(ProfileFavRestaurants);
