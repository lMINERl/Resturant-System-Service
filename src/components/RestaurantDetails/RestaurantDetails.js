import React from "react";
import CardRestaurant from "../../components/CardRestaurant";
import { connect } from "react-redux";
import { setRating ,deleteItem } from "../../store/actions/restaurantActions";
import { bindActionCreators } from "redux";
import checker from "../../helpers/checker";

const RestaurantDetailsComponent = props => {
  let restaurants = null;
  if (props.restaurants) {
    const filtered = props.restaurants.filter(r =>
      checker(props.match.params.city, r.location)
    );
    restaurants = filtered.map(r => {
      return (
        <CardRestaurant
          key={r._id}
          setrating={(id, rating) => props.setRating(id, rating)}
          restaurant={r}
          delete={() => props.deleteItem(r._id)}
        />
      );
    });
  }

  return (
    <div className="menu-card mt-5">
      <div className="container">
        <div className="row">{restaurants}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants
  };
};
const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      setRating,
      deleteItem
    },
    dispatch
  );
};
const RestaurantDetails = connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantDetailsComponent);
export { RestaurantDetails };
