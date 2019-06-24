import React from "react";
import StarRating from "../../components/StarRating";
import { NavLink } from "react-router-dom";
import { addRestaurantToGroup } from "../../store/actions/groupActions";
import readMore from "../../helpers/readMore";

import {
  getRestaurantById,
  setRating
} from "../../store/actions/restaurantActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
    roles: state.user.roles
  };
};
function mapActionToProps(dispatch) {
  return bindActionCreators(
    {
      addRestaurantToGroup,
      getRestaurantById,
      setRating
    },
    dispatch
  );
}

const CardRestaurant = props => {
  const isLogedIn = () => {
    let obj = {
      deleteRestaurant: null,
      editRestaurant: null,
      favResturant: null,
      addToGroup: null
    };
    if (props.user._id && props.token) {
      obj.favResturant = <i className="fa fa-heart-o" />;
      obj.addToGroup = (
        <button
          type="button"
          onClick={() => props.addRestaurantToGroup(props.restaurant)}
          className="button button--black button--small-btn"
      
        >
          <NavLink to="/profile/grouporder" className="text-white">Add to group</NavLink>
        </button>
      );
      if (props.user.roles.some(v => v === "delete"))
        obj.deleteRestaurant = (
          <i onClick={() => props.delete()} className="fa fa-trash" />
        );
      if (props.user.roles.some(v => v === "edit"))
        obj.editRestaurant = <i className="fa fa-pencil" />;
    }
    return obj;
  };

  return (
    <div className="col-md-6">
      <div className="menu-card__item mb-3 mr-3">
        <div className="menu-card__info-data">
          <div className="menu-card__image-card">
            <img
              className="menu-card__image"
              alt="logo"
              src={props.restaurant.imgUrl}
            />
          </div>
          <div className="menu-card__menu-data">
            <NavLink
              onClick={() => props.getRestaurantById(props.restaurant._id)}
              to={`/restaurants/details/${props.restaurant._id}`}
            >
              <h3 className="menu-card__heading">{props.restaurant.name}</h3>
              <p>{props.restaurant.city}</p>
            </NavLink>
            <div className="menu-card__edit-delete-fav">
              {isLogedIn().editRestaurant}
              {isLogedIn().deleteRestaurant}
              {isLogedIn().favResturant}
            </div>
            <div className="star-rating">
              <ul className="list-inline ">
                <StarRating
                  setRate={rating => {
                    return props.setrating(props.restaurant._id, rating);
                  }}
                  rating={props.restaurant.rating}
                  outof={5}
                />
              </ul>
            </div>
            <div className="menu-card__data">
              <p className="menu-card__data-info">
                {readMore(props.restaurant.description, 60)}
              </p>
            </div>
            <div className="d-flex justify-content-center w-100">
              <button type="button" className="button button--primary button--small-btn">
                <NavLink
                  style={{ color: "white" }}
                  to={`/menus/${props.restaurant._id}`}
                  onClick={() => props.viewRestaurantMenu(props.restaurant._id)}
                >
                  <i className="fa fa-spoon margin-right" />
                   View Menu
                </NavLink>
              </button>

              {isLogedIn().addToGroup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(CardRestaurant);
