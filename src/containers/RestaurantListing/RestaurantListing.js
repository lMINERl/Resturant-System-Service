import React from "react";
import { NavLink } from 'react-router-dom';
import CardResturant from "../../components/CardResturant";
import Pagination from "../../components/Common/pagination";
import { connect } from 'react-redux';
import { paginate } from '../../utils/paginate'
import SideBar from "../../components/SideBar";

const mapStateToProps = (state) => {
  return {
    restaurants: state.user.restaurants,
    pageSize: state.user.pageSize,
    currentPage: state.user.currentPage,


  }
}
const mapDispatchToProps = dispatch => {
  return {
    onPageChange: (currentPage) =>
      dispatch({
        type: "CHANGECURRENT",
        payload: currentPage
      })
  }
}
const RestaurantListing = props => {

  const setRating = (id, rating) => {
    // const index = state.restaurants.findIndex(v => {
    //   return v.id === id;
    // });
    // if (
    //   state.restaurants[index].rating > -1 &&
    //   state.restaurants[index].rating < 5
    // ) {
    //   const nArray = [...state.restaurants];
    //   nArray[index] = {
    //     ...state.restaurants[index],
    //     rating: rating
    //   };
    //   setState({
    //     ...state,
    //     restaurants: nArray
    //   });
    //   }
  };

  const Restaurants = paginate(props.restaurants, props.currentPage, props.pageSize)
  let restaurantList = Restaurants.map(r => {
    return (
      <CardResturant
        setrating={(id, rating) => setRating(id, rating)}
        key={r.id}
        resturant={r}
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
        <NavLink to="/resturantform" className="badge badge-warning listing-header__btn ">
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
            <Pagination itemCount={props.restaurants.length} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} />
          </div>
        </div>
      </div>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListing);
