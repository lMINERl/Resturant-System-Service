import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CardFood from "../../components/CardFood/index";
// import Cart from '../../components/OrderBill/OrderBill';
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import {
  getRestaurantMenu,
  setSize,
  setRating,
  setAmount,
  deleteItem,
  getFilteredItems
} from "../../store/actions/foodActions";
import { getRestaurantById } from "../../store/actions/restaurantActions";
import { addToCart } from "../../store/actions/cartActions";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {
    data: state.food.filteredlist,
    Categories: state.category.categories,
    restaurant: state.restaurant.selectedRestaurant,
    user: state.user.user,
    token: state.user.token
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurantMenu,
      addToCart,
      setSize,
      setRating,
      setAmount,
      deleteItem,
      getFilteredItems,
      getRestaurantById
    },
    dispatch
  );
}

class CardListing extends Component {
  // from database
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getRestaurantMenu(this.props.match.params.id);
      this.props.getRestaurantById(this.props.match.params.id);

      // this.props.history.push("/") // notfound
    } else {
      this.props.getFilteredItems([], "category", true);
    }
  }

  setAmount = (id, amount) => {
    this.props.setAmount(id, amount);
  };

  setRating = (id, rating) => {
    this.props.setRating(id, rating);
  };
  setSize = (id, size) => {
    this.props.setSize(id, size);
  };

  dispatchAddToCart(cardItem) {
    this.props.addToCart(cardItem);
  }

  render() {
    let menuListing = this.props.data ? (
      this.props.data.map((v, index) => {
        return (
          <div className="col-md-4 mb-4" key={v._id}>
            <CardFood
              key={v._id}
              delete={() => this.props.deleteItem(v._id)}
              handleOnAdd={this.dispatchAddToCart.bind(this)}
              data={v}
              setsize={this.setSize.bind(this)}
              setrating={this.setRating.bind(this)}
              setamount={this.setAmount.bind(this)}
            />
          </div>
        );
      })
    ) : (
      <div>not found</div>
    );

    const isLogedIn = () => {
      let obj = { addFood: null };
      if (this.props.user._id && this.props.token) {
        obj.addRestaurant = (
          <NavLink
            to="/foodform"
            className="badge badge-warning listing-header__btn "
          >
            <i className="fa fa-plus-square" />
            Add Food
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
            {this.props.restaurant.name}'s Menu
            {isLogedIn().addFood}
          </div>
        </div>
        <div className="menu-card mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <SideBar data={this.props.data} />
              </div>
              <div className="col-md-9 d-flex flex-wrap align-content-around">
                {menuListing}
              </div>
            </div>
          </div>
          {/* <Cart /> */}
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CardListing);
