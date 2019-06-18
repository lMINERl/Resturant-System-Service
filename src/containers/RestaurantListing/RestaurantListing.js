import React from "react";
import { NavLink } from "react-router-dom";
import CardRestaurant from "../../components/CardRestaurant";
import Pagination from "../../components/Common/pagination";
import { connect } from "react-redux";
import { paginate } from "../../utils/paginate";
import SideBar from "../../components/SideBar";
import { bindActionCreators } from "redux";
import { getRestaurantsByname } from '../../store/actions/restaurantActions';
import {
  deleteItem,
  changePage,
  setRating
} from "../../store/actions/restaurantActions";

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants,
    pageSize: state.restaurant.pageSize,
    currentPage: state.restaurant.currentPage,
    rests: state.restaurant.rests
  };
};
const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      deleteItem,
      changePage,
      setRating,
      getRestaurantsByname
    },
    dispatch
  );
};
const ASC = 'ascending';
const DSC = 'descending';
const RestaurantListing = props => {
  const sortText = (e) => {
    const { restaurants } = props;
    const rests = restaurants.sort((a, b) => sortByText(a, b, ASC))
    if (rests.length !== 0 && rests !== null) {
      props.getRestaurantsByname(rests);
    }
  }
  const sortNums = (e) => {
    const { restaurants } = props;
    const rests = restaurants.sort((a, b) => sortByNum(a, b, DSC))
    if (rests.length !== 0 && rests !== null) {
      props.getRestaurantsByname(rests);
    }
  }
  function sortByNum(a, b, order = ASC) {
    const diff = a.rating - b.rating;

    if (order === ASC) {
        return diff;
    }

    return -1 * diff;
}

function sortByText(a, b, order = ASC) {
    const diff = a.name.toLowerCase().localeCompare(b.name.toLowerCase());

    if (order === ASC) {
        return diff;
    }

    return -1 * diff;
}
  const onChange = (e) => {
    const userInput = e.target.value;
    const { restaurants } = props;

    const rests = restaurants.filter(r => r.name.toLowerCase().startsWith(userInput.toLowerCase()));
    // this.props.history.replace("/restaurants");
    if (rests.length !== 0 && rests !== null) {
      props.getRestaurantsByname(rests);
    }
  }
  const Restaurants = paginate(
    props.restaurants,
    props.currentPage,
    props.pageSize
  );
  let restaurantList = props.rests ? props.rests.map(r => {
    return (
      <CardRestaurant
        key={r._id}
        restaurant={r}
        setrating={(id, rating) => props.setRating(id, rating)}
        delete={() => props.deleteItem(r._id)}
      />
    );
  }) : Restaurants.map(r => {
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
              <nav
                className="navbar navbar-full-width navbar-expand-lg navbar-light bg-light justify-content-between py-3 mt-4 align-items-center">

                <form className="form-inline">
                  <input
                    className="filter-search form-control input-search mr-0 "
                    type="search"
                    placeholder="Search Restaurants" onChange={onChange} />

                </form>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown mx-4" onClick={sortNums}>
                    <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Rating
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown mx-4" onClick={sortText}>
                    <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantListing);
