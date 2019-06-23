import React, { useEffect, useState } from "react";
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
  setRating,
  sortRestaurants,
  getRestaurantsByname
} from "../../store/actions/restaurantActions";

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.filteredRestaurants,
    pageSize: state.restaurant.pageSize,
    currentPage: state.restaurant.currentPage,
    user: state.user.user,
    token: state.user.token
  };
};
const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      deleteItem,
      changePage,
      setRating,
      getRestaurantsByname,
      sortRestaurants
    },
    dispatch
  );
};

const RestaurantListing = props => {
  const { getRestaurantsByname } = props;
  useEffect(() => {
    getRestaurantsByname("");
  }, [getRestaurantsByname]);

  const [sortName, setSortName] = useState(false);
  const [sortRating, setSortRating] = useState(false);

  // const Restaurants = paginate(
  //   props.restaurants,
  //   props.currentPage,
  //   props.pageSize
  // );

  const onChange = e => {
    props.getRestaurantsByname(e.target.value);
  };

  if (props.restaurants) {
    let restaurantList = props.restaurants ? (
      props.restaurants.map(r => {
        return (
          <CardRestaurant
            key={r._id}
            restaurant={r}
            setrating={(id, rating) => props.setRating(id, rating)}
            delete={() => props.deleteItem(r._id)}
          />
        );
      })
    ) : (
      <div>No Restaurants</div>
    );
    const isLogedIn = () => {
      let obj = { addRestaurant: null };
      if (props.user._id && props.token) {
        obj.addRestaurant = (
          <NavLink
            to="/restaurantform"
            className="badge badge-warning listing-header__btn "
          >
            <i className="fa fa-plus-square" />
            Add Restaurant
          </NavLink>
        );
      }
      return obj;
    };

    return (
      <>
        <div className="h-100 mt-5 mb-5" />
        <div className="h-100 mt-5 mb-5" />
        <div className="h-100 mt-5 mb-5" />
        <div className="h-100 mt-5 mb-5" />

        <div className="">
          <div className="d-flex justify-content-between container mt-5 mb-5 listing-header listing-header--with-margin">
            All Restaurants
            {isLogedIn().addRestaurant}
          </div>
          <div className="menu-card">
            <div className="container">
              <div className="row  align-items-start">
                <div className="col-sm-3">
                  <SideBar />
                </div>
                <div className="col-md-9 d-flex flex-wrap align-content-around">
                  <nav className="navbar navbar-full-width navbar-expand-lg navbar-light bg-light justify-content-between mb-4 p-3 col w-100 align-items-center">
                    <form className="form-inline">
                      <input
                        className="filter-search form-control input-search mr-0 "
                        type="search"
                        placeholder="Search Restaurants"
                        onChange={onChange}
                      />
                    </form>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <ul className="navbar-nav">
                      <li
                        className="nav-item dropdown mx-4"
                        onClick={() => {
                          props.sortRestaurants(sortRating, "rating");
                          setSortRating(!sortRating);
                        }}
                      >
                        <NavLink
                          to="/restaurants"
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Rating
                        </NavLink>
                      </li>
                      <li
                        className="nav-item dropdown mx-4"
                        onClick={() => {
                          props.sortRestaurants(sortName, "name");
                          setSortName(!sortName);
                        }}
                      >
                        <NavLink
                          to="/restaurants"
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          A_Z
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
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
  } else {
    return <React.Fragment />;
  }
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantListing);
