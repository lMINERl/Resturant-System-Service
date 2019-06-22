import React from "react";
import StarRating from "../../components/StarRating";
import { NavLink } from "react-router-dom";
import { addRestaurantToGroup } from "../../store/actions/groupActions";
import { getRestaurantById } from "../../store/actions/restaurantActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const CardRestaurant = props => {
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
              <i className="fa fa-pencil" />
              <i onClick={() => props.delete()} className="fa fa-trash" />
              <i className="fa fa-heart-o" />
            </div>
            <div className="star-rating">
              <ul className="list-inline ">
                <StarRating
                  setRate={rating =>
                    props.setrating(props.restaurant._id, rating)
                  }
                  rating={props.restaurant.rating}
                  outof={5}
                />
              </ul>
            </div>
            <div className="menu-card__data">
              <p className="menu-card__data-info">
                {props.restaurant.description}
              </p>
            </div>
            <button className="button button--primary button--small-btn viewMenu-button">
              <NavLink
                to={`/menus/${props.restaurant._id}`}
                onClick={() => props.viewRestaurantMenu(props.restaurant._id)}
              >
                <i className="fa fa-spoon margin-right viewMenu-button" />
                View Menu
              </NavLink>
            </button>
            <button
              onClick={() => props.addRestaurantToGroup(props.restaurant)}
              className="button button--black button--small-btn custom-btn"
            >
              <NavLink to="/profile/grouporder">Add to group</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapActionToProps(dispatch) {
  return bindActionCreators(
    {
      addRestaurantToGroup,
      getRestaurantById
    },
    dispatch
  );
}

export default connect(
  null,
  mapActionToProps
)(CardRestaurant);
