import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import CardResturant from "../../components/CardResturant";
import logo from "../../assets/logo.svg";

const RestaurantListing = props => {
  const [state, setState] = useState({
    restaurants: [
      {
        id: "falhpaiow1241",
        name: "KFC",
        imgUrl: logo,
        rating: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        city:'cairo'
      },
      {
        id: "falhpaiow1242",
        name: "MAC",
        imgUrl: "",
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        city:'alex'
      },
      {
        id: "falhpaiow1243",
        name: "KFC",
        imgUrl: "",
        rating: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        city:'ismailia'
      },
      {
          id: "falhpaiow12sda4",
          name: "KFC",
          imgUrl: "",
          rating: 4,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          city:'ismailia'
        },
      {
          id: "falhpaiow1245",
          name: "KFC",
          imgUrl: "",
          rating: 4,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          city: 'suez'
        }
    ]
  });

  const setRating = (id, rating) => {
    const index = state.restaurants.findIndex(v => {
      return v.id === id;
    });
    if (
      state.restaurants[index].rating > -1 &&
      state.restaurants[index].rating < 5
    ) {
      const nArray = [...state.restaurants];
      nArray[index] = {
        ...state.restaurants[index],
        rating: rating
      };
      setState({
        ...state,
        restaurants: nArray
      });
    }
  };

  let restaurantList = state.restaurants.map(r => {
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
    <h2 className="listing-header">
      All Restaurants
        <NavLink to="/resturantform" className="badge badge-warning listing-header__btn ">
        <i className="fa fa-plus-square" />
        Add Restaurant
        </NavLink>
    </h2>
    <div className="menu-card">
      <div className="container">
        <div className="row">
          {restaurantList}
        </div>
      </div>
    </div>
    </>
  );
};
export default RestaurantListing;
