import React from "react";
import StarRating from "../../components/StarRating";
import { NavLink } from "react-router-dom";
const CardResturant =props=> {
    return (
      <div className="col-md-6">
                <div className="menu-card__item mb-3 mr-3">
        <div className="menu-card__info-data">
          <div className="menu-card__image-card">
            <img
              className="menu-card__image"
              alt="logo"
              src={props.resturant.imgUrl}
            />
          </div>
          <div className="menu-card__menu-data">
            <NavLink
              to={`/restaurants/details/${props.resturant.id}`}
              onClick={() => props.viewRestaurant(props.resturant.id)}
            >
              <h3 className="menu-card__heading">{props.resturant.name}</h3>
              <p>{props.resturant.city}</p>
            </NavLink>
            <div className="menu-card__edit-delete-fav">
              <i className="fa fa-pencil" />
              <i className="fa fa-trash" />
              <i className="fa fa-heart-o" />
            </div>
            <div className="star-rating">
              <ul className="list-inline">
                <StarRating
                  setRate={rating => props.setrating(props.resturant.id, rating)}
                  rating={props.resturant.rating}
                  outof={5}
                />
              </ul>
            </div>
            <div className="menu-card__data">
              <p className="menu-card__data-info">
                {props.resturant.description}
              </p>
            </div>
            <button className="button button--primary button--small-btn">
              <NavLink
                to={`/menus/${props.resturant.id}`}
                onClick={() => props.viewRestaurantMenu(props.resturant.id)}
              >
                <i className="fa fa-spoon margin-right" />
                View Menu
              </NavLink>
            </button>
            <button className="button button--black button--small-btn">
            <NavLink to="/profile/grouporder">
              Add to group
            </NavLink>
            </button>
          </div>
        </div>
      </div>
      </div>
      
    );
  
};

export default CardResturant;
