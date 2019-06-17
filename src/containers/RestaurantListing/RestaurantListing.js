import React from "react";
import { NavLink } from "react-router-dom";
import CardRestaurant from "../../components/CardRestaurant";
import Pagination from "../../components/Common/pagination";
import { connect } from "react-redux";
import { paginate } from "../../utils/paginate";
import SideBar from "../../components/SideBar";
import { bindActionCreators } from "redux";
import {
  deleteItem,
  changePage,
  setRating
} from "../../store/actions/restaurantActions";

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants,
    pageSize: state.restaurant.pageSize,
    currentPage: state.restaurant.currentPage
  };
};
const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      deleteItem,
      changePage,
      setRating
    },
    dispatch
  );
};

const RestaurantListing = props => {
  const Restaurants = paginate(
    props.restaurants,
    props.currentPage,
    props.pageSize
  );
  let restaurantList = Restaurants.map(r => {
    return (
      <CardRestaurant
        key={r._id}
        restaurant={r}
        setrating={(id, rating) => props.setRating(id, rating)}
        delete={() => props.deleteItem(r._id)}
      />
    );
  });
  return (
    <>
      <div className="h-100 mt-5 mb-5" />
      <div className="h-100 mt-5 mb-5" />
      <div className="h-100 mt-5 mb-5" />
      <div className="h-100 mt-5 mb-5" />

      <div className="">
        <div className="d-flex justify-content-between container mt-5 mb-5 listing-header listing-header--with-margin">
          All Restaurants
          <NavLink
            to="/restaurantform"
            className="badge badge-warning listing-header__btn "
          >
            <i className="fa fa-plus-square" />
            Add Restaurant
          </NavLink>
        </div>
        <div className="menu-card">
          <div className="container">
            <div className="row  align-items-start">
              <div className="col-sm-3">
                <SideBar />
              </div>
              <div className="col-md-9 d-flex flex-wrap align-content-around">
                {restaurantList}
              </div>
            </div>
            <Pagination
              itemCount={props.restaurants.length}
              pageSize={props.pageSize}
              currentPage={props.currentPage}
              onPageChange={props.onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantListing);
